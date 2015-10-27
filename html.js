// for red, green, and blue color values
var r, g, b;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(255);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(150, 100, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(400, 100, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(650, 100, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(150, 300, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(400, 300, 150, 150);

  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(600, 300, 150, 150);
}
// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 150, 100);
  if (d < 50) {
    // Pick new random color values
    r = random(204);
    g = random(255);
    b = random(255);
}
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 400, 100);
  if (d < 50) {
    // Pick new random color values
    r = (255);
    g = (204);
    b = (204);
  }
  
  {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 600, 100);
  if (d < 50) {
    // Pick new random color values
    r = (204);
    g = (255);
    b = (255);
  }
  
 {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 150, 300);
  if (d < 50) {
    // Pick new random color values
    r = (255);
    g = (255);
    b = (204);
  }
  
   {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 400, 300);
  if (d < 150) {
    // Pick new random color values
    r = (255);
    g = (204);
    b = (204);
  }
  
   {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 600, 300);
  if (d < 150) {
    // Pick new random color values
    r = (204);
    g = (255);
    b = (204);
  }
}
}

