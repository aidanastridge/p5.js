let startX = -200; // Center adjustments for WEBGL mode (0,0 is center)
let startY = -200;
let x = startX; 
let y = startY;
let w = 80; // Width/Diameter of the hexagon

function setup() {
  createCanvas(600, 400, WEBGL);
  noFill(); // Optional: clears overlapping fill artifacts
  stroke("black");
}

function draw() {
  background("white");
  fill('orange');
  strokeWeight(5);
  stroke('yellow');
  
  // Calculate exact honeycomb spacing based on your hexagon width (w)
  let xSpacing = w * 0.75; 
  let ySpacing = w * Math.sqrt(3) / 2; // ~0.866 * w

  // Nested loop to cover rows and columns
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      
      // Calculate coordinates
      x = startX + col * xSpacing;
      y = startY + row * ySpacing;
      
      // Shift every second column down to interlock the hexagons
      if (col % 2 === 1) {
        y += ySpacing / 2;
      }
      
      hexagon(x, y, w);
    }
  }
}

// Pass x and y into the function so it draws dynamically
function hexagon(hx, hy, hw) {
  // WEBGL arc uses (x, y, width, height, start, stop, detail)
  arc(hx, hy, hw, hw, 0, 2 * PI, PIE, 6);
}