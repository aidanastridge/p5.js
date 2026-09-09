function setup() {
  createCanvas(400, 400);
  background("black");
}

function draw() {
  for (let i = 0; i < 200; i++) {
    stroke(i);
    circle(200, 200, 200 + frameCount - i);
  }
}

function keyPressed() {
  // Press the 's' key to save the GIF
  if (key === 's') {
    // Saves a 3-second GIF named 'mySketch.gif'
    saveGif('mySketch', 10); 
  }
}