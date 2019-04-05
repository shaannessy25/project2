function setup () {
  createCanvas(650, 500);
  
}

function draw () {
  helperBackground(); // do not change or move this line
  background(21,253,238,50);
  
  /* The following lines of code correlate to creature 1 */
  
//body
  stroke(75,0,130);
  fill(138,43,226);
  rect(125,200,75,100);

//head 
  stroke(0);
  fill(222,184,135);
  ellipse(165,163,60,75);

//hat
  fill(192);
  triangle(125,125,161,65, 200, 123);

//eyes
  stroke(0,0,0);
  fill(255,255,255);
  ellipse(155,155,10,10);
  ellipse(175,155,10,10);
//pupils 
  fill(0);
  ellipse(155,155,3,3);
  ellipse(175,155,3,3);
  
//straight face mouth
  stroke(0);
  line(150,181,180,181);
  
// Legs
  stroke(0);
  line(141,300,139,357);
  line(178,301,178,355);
//feet
  stroke(255,69,0);
  line(139,358,124,357);
  line(178,356,193,355);
  
//arms 
  stroke(0);
  line(124,227,96,258);
  line(201,225,223,262);

/* The following lines of code correlate to creature 2 */

//body
  stroke(255);
  fill(139,69,19);
  rect(390,193,190,100);
//head
  ellipse(590,226,75,75);


//mouth
fill(255,228,196);
quad(609,246,594,243,593,232,614,235);
//eyes
fill(255);
ellipse(611,222,10,10);
  fill(0);
  ellipse(611,222,5,5);
//nose
stroke(0);
fill(139,69,19);
triangle(627,227,639,232,625,237);
  fill(222,184,135);
  ellipse(640,232,5,5);

//legs
stroke(0);
line(423,293,422,348);
line(451,347,444, 336);
line(422,349,452,347);
line(445,336,433,335);
line(433,335,435,293);
  line(512,294,510,347);
  line(510,347,536,343);
  line(536,343,533,335);
  line(533,335,524,335);
  line(524,335,525,294);
  
//tail
stroke(0);
  strokeWeight(5);
  point(389, 235);
  point(362, 222);
  point(365, 205);

  strokeWeight(1);
noFill();
beginShape();
curveVertex(363, 222);
curveVertex(364, 207);
curveVertex(389, 237);
curveVertex(386, 233);
endShape();


}
