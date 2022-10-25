// Create let and var for later function use
let button;
let system;
let windowWidth = 1229;
let windowHeight = 768;
let sprite;
let boxes, cursor;
let ele;
let circles, bigCircles, littleCircles, walls;
var paddleA, paddleB, wallTop, wallBottom;
var snowX = [];
var snowY = [];
var virtualscreen1;
var virtualscreen2;
var virtualscreen3;
var virtualscreen4;
var virtualscreen5;
var virtualscreen6;
var virtualscreen7;
var virtualscreen8;
var mgr;
var t = 0;
var c = [];
var index = 0;
var myColour;
var transparency;
var transparency2;

// Create image preload for later function use
function preload() {
  img = loadImage("img/Gallery-01.jpg");
  img2 = loadImage("img/Gallery-02.jpg");
  img3 = loadImage("img/Gallery-03.jpg");
  img4 = loadImage("img/Gallery-04.jpg");
  img5 = loadImage("img/Gallery-05.jpg");
  img6 = loadImage("img/Gallery-06.jpg");
  img7 = loadImage("img/object1.png");
  img8 = loadImage("img/object2.png");
  img9 = loadImage("img/object3.png");
  img10 = loadImage("img/object4.png");
  img11 = loadImage("img/object5.png");
  img12 = loadImage("img/object6.png");
  img13 = loadImage("img/brush1.png");
  img14 = loadImage("img/brush2.png");
  img15 = loadImage("img/brush3.png");
  img16 = loadImage("img/brush4.png");
  img17 = loadImage("img/brush5.png");
  img18 = loadImage("img/brush6.png");
}

// Setup is used to define initial environment properties
function setup() {
  // createCanvas function tells the computer the canvas size
  createCanvas(windowWidth, windowHeight);
  // createAudio autoplay and loop for the background sound
  ele = createAudio('audio.mp3');
  ele.autoplay(true);
  ele.loop(true);
  // Set up the SceneManager function
  mgr = new SceneManager();
  mgr.addScene(Scene1);
  mgr.addScene(Scene2);
  mgr.addScene(Scene3);
  mgr.addScene(Scene4);
  mgr.addScene(Scene5);
  mgr.addScene(Scene6);
  mgr.showNextScene();
  // Set up the virtual screens within the frames
  virtualscreen1 = createGraphics(146, 86);
  virtualscreen1.background(226);
  virtualscreen2 = createGraphics(146, 86);
  virtualscreen2.background(226);
  virtualscreen3 = createGraphics(146, 86);
  virtualscreen3.background(226);
  virtualscreen4 = createGraphics(146, 86);
  virtualscreen4.background(226);
  virtualscreen5 = createGraphics(146, 86);
  virtualscreen5.background(226);
  virtualscreen6 = createGraphics(146, 86);
  virtualscreen6.background(226);
  virtualscreen7 = createGraphics(128, 86);
  virtualscreen7.background(226);
  virtualscreen8 = createGraphics(128, 86);
  virtualscreen8.background(226);
  // Set up the colours used on colour palettes
  c[0] = color(0);
  c[1] = color(183, 28, 28);
  c[2] = color(191, 54, 12);
  c[3] = color(230, 81, 0);
  c[4] = color(255, 111, 0);
  c[5] = color(251, 192, 45);
  c[6] = color(175, 180, 43);
  c[7] = color(85, 139, 47);
  c[8] = color(46, 125, 50);
  c[9] = color(0, 105, 92);
  c[10] = color(0, 151, 167);
  c[11] = color(2, 136, 209);
  c[12] = color(13, 71, 161);
  c[13] = color(40, 53, 147);
  c[14] = color(69, 39, 160);
  c[15] = color(106, 27, 154);
  c[16] = color(130, 119, 23);
  c[17] = color(158, 157, 36);
  c[18] = color(175, 180, 43);
  c[19] = color(192, 202, 51);
  c[20] = color(205, 220, 57);
  c[21] = color(51, 105, 30);
  c[22] = color(85, 139, 47);
  c[23] = color(104, 159, 56);
  c[24] = color(124, 179, 66);
  c[25] = color(139, 195, 74);
  c[26] = color(27, 94, 32);
  c[27] = color(46, 125, 50);
  c[28] = color(56, 142, 60);
  c[29] = color(67, 160, 71);
  c[30] = color(76, 175, 80);
  c[31] = color(26, 35, 126);
  c[32] = color(40, 53, 147);
  c[33] = color(57, 73, 171);
  c[34] = color(63, 81, 181);
  c[35] = color(92, 107, 192);
  c[36] = color(49, 27, 146);
  c[37] = color(69, 39, 160);
  c[38] = color(94, 53, 177);
  c[39] = color(126, 87, 194);
  c[40] = color(149, 117, 205);
  c[41] = color(74, 20, 140);
  c[42] = color(106, 27, 154);
  c[43] = color(142, 36, 170);
  c[44] = color(171, 71, 188);
  c[45] = color(186, 104, 200);
  c[46] = color(230, 81, 0);
  c[47] = color(239, 108, 0);
  c[48] = color(251, 140, 0);
  c[49] = color(255, 167, 38);
  c[50] = color(255, 183, 77);
  c[51] = color(255, 111, 0);
  c[52] = color(255, 143, 0);
  c[53] = color(255, 160, 0);
  c[54] = color(255, 193, 7);
  c[55] = color(255, 202, 40);
  c[56] = color(245, 127, 23);
  c[57] = color(249, 168, 37);
  c[58] = color(251, 192, 45);
  c[59] = color(253, 216, 53);
  c[60] = color(255, 235, 59);
  c[61] = color(0, 96, 100);
  c[62] = color(0, 131, 143);
  c[63] = color(0, 151, 167);
  c[64] = color(0, 172, 193);
  c[65] = color(0, 188, 212);
  c[66] = color(1, 87, 155);
  c[67] = color(2, 119, 189);
  c[68] = color(2, 136, 209);
  c[69] = color(3, 155, 229);
  c[70] = color(3, 169, 244);
  c[71] = color(13, 71, 161);
  c[72] = color(21, 101, 192);
  c[73] = color(25, 118, 210);
  c[74] = color(30, 136, 229);
  c[75] = color(66, 165, 245);
  c[76] = color(40, 40, 40);
  c[77] = color(66, 66, 66);
  c[78] = color(97, 97, 97);
  c[79] = color(117, 117, 117);
  c[80] = color(158, 158, 158);
  c[81] = color(62, 39, 35);
  c[82] = color(78, 52, 46);
  c[83] = color(93, 64, 55);
  c[84] = color(109, 76, 65);
  c[85] = color(121, 85, 72);
  c[86] = color(38, 50, 56);
  c[87] = color(55, 71, 79);
  c[88] = color(69, 90, 100);
  c[89] = color(84, 110, 122);
  c[90] = color(96, 125, 139);
  // Select one of the colours as mycolour for later use
  myColour = c[13];
  // Create a button, set the size and position, colour and font size
  button2 = createButton(
    "Mouse: Draw | Key0: Reset Sketch | Palette: Select Colours"
  );
  button2.size(724, 400);
  button2.style("font-size", "20px");
  button2.style("background-color:rgb(224,224,224); border:none;");
  button2.hide();
  // Create a button for closing function
  button = createButton("");
  button.position(690, -365);
  button.size(5, 12);
  button.mousePressed(Disablerect);
  button.style("background-color:rgb(183, 28, 28); border:none;");
  button.hide();
  // Set up the particle system
  system = new ParticleSystem(createVector(605, 640));
  // Set up the snow area
  for (var i = 0; i < windowWidth; i += 5) {
    snowX[i] = random(0, windowWidth);
    snowY[i] = random(0, windowHeight);
  }
  // Set up the paddles in p5 play
  paddleA = new Sprite(550, 149, 2, 88);
  paddleA.immovable = true;
  paddleB = new Sprite(680, 149, 2, 88);
  paddleB.immovable = true;
  wallTop = new Sprite(615, 105, 128, 2);
  wallTop.immovable = true;
  wallBottom = new Sprite(615, 192, 128, 2);
  wallBottom.immovable = true;
  // Set up the boxes in p5 play
  boxes = new Group();
  for (let i = 0; i < 4; i++) {
    let box = new Sprite(random(550, 680), random(105, 192), 10, 10);
    box.fixedRotation = true;
    noStroke();
    box.drag = box.mass;
    boxes.add(box);
  }
  cursor = 0;
  // Set up the paddles' colour
  paddleA.shapeColor = paddleB.shapeColor = wallTop.shapeColor = wallBottom.shapeColor = color(0,0,0,0);
  // Set up the boxes' bounciness and friction
  boxes.bounciness = 0.5;
  boxes.friction = 0;
 // Set up the circles function
  planck.Settings.velocityThreshold = 0;
  circles = new Group();
  circles.bounciness = 1;
  circles.friction = 0;
  circles.direction = () => random(0, 360);
  circles.x = () => random(895, 750);
  circles.y = () => random(350, 270);
  bigCircles = new circles.Group();
  bigCircles.diameter = 5;
  bigCircles.mass = PI * 100;
  bigCircles.speed = 3;
  bigCircles.amount = 3;
  littleCircles = new circles.Group();
  littleCircles.diameter = 5;
  littleCircles.mass = PI * 25;
  littleCircles.speed = 0;
  littleCircles.amount = 10;
  // Set up the walls
  walls = new Group();
  walls.collider = "static";
  walls.shapeColor = color(0,0,0,0);
  // Set up the walls' position
  new walls.Sprite(750, 313, 2, 88);
  new walls.Sprite(896, 312, 2, 88);
  new walls.Sprite(823, 270, 145, 2);
  new walls.Sprite(823, 355, 145, 2);
}

// The draw function continuously executes the lines of code contained inside its block until the program is stopped
function draw() {
  // Activate the scene change function
  mgr.draw();
  // The right bottom corner's guidance circle
  fill(106, 27, 154);
  circle(1185.5, 715,45,45);
  // The text on the right bottom corner's guidance circle
  fill(255, 210);
  textSize(28);
  text("?", 1177, 725);
  // Activate the virtual screens
  virtual1();
  virtual2();
  virtual3();
  virtual4();
  virtual5();
  virtual6();
  virtual7();
  virtual8();
  // Activate the particle system
  system.addParticle();
  system.run();
}

// The function that will activate the buttons
function rect1() {
  button2.show();
  button.show();
}

// Activate the virtual screen, drawing effects in virtual screen1
function virtual1() {
  image(virtualscreen1, 333, 269);
  // Start drawing on mouse press, no stroke and the colour is 'myColor'
  if (mouseIsPressed == true) {
    virtualscreen1.fill(myColour);
    virtualscreen1.noStroke();
    virtualscreen1.circle(mouseX - 333, mouseY - 269, random(4, 10));
  }
}

// Activate the virtual screen, drawing effects in virtual screen2
function virtual2() {
  image(virtualscreen2, 333, 435);
  // An abstract artwork
  image(img13,random(350,351),450,28,18);
  image(img14,random(440,442),490,28,18);
  image(img15,random(335,336),495,28,18);
  image(img16,365,500,23,15);
  image(img18,440,460,23,15);
  // Start drawing on mouse press, no stroke and the colour is 'myColor'
  if (mouseIsPressed == true) {
    virtualscreen2.fill(myColour);
    virtualscreen2.noStroke();
    virtualscreen2.circle(mouseX - 333, mouseY - 435, 7);
  }
}

// Activate the virtual screen, drawing effects in virtual screen3
function virtual3() {
  image(virtualscreen3, 333, 105);
  // Start drawing on mouse press, no stroke and the colour is 'myColor'
  if (mouseIsPressed == true) {
    virtualscreen3.fill(myColour);
    virtualscreen3.noStroke();
    virtualscreen3.circle(mouseX - 333, mouseY - 105, 7);
  }
}

// Activate the virtual screen, drawing effects in virtual screen4
function virtual4() {
  image(virtualscreen4, 750, 105);
  // Start drawing on mouse press, no stroke and the colour is 'myColor'
  if (mouseIsPressed == true) {
    virtualscreen4.fill(myColour);
    virtualscreen4.noStroke();
    virtualscreen4.circle(mouseX - 750, mouseY - 105, 7);
  }
}

// Activate the virtual screen, p5 play effect in virtual screen5
function virtual5() {
  image(virtualscreen5, 750, 269);
  // Start playing on mouse press
  if (mouse.presses()) circles.direction = 90;
}

// Activate the virtual screen, drawing effects in virtual screen6
function virtual6() {
  image(virtualscreen6, 750, 435);
  // Start drawing on mouse press, no stroke and the colour is 'myColor'
  if (mouseIsPressed == true) {
    virtualscreen6.fill(myColour);
    virtualscreen6.noStroke();
    virtualscreen6.circle(mouseX - 750, mouseY - 435, 7);
  }
}

// Activate the virtual screen, drawing effects in virtual screen7
function virtual7() {
  image(virtualscreen7, 550, 435);
  // Start drawing on mouse press, no stroke and the colour is 'myColor'
  if (mouseIsPressed == true) {
    virtualscreen7.fill(myColour);
    virtualscreen7.noStroke();
    virtualscreen7.rect(mouseX - 550, mouseY - 435, 7);
  }
}

// Activate the virtual screen, p5 play effect in virtual screen8
function virtual8() {
  image(virtualscreen8, 550, 105);
  // Start collision on mouse move
  boxes[cursor].moveTowards(mouse.x, mouse.y, 0.1);
  boxes.cull(0, (box) => {
    if (box == boxes[cursor]) return;
    box.moveTo(width * 0.5, height * 0.5);
  });
  drawSprites();
}

// Disable the guidance when close the red button
function Disablerect() {
  button2.hide();
  button.hide();
}

// Activate the snow function
function drawSnow() {
  // The snow's colour
  fill(255, 210);
  noStroke();
  // The snow's size, speed and amount
  for (var i = 0; i < windowWidth; i += 20) {
    circle(snowX[i], snowY[i], 6);
    snowY[i] += 1;
    snowX[i] += 1;
    if (snowY[i] > windowHeight) snowY[i] = 0;
    if (snowX[i] > windowWidth) snowX[i] = 0;
  }
}

// Activate the snow2 function
function drawSnow2() {
  // The snow's colour
  fill(255, 241, 118);
  noStroke();
  // The snow's size, speed and amount
  for (var i = 0; i < windowWidth; i += 20) {
    circle(snowX[i], snowY[i], 5);
    snowY[i] += 0.3;
    snowX[i] += 0.3;
    if (snowY[i] > windowHeight) snowY[i] = 0;
    if (snowX[i] > windowWidth) snowX[i] = 0;
  }
}

// Activate the snow3 function
function drawSnow3() {
  // The snow's colour
  fill(209, 196, 233);
  noStroke();
  // The snow's size, speed and amount
  for (var i = 0; i < windowWidth; i += 20) {
    circle(snowX[i], snowY[i], 6);
    snowY[i] += 0.3;
    snowX[i] += 0.3;
    if (snowY[i] > windowHeight) snowY[i] = 0;
    if (snowX[i] > windowWidth) snowX[i] = 0;
  }
}

// Activate the snow4 function
function drawSnow4() {
  // The snow's colour
  fill(255, 249, 196);
  noStroke();
  // The snow's size, speed and amount
  for (var i = 0; i < windowWidth; i += 20) {
    circle(snowX[i], snowY[i], 6);
    snowY[i] += 0.7;
    snowX[i] += 0.7;
    if (snowY[i] > windowHeight) snowY[i] = 0;
    if (snowX[i] > windowWidth) snowX[i] = 0;
  }
}

// Activate the snow5 function
function drawSnow5() {
  // The snow's colour
  fill(187, 222, 251);
  noStroke();
  // The snow's size, speed and amount
  for (var i = 0; i < windowWidth; i += 20) {
    circle(snowX[i], snowY[i], 6);
    snowY[i] += 1;
    snowX[i] += 1;
    if (snowY[i] > windowHeight) snowY[i] = 0;
    if (snowX[i] > windowWidth) snowX[i] = 0;
  }
}

// Activate the snow5 function
function drawSnow6() {
  // The snow's colour
  fill(66, 66, 66);
  noStroke();
  // The snow's size, speed and amount
  for (var i = 0; i < windowWidth; i += 20) {
    circle(snowX[i], snowY[i], 6);
    snowY[i] += 0.4;
    snowX[i] += 0.4;
    if (snowY[i] > windowHeight) snowY[i] = 0;
    if (snowX[i] > windowWidth) snowX[i] = 0;
  }
}

// Activate the functions on key press
function keyPressed() {
  // Press the number '0' on keyboard to reset the current sketch
  if (key == 9) fullscreen(true);
  if (key == 0) resetSketch(true);
  // You can optionaly handle the key press at global level...
  switch (key) {
    case "1":
      mgr.showScene(Scene1);
      break;
    case "2":
      mgr.showScene(Scene2);
      break;
    case "3":
      mgr.showScene(Scene3);
      break;
    case "4":
      mgr.showScene(Scene4);
      break;
    case "5":
      mgr.showScene(Scene5);
      break;
    case "6":
      mgr.showScene(Scene6);
      break;
  }
  // ... then dispatch via the SceneManager.
  mgr.handleEvent("keyPressed");
}

// Activate the functions on mouse press
function mousePressed() {
  // detect if palette square is clicked
  if (mouseY < 713 && mouseY > 652) {
    if (mouseX < 282 && mouseX > 182) {
      myColour = get(mouseX, mouseY);
    }
  }
}

// Reset the background of virtual screens 
function resetSketch() {
  virtualscreen1.background(226);
  virtualscreen2.background(226);
  virtualscreen3.background(226);
  virtualscreen4.background(226);
  virtualscreen5.background(226);
  virtualscreen6.background(226);
  virtualscreen7.background(226);
  virtualscreen8.background(226);
}

// A simple Particle class
let Particle = function (position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function () {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 0.5;
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  return this.lifespan < 0;
};

let ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function () {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

// The functions in the first scene
function Scene1() {
  this.enter = function () {
    print("enter");
  };

  this.setup = function () {
    print("setup");
  };

  // Activate the functions in the first scene
  this.draw = function () {
    // background image
    image(img, 0, 0, windowWidth, windowHeight);
    // its snow background
    drawSnow();
    // the colour palette background
    fill(78, 52, 46);
    beginShape();
    vertex(175, 714);
    vertex(175, 650);
    vertex(182, 646);
    vertex(282, 646);
    vertex(287, 650);
    vertex(287, 714);
    vertex(282, 718);
    vertex(182, 718);
    endShape(CLOSE);
    //draw palette squares
    fill(c[1]);
    rect(182, 652, 20, 20);
    fill(c[2]);
    rect(202, 652, 20, 20);
    fill(c[3]);
    rect(222, 652, 20, 20);
    fill(c[4]);
    rect(242, 652, 20, 20);
    fill(c[5]);
    rect(262, 652, 20, 20);
    fill(c[6]);
    rect(182, 672, 20, 20);
    fill(c[7]);
    rect(202, 672, 20, 20);
    fill(c[8]);
    rect(222, 672, 20, 20);
    fill(c[9]);
    rect(242, 672, 20, 20);
    fill(c[10]);
    rect(262, 672, 20, 20);
    rect(182, 692, 20, 20);
    fill(c[11]);
    rect(202, 692, 20, 20);
    fill(c[12]);
    rect(222, 692, 20, 20);
    fill(c[13]);
    rect(242, 692, 20, 20);
    fill(c[14]);
    rect(262, 692, 20, 20);
    fill(c[15]);
    rect(262, 692, 20, 20);
    // the img moves according to noise and map
    var n = noise(t);
    var x1 = map(n, 0, 1, 260, 280);
    t += 0.01;
    image(img11, 556, x1, 120, 80);
    // the lights shining speed and transparency animation
    var sinOfTime = sin(frameCount * 2);
    size = map(sinOfTime, -1, 1, 10, 500);
    transparency = map(sinOfTime, -1, 1, 0, 255);
    transparency2 = map(sinOfTime, 1, -1, 0, 255);
    // position of the lights
    p = mouseX * 0.015;
    // colours of the lights
    fill(255, 238, 88, transparency);
    circle(120 + p, 220, 12);
    fill(255, 238, 88, transparency2);
    circle(55 + p, 345, 15);
    fill(255, 238, 88, transparency);
    circle(75 + p, 100, 15);
    fill(255, 238, 88, transparency2);
    circle(175 + p, 22, 12);
    fill(255, 238, 88, transparency);
    circle(1180 - p, 340, 15);
    fill(255, 238, 88, transparency2);
    circle(1031 - p, 173, 12);
    fill(255, 238, 88, transparency);
    circle(1109 - p, 55, 15);
    fill(255, 238, 88, transparency2);
    circle(785 - p, 5, 15);
    fill(255, 238, 88, transparency);
    circle(1225 - p, 255, 12);
    // Method to display particle system
    Particle.prototype.display = function () {
      let h = map(mouseX, 0, windowWidth, 0, 255);
      noStroke();
      fill(h, 190, 180, this.lifespan);
      ellipse(this.position.x, this.position.y, 22, 22);
    };
    // Detect if the guidance is clicked
    if (mouseX > 1160 && mouseX < 1210 && mouseY > 690 && mouseY < 740) {
      if (mouseIsPressed == true) {
        rect1();
      }
    }
  };

  this.keyPressed = function () {
    print("keypressed");
  };
}

// The functions in the second scene
function Scene2() {
  this.enter = function () {
    print("enter");
  };

  this.setup = function () {
    print("setup");
  };

  // Activate the functions in the second scene
  this.draw = function () {
    // background image
    image(img2, 0, 0, windowWidth, windowHeight);
    // its snow background
    drawSnow2();
    // the colour palette background
    fill(78, 52, 46);
    beginShape();
    vertex(175, 714);
    vertex(175, 650);
    vertex(182, 646);
    vertex(282, 646);
    vertex(287, 650);
    vertex(287, 714);
    vertex(282, 718);
    vertex(182, 718);
    endShape(CLOSE);
    //draw palette squares
    fill(c[16]);
    rect(182, 652, 20, 20);
    fill(c[17]);
    rect(202, 652, 20, 20);
    fill(c[18]);
    rect(222, 652, 20, 20);
    fill(c[19]);
    rect(242, 652, 20, 20);
    fill(c[20]);
    rect(262, 652, 20, 20);
    fill(c[21]);
    rect(182, 672, 20, 20);
    fill(c[22]);
    rect(202, 672, 20, 20);
    fill(c[23]);
    rect(222, 672, 20, 20);
    fill(c[24]);
    rect(242, 672, 20, 20);
    fill(c[25]);
    rect(262, 672, 20, 20);
    fill(c[26]);
    rect(182, 692, 20, 20);
    fill(c[27]);
    rect(202, 692, 20, 20);
    fill(c[28]);
    rect(222, 692, 20, 20);
    fill(c[29]);
    rect(242, 692, 20, 20);
    fill(c[30]);
    rect(262, 692, 20, 20);
    // the img moves according to noise and map
    var n = noise(t);
    var x1 = map(n, 0, 1, 260, 280);
    t += 0.01;
    image(img12, 556, x1, 120, 80);
    // the lights shining speed and transparency animation
    var sinOfTime = sin(frameCount * 2);
    size = map(sinOfTime, -1, 1, 10, 500);
    transparency = map(sinOfTime, -1, 1, 0, 255);
    transparency2 = map(sinOfTime, 1, -1, 0, 255);
    // position of the lights
    p = mouseX * 0.015;
    // colours of the lights
    fill(175, 180, 43, transparency);
    circle(120 + p, 220, 12);
    fill(175, 180, 43, transparency2);
    circle(55 + p, 345, 15);
    fill(175, 180, 43, transparency);
    circle(75 + p, 100, 15);
    fill(175, 180, 43, transparency2);
    circle(175 + p, 22, 12);
    fill(175, 180, 43, transparency);
    circle(1180 - p, 340, 15);
    fill(175, 180, 43, transparency2);
    circle(1055 - p, 173, 12);
    fill(175, 180, 43, transparency);
    circle(1109 - p, 55, 15);
    fill(175, 180, 43, transparency2);
    circle(785 - p, 5, 15);
    fill(175, 180, 43, transparency);
    circle(1225 - p, 255, 12);
    // Method to display particle system
    Particle.prototype.display = function () {
      let h = map(mouseX, 0, windowWidth, 0, 255);
      noStroke();
      fill(h, 213, 129, this.lifespan);
      ellipse(this.position.x, this.position.y, 22, 22);
    };
     // Detect if the guidance is clicked
    if (mouseX > 1160 && mouseX < 1210 && mouseY > 700 && mouseY < 800) {
      if (mouseIsPressed == true) {
        rect1();
      }
    }
  };

  this.keyPressed = function () {
    print("keypressed");
  };
}

// The functions in the third scene
function Scene3() {
  this.enter = function () {
    print("enter");
  };

  this.setup = function () {
    print("setup");
  };

  // Activate the functions in the third scene
  this.draw = function () {
    // background image
    image(img3, 0, 0, windowWidth, windowHeight);
    // its snow background
    drawSnow3();
    // the colour palette background
    fill(78, 52, 46);
    beginShape();
    vertex(175, 714);
    vertex(175, 650);
    vertex(182, 646);
    vertex(282, 646);
    vertex(287, 650);
    vertex(287, 714);
    vertex(282, 718);
    vertex(182, 718);
    endShape(CLOSE);
    //draw palette squares
    fill(c[31]);
    rect(182, 652, 20, 20);
    fill(c[32]);
    rect(202, 652, 20, 20);
    fill(c[33]);
    rect(222, 652, 20, 20);
    fill(c[34]);
    rect(242, 652, 20, 20);
    fill(c[35]);
    rect(262, 652, 20, 20);
    fill(c[36]);
    rect(182, 672, 20, 20);
    fill(c[37]);
    rect(202, 672, 20, 20);
    fill(c[38]);
    rect(222, 672, 20, 20);
    fill(c[39]);
    rect(242, 672, 20, 20);
    fill(c[40]);
    rect(262, 672, 20, 20);
    fill(c[41]);
    rect(182, 692, 20, 20);
    fill(c[42]);
    rect(202, 692, 20, 20);
    fill(c[43]);
    rect(222, 692, 20, 20);
    fill(c[44]);
    rect(242, 692, 20, 20);
    fill(c[45]);
    rect(262, 692, 20, 20);
    // the img moves according to noise and map
    var n = noise(t);
    var x1 = map(n, 0, 1, 260, 280);
    t += 0.01;
    image(img10, 556, x1, 120, 80);
    // the lights shining speed and transparency animation
    var sinOfTime = sin(frameCount * 2);
    size = map(sinOfTime, -1, 1, 10, 500);
    transparency = map(sinOfTime, -1, 1, 0, 255);
    transparency2 = map(sinOfTime, 1, -1, 0, 255);
    // position of the lights
    p = mouseX * 0.015;
    // colours of the lights
    fill(179, 157, 219, transparency);
    circle(120 + p, 220, 12);
    fill(179, 157, 219, transparency);
    circle(75 + p, 100, 15);
    fill(179, 157, 219, transparency2);
    circle(175 + p, 22, 12);
    fill(179, 157, 219, transparency2);
    circle(1031 - p, 173, 12);
    fill(179, 157, 219, transparency);
    circle(1109 - p, 55, 15);
    fill(179, 157, 219, transparency2);
    circle(785 - p, 5, 15);
    fill(179, 157, 219, transparency);
    circle(1225 - p, 255, 12);
    // Method to display particle system
    Particle.prototype.display = function () {
      let h = map(mouseX, 0, windowWidth, 0, 255);
      noStroke();
      fill(h, 136, 229, this.lifespan);
      ellipse(this.position.x, this.position.y, 22, 22);
    };
    // Detect if the guidance is clicked
    if (mouseX > 1160 && mouseX < 1210 && mouseY > 700 && mouseY < 800) {
      if (mouseIsPressed == true) {
        rect1();
      }
    }
  };

  this.keyPressed = function () {
    print("keypressed");
  };
}

// The functions in the fourth scene
function Scene4() {
  this.enter = function () {
    print("enter");
  };

  this.setup = function () {
    print("setup");
  };

  // Activate the functions in the fourth scene
  this.draw = function () {
    // background image
    image(img4, 0, 0, windowWidth, windowHeight);
    // its snow background
    drawSnow4();
    // the colour palette background
    fill(78, 52, 46);
    beginShape();
    vertex(175, 714);
    vertex(175, 650);
    vertex(182, 646);
    vertex(282, 646);
    vertex(287, 650);
    vertex(287, 714);
    vertex(282, 718);
    vertex(182, 718);
    endShape(CLOSE);
    //draw palette squares
    fill(c[46]);
    rect(182, 652, 20, 20);
    fill(c[47]);
    rect(202, 652, 20, 20);
    fill(c[48]);
    rect(222, 652, 20, 20);
    fill(c[49]);
    rect(242, 652, 20, 20);
    fill(c[50]);
    rect(262, 652, 20, 20);
    fill(c[51]);
    rect(182, 672, 20, 20);
    fill(c[52]);
    rect(202, 672, 20, 20);
    fill(c[53]);
    rect(222, 672, 20, 20);
    fill(c[54]);
    rect(242, 672, 20, 20);
    fill(c[55]);
    rect(262, 672, 20, 20);
    fill(c[56]);
    rect(182, 692, 20, 20);
    fill(c[57]);
    rect(202, 692, 20, 20);
    fill(c[58]);
    rect(222, 692, 20, 20);
    fill(c[59]);
    rect(242, 692, 20, 20);
    fill(c[60]);
    rect(262, 692, 20, 20);
    // the img moves according to noise and map
    var n = noise(t);
    var x1 = map(n, 0, 1, 260, 280);
    t += 0.01;
    image(img9, 556, x1, 120, 80);
    // the lights shining speed and transparency animation
    var sinOfTime = sin(frameCount * 2);
    size = map(sinOfTime, -1, 1, 10, 500);
    transparency = map(sinOfTime, -1, 1, 0, 255);
    transparency2 = map(sinOfTime, 1, -1, 0, 255);
    // position of the lights
    p = mouseX * 0.015;
    // colours of the lights
    fill(249, 168, 37, transparency);
    circle(150 + p, 220, 12);
    fill(249, 168, 37, transparency2);
    circle(55 + p, 345, 15);
    fill(249, 168, 37, transparency);
    circle(75 + p, 100, 15);
    fill(249, 168, 37, transparency2);
    circle(175 + p, 22, 12);
    fill(249, 168, 37, transparency);
    circle(1180 - p, 340, 15);
    fill(249, 168, 37, transparency2);
    circle(1031 - p, 173, 12);
    fill(249, 168, 37, transparency);
    circle(1109 - p, 55, 15);
    fill(249, 168, 37, transparency2);
    circle(785 - p, 5, 15);
    fill(249, 168, 37, transparency);
    circle(1225 - p, 255, 12);
    // Method to display particle system
    Particle.prototype.display = function () {
      let h = map(mouseX, 0, windowWidth, 0, 255);
      noStroke();
      fill(h, 160, 0, this.lifespan);
      ellipse(this.position.x, this.position.y, 22, 22);
    };
    // Detect if the guidance is clicked
    if (mouseX > 1160 && mouseX < 1210 && mouseY > 700 && mouseY < 800) {
      if (mouseIsPressed == true) {
        rect1();
      }
    }
  };

  this.keyPressed = function () {
    print("keypressed");
  };
}

// The functions in the fifth scene
function Scene5() {
  this.enter = function () {
    print("enter");
  };

  this.setup = function () {
    print("setup");
  };

  // Activate the functions in the fifth scene
  this.draw = function () {
    // background image
    image(img5, 0, 0, windowWidth, windowHeight);
    // its snow background
    drawSnow5();
    // the colour palette background
    fill(78, 52, 46);
    beginShape();
    vertex(175, 714);
    vertex(175, 650);
    vertex(182, 646);
    vertex(282, 646);
    vertex(287, 650);
    vertex(287, 714);
    vertex(282, 718);
    vertex(182, 718);
    endShape(CLOSE);
    //draw palette squares
    fill(c[61]);
    rect(182, 652, 20, 20);
    fill(c[62]);
    rect(202, 652, 20, 20);
    fill(c[63]);
    rect(222, 652, 20, 20);
    fill(c[64]);
    rect(242, 652, 20, 20);
    fill(c[65]);
    rect(262, 652, 20, 20);
    fill(c[66]);
    rect(182, 672, 20, 20);
    fill(c[67]);
    rect(202, 672, 20, 20);
    fill(c[68]);
    rect(222, 672, 20, 20);
    fill(c[69]);
    rect(242, 672, 20, 20);
    fill(c[70]);
    rect(262, 672, 20, 20);
    fill(c[71]);
    rect(182, 692, 20, 20);
    fill(c[72]);
    rect(202, 692, 20, 20);
    fill(c[73]);
    rect(222, 692, 20, 20);
    fill(c[74]);
    rect(242, 692, 20, 20);
    fill(c[75]);
    rect(262, 692, 20, 20);
    // the img moves according to noise and map
    var n = noise(t);
    var x1 = map(n, 0, 1, 260, 280);
    t += 0.01;
    image(img8, 556, x1, 120, 80);
    // the lights shining speed and transparency animation
    var sinOfTime = sin(frameCount * 2);
    size = map(sinOfTime, -1, 1, 10, 500);
    transparency = map(sinOfTime, -1, 1, 0, 255);
    transparency2 = map(sinOfTime, 1, -1, 0, 255);
    // position of the lights
    p = mouseX * 0.015;
    // colours of the lights
    fill(0, 150, 136, transparency);
    circle(120 + p, 220, 12);
    fill(0, 150, 136, transparency2);
    circle(55 + p, 345, 15);
    fill(0, 150, 136, transparency);
    circle(75 + p, 100, 15);
    fill(0, 150, 136, transparency2);
    circle(175 + p, 22, 12);
    fill(0, 150, 136, transparency);
    circle(1180 - p, 340, 15);
    fill(0, 150, 136, transparency2);
    circle(1031 - p, 173, 12);
    fill(0, 150, 136, transparency);
    circle(1109 - p, 55, 15);
    fill(0, 150, 136, transparency2);
    circle(785 - p, 5, 15);
    fill(0, 150, 136, transparency);
    circle(1225 - p, 255, 12);
    // Method to display particle system
    Particle.prototype.display = function () {
      let h = map(mouseX, 0, windowWidth, 0, 255);
      noStroke();
      fill(h, 73, 171, this.lifespan);
      ellipse(this.position.x, this.position.y, 22, 22);
    };
    // Detect if the guidance is clicked
    if (mouseX > 1160 && mouseX < 1210 && mouseY > 700 && mouseY < 800) {
      if (mouseIsPressed == true) {
        rect1();
      }
    }
  };

  this.keyPressed = function () {
    print("keypressed");
  };
}

// The functions in the sixth scene
function Scene6() {
  this.enter = function () {
    print("enter");
  };

  this.setup = function () {
    print("setup");
  };
  
  // Activate the functions in the sixth scene
  this.draw = function () {
    // background image
    image(img6, 0, 0, windowWidth, windowHeight);
    // its snow background
    drawSnow6();
    // the colour palette background
    fill(78, 52, 46);
    beginShape();
    vertex(175, 714);
    vertex(175, 650);
    vertex(182, 646);
    vertex(282, 646);
    vertex(287, 650);
    vertex(287, 714);
    vertex(282, 718);
    vertex(182, 718);
    endShape(CLOSE);
    //draw palette squares
    fill(c[76]);
    rect(182, 652, 20, 20);
    fill(c[77]);
    rect(202, 652, 20, 20);
    fill(c[78]);
    rect(222, 652, 20, 20);
    fill(c[79]);
    rect(242, 652, 20, 20);
    fill(c[80]);
    rect(262, 652, 20, 20);
    fill(c[86]);
    rect(182, 672, 20, 20);
    fill(c[87]);
    rect(202, 672, 20, 20);
    fill(c[88]);
    rect(222, 672, 20, 20);
    fill(c[89]);
    rect(242, 672, 20, 20);
    fill(c[90]);
    rect(262, 672, 20, 20);
    fill(c[81]);
    rect(182, 692, 20, 20);
    fill(c[82]);
    rect(202, 692, 20, 20);
    fill(c[83]);
    rect(222, 692, 20, 20);
    fill(c[84]);
    rect(242, 692, 20, 20);
    fill(c[85]);
    rect(262, 692, 20, 20);
    // the img moves according to noise and map
    var n = noise(t);
    var x1 = map(n, 0, 1, 260, 280);
    t += 0.01;
    image(img7, 556, x1, 120, 80);
    // the lights shining speed and transparency animation
    var sinOfTime = sin(frameCount * 2);
    size = map(sinOfTime, -1, 1, 10, 500);
    transparency = map(sinOfTime, -1, 1, 0, 255);
    transparency2 = map(sinOfTime, 1, -1, 0, 255);
    // position of the lights
    p = mouseX * 0.015;
    // colours of the lights
    fill(117, 117, 117, transparency2);
    circle(55 + p, 345, 15);
    fill(117, 117, 117, transparency);
    circle(75 + p, 100, 15);
    fill(117, 117, 117, transparency2);
    circle(175 + p, 22, 12);
    fill(117, 117, 117, transparency);
    circle(1180 - p, 340, 15);
    fill(117, 117, 117, transparency2);
    circle(1031 - p, 173, 12);
    fill(117, 117, 117, transparency);
    circle(1109 - p, 55, 15);
    fill(117, 117, 117, transparency2);
    circle(1225 - p, 255, 12);
    // Method to display particle system
    Particle.prototype.display = function () {
      let h = map(mouseX, 0, windowWidth, 0, 255);
      noStroke();
      fill(h, 117, 117, this.lifespan);
      ellipse(this.position.x, this.position.y, 22, 22);
    };
    // Detect if the guidance is clicked
    if (mouseX > 1160 && mouseX < 1210 && mouseY > 700 && mouseY < 800) {
      if (mouseIsPressed == true) {
        rect1();
      }
    }
  };

  this.keyPressed = function () {
    print("keypressed");
  };
}


