var img;
var bg;
var y = 0;

function setup() {

  bg = loadImage("space.jpg");
  img = loadImage("moon.png");

}

function draw() {
   background(bg);
  
   fill(255,64,64);
   noStroke()
   image(img6, 140,140,270,270);
   //노란
   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   fill(229,211,136);
   noStroke()
   image(img,250 + Math.cos(timing*2*PI)*200,       
        250 + Math.sin(timing*2*PI)*200,      
        40,                                   
        40);                                 

}