let array =
var backgroundColor = 200;

function setup() {
  createCanvas(600, 600);
  background(backgroundColor);

  strokeWeight(5);
  noFill();
}

function draw() {

  if(mouseIsPressed){
    //line(mouseX, mouseY, pmouseX, pmouseY); //drawing line
    background(backgroundColor);
    backgroundcolor-=3;
    array.push([mouseX, mouseY]);

    beginShape();
    for(var i = 0; i < array.length; i++){
      //line(array[i][0], array[i][1],array[i+1][0], array[i+1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
}

function keyTyped(){

  if(key=== 's'){
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    //display image
    background(220);

    beginShape();
    for(var i = 0; i < array.length; i++){
      //line(array[i][0], array[i][1],array[i+1][0], array[i+1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }
  return false;
}

function mousePressed(){

  arrayt = [];
  backgroundColor=255;


}
