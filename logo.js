var points;
var centerX;
var centerY;
var radius = 200;

var fonts;

function setup(){
	createCanvas(windowWidth, windowHeight);
	centerX = width/2;
	centerY = height/2;

	points = [];

	for(var i = 0; i< 65; i++){
		points[i] = new Point(centerX, centerY, radius);
	}

	textFont("Comfortaa");

}

function draw(){
	background(252, 178, 22);
	fill(250, 255, 255);
	
	ellipseMode(CENTER);

	for(var i =0; i<points.length; i++){
		points[i].incrementation();
		points[i].display();
	}

	stroke(250, 255, 255);
	strokeWeight(5);

	for(var i = 0; i< points.length-1; i++){

		line(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
	}

	line(points[points.length-1].x, points[points.length-1].y, points[0].x, points[0].y);

	//rotate(-.2);

	noStroke();
	fill(252, 178, 22);
	textSize(400);
	text("e", width/2-120, height/2+120);

}

function Point(centerX_, centerY_, radius_){
	var centerX = centerX_;
	var centerY = centerY_;
	var speed = random(0.015);
	var radius = radius_;
	var angle = 0;
	var direction = int(random(-2, 2));

	if(direction ==0){
		direction = 1;
	}

	var x;
	var y;

	this.display = function(){
stroke(250, 255, 255);
	strokeWeight(5);
		x = centerX + radius*sin(angle);
		y = centerY + radius*cos(angle);
		this.x = x;
		this.y = y;

		ellipse(x, y, 1, 1);

	}

	this.incrementation = function(){
		angle = angle + (speed*direction);
	}
}
