function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight(5);
}

function draw() {

  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped(){

  if(key== 's'){
    //save this image
    saveCanvas('fileName', 'png');
  }
  return false;
}
