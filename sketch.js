function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight(5);
}

function draw() {

  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY); //drawing line
    array.push([mouseX, mouseY]);
  }
}

function keyTyped(){

  if(key== 's'){
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    //display image
    for(let i=0, i < array.length; i++){
      console.log(i);
    }
    line(array[0][0], array[0][1],array[1][0], array[1][1] )
  }
  return false;
}
