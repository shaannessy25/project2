// Do not modify this file
function helperBackground() {
  background(250);
  line(width/2, 0, width/2, height);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Larry In A Dunce Cap", width/4, 30);
  text("Larry's Pet Grizzly", width/4 * 3, 30);
}

function mousePressed() {
  print("x: " + floor(mouseX) + ", " + "y: " + floor(mouseY));
}