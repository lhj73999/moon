var img;
var bg;

function setup() {
  createCanvas(800,800);
  bg = loadImage("space.jpg");
  img = loadImage("moon.png");
}

function draw() {
   background(bg);
  
   fill(255,64,64);
   noStroke()

   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   image(img,400 + Math.cos(timing*2*PI)*200,       
        400 + Math.sin(timing*2*PI)*200);                                 
}