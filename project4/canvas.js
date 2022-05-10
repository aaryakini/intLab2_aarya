let fr = 30;
let xPos = 0;
let xPos2 = 0;
let xPos3 = 0;
let xPos4 = 0;
let yPos = 0;
let yPos2 = 0;
let yPos3 = 0;
let yPos4 = 0
let rad = 0;
let rad2 = 0;
let rad3 = 0;
let rad4 = 0;

function setup() {
  frameRate(fr);
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.center('horizontal');
  colorMode(RGB,255,255,255,1);
  noStroke();
}

function draw(){
    ellipse(xPos,yPos,rad,rad);
    ellipse(xPos2,yPos2,rad2,rad2);
    ellipse(xPos3,yPos3,rad3,rad3)
    yPos = yPos + 3;;
    yPos2 = yPos2 + 3;
    yPos3 = yPos3 + 3;
 
}

function keyPressed(){
  
  //black
  if(keyCode === 49){
    document.body.style.backgroundColor = "black";
  }

  //red
  if(keyCode === 50){
    document.body.style.backgroundColor = "#ff3f47";
  }

  //pink
  if(keyCode === 51){
    document.body.style.backgroundColor = "#ff0feb";
  }

  //purple
  if(keyCode === 52){
    document.body.style.backgroundColor = "#c77dff";
  }

  //baby blue
  if(keyCode === 53){
    document.body.style.backgroundColor = "#a093ff";
  }

  //cyan
  if(keyCode === 54){
    document.body.style.backgroundColor = "#b3feff";
  }

  //green
  if(keyCode === 55){
    document.body.style.backgroundColor = "#a0ff5c";
  }

  //yellow
  if(keyCode === 56){
    document.body.style.backgroundColor = "#fcba03";
  }

  //orange
  if(keyCode === 57){
    document.body.style.backgroundColor = "#ff6200";
  }

  //white
  if(keyCode === 48){
    document.body.style.backgroundColor = "white";
  }


  // .........QAZ.........

  if(keyCode === 81){
    rad = random(40,250);
    xPos = (0.1*windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 65){
    rad = random(40,250);
    xPos = (0.15*windowWidth);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 90){
    rad = random(40,250);
    xPos = (0.18*windowWidth);
    yPos = random((0.666*windowHeight), windowHeight);
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........WSX.........

  if(keyCode === 87){
    rad = random(40,250);
    xPos = (0.2*windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 83){
    rad = random(40,250);
    xPos = (0.25*windowWidth);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 88){
    rad = random(40,250);
    xPos = (0.28*windowWidth);
    yPos = random((0.666*windowHeight), windowHeight);
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........EDC.........

  if(keyCode === 69){
    rad = random(40,250);
    xPos = (0.3*windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 68){
    rad = random(40,250);
    xPos = (0.35*windowWidth);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 67){
    rad = random(40,250);
    xPos = (0.38*windowWidth);
    yPos = random((0.666*windowHeight), windowHeight);
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........RFV.........

  if(keyCode === 82){
    rad = random(40,250);
    xPos = (0.4*windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 70){
    rad = random(40,250);
    xPos = (0.45*windowWidth);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 86){
    rad = random(40,250);
    xPos = (0.48*windowWidth);
    yPos = random((0.666*windowHeight), windowHeight);
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........TGB.........

  if(keyCode === 84){
    rad = random(40,250);
    xPos = (0.5*windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 71){
    rad = random(40,250);
    xPos = (0.55*windowWidth);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 66){
    rad = random(40,250);
    xPos = (0.58*windowWidth);
    yPos = random((0.666*windowHeight), windowHeight);
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........YHN.........

  if(keyCode === 89){
    rad = random(40,250);
    xPos = (0.6*windowWidth)-(rad/2);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 72){
    rad = random(40,250);
    xPos = (0.65*windowWidth)-(rad/2);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 78){
    rad = random(40,250);
    xPos = (0.68*windowWidth)-(rad/2);
    yPos = random((0.666*windowHeight), windowHeight);
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........UJM.........

  if(keyCode === 85){
    rad = random(40,250);
    xPos = (0.7*windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 74){
    rad = random(40,250);
    xPos = (0.75*windowWidth);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 77){
    rad = random(40,250);
    xPos = (0.78*windowWidth);
    yPos = random((0.666*windowHeight), windowHeight);
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........IK.........

  if(keyCode === 73){
    rad = random(40,250);
    xPos = (0.8*windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 75){
    rad = random(40,250);
    xPos = (0.85*windowWidth);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........OL.........

  if(keyCode === 79){
    rad = random(40,250);
    xPos = (0.9*windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  if(keyCode === 76){
    rad = random(40,250);
    xPos = (0.95*windowWidth);
    yPos = random((0.333*windowHeight), (0.666*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

  //.........P.........

  if(keyCode === 80){
    rad = random(40,250);
    xPos = (windowWidth);
    yPos = random(0, (0.333*windowHeight));
    fill(random(0,255),random(0,255),random(0,255),random(0.5,1));

    rad2 = rad/random(0.5,6);
    rad3 = rad/random(0.5,6);
    xPos2 = xPos+(random(-200,180));
    xPos3 = xPos+(random(-200,180));
    yPos2 = yPos+(random(-200,180));
    yPos3 = yPos+(random(-200,180));
  }

	if (keyCode === ENTER){
		noLoop();
	}
	else if (keyCode === 32){
		loop();
	}
}

function mousePressed(){
	saveCanvas(canvas,'myDripPattern','png');
}























