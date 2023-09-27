function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

// function draw() {
// 	fill(255)
// 	square(width/2, height/2, 100);
// }

function windowResized(){ resizeCanvas(windowWidth,windowHeight)}
	

function mousePressed() {
	var count=int(random(5,15))
	var r=random(50,200)
	for(var i=0; i<count;i++){
	fill(random(255),random(200,255),random(100,200));
ellipse(mouseX+i*5, mouseY,r);
	r*=0.9}
}





