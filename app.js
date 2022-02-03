
const board_border = "#000";
const board_background = "#fff";
const snake_col = "lightblue";
const snake_border = "darkblue";

/*
  The y-coordinate for all parts is always 200.
  The x-coordinate is at decrements of 10 to present part of
  the snake's body.
  The very first coordinate represents the snake's head.
*/
let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
]

// Get the canvas element
const snakeboard = document.getElementById("snakeboard");
// Return a two dimentional drawing context.
const ctx = snakeboard.getContext("2d");
// Start SnakeGame
main();

// main function called repeatedly to keep the game running
function main() {
  clearCanvas();
  drawSnake();
}

// Draw a border around the canvas
function clearCanvas() {
  //Select the color to fill the drawing
  ctx.fillStyle = board_background;
  //Select the color for the border of the canvas
  ctx.strokeStyle = board_border;
  //Draw a "filled" rectangle to cover the entire canvas
  ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  //Draw a "border" around the entire canvas
  ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

// Draw the snake on the canvas
function drawSnake(){
  //Draw each part
  snake.forEach(drawSnakePart);
}

// Draw one snake part
function drawSnakePart(snakePart) {

  // Set the colour of the snake part
  ctx.fillStyle = snake_col;
  // Set the border colour of the snake part
  ctx.strokeStyle = snake_border;
  //Draw a "filled" rectangle to represent the snake part at
  //the coordinates the part is located
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  //Draw a "border" around the snake part
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
