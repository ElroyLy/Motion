function setup() {
  createCanvas(800, 600);
  //noLoop();
  frameRate(30)
}

function draw() {
  background(220);
  let point01 = [100,100];
  let point02 = [400,100];
  let point03 = [100,300];
  let point04 = [500,300];
  let x = mouseX;
  
  BezierCurveY(point01,point02,point03,point04,frameCount*10%600 );

}


