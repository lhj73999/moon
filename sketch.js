var img;
var bg;

function setup() {
  createCanvas(800,800);
  bg = loadImage("space.jpg");
  img = loadImage("moon.png");
  img2 = loadImage("boo.png");
  img3 = loadImage("mooo.png");
 

}

function draw() {
   background(bg);
  
   fill(255,64,64);
   noStroke()

   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   image(img,400 + Math.cos(timing*2*PI)*200-100,       
        400 + Math.sin(timing*2*PI)*200-100,200,150);  
 
 var duration = 6000;
   var timing = (new Date()%duration)/duration;
 
        image(img2,400 + Math.cos(timing*2*PI)*200-100,       
        400 + Math.sin(timing*2*PI)*200-100,100,100);                                 


         var duration = 5000;
   var timing = (new Date()%duration)/duration;

 image(img3,400 + Math.cos(timing*2*PI)*200-100,       
        400 + Math.sin(timing*2*PI)*200-100,100,100);                                 


} 