let array;
var backgroundColor = 200;
let noiseOffset= 0.0;
let strokeValue =5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(backgroundColor);
  background(210, 140, 40);
  noFill();
}

function draw() {

background(210, 140, 40,5)
strokeWeight(strokeValue);

noiseOffset+=0.04;
strokeValue= noise(noiseOffset)*50;

stroke(map(mouseX, 0, 600, 0, 255,true));
line(width - mouseX, height - mouseY, widht - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);

//   if(mouseIsPressed){
//     //line(mouseX, mouseY, pmouseX, pmouseY); //drawing line
//     background(backgroundColor);
//     backgroundColor-=5;
//     array.push([mouseX, mouseY]);
//
//     beginShape();
//     for(var i = 0; i < array.length; i++){
//       //line(array[i][0], array[i][1],array[i+1][0], array[i+1][1]);
//       curveVertex(array[i][0], array[i][1])
//     }
//     endShape();
//   }
}
//
 function keyTyped(){
//
  if(key=== 's'){
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    //display image
    background(220);
//
//     beginShape();
//     for(var i = 0; i < array.length; i++){
//       //line(array[i][0], array[i][1],array[i+1][0], array[i+1][1]);
//       curveVertex(array[i][0], array[i][1])
//     }
//     endShape();
  }
  if(key=== 'c'){
    //clear this image
    clear();
  }
  return false;
}
//
// function mousePressed(){
//
//   array = [];
//   backgroundColor=255;
//
//
// }
