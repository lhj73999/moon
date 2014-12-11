var img;
var bg;
var y = 0;

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

   image(img,250 + Math.cos(timing*2*PI)*200,       
        250 + Math.sin(timing*2*PI)*200,      
        40,                                   
        40);                                 

}