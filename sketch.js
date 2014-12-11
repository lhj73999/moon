var bg;
var y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the size() method. In this program, the size of the image
  // is 710x400 pixels.
  bg = loadImage("space.png");
  img = loadImage("earth.png");
  img2 = loadImage("moon.png");
  img3 = loadImage("neptune.png");
  img4 = loadImage("venus.png");
  img5 = loadImage("mars.png");
  img6 = loadImage("sun.png");
  createCanvas(500, 500);
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
   image(img4,250 + Math.cos(timing*2*PI)*200,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        40,                                     // width
        40);                                    // height
   //타원궤도 행성
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fi