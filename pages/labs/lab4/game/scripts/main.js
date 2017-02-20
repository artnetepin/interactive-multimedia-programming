var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var square;
var time = 0;
var result = 0;
var game = false;

function Square(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

var timer;

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

function onClick(e) {
  var mousePos = getMousePos(canvas, e);
  if (!square && !game) {
    var time = 10;
    timer = setInterval(function() {
      if (time) {
        document.getElementById('time').innerHTML = time;
        time--;
      } else {
        game = false;
        document.getElementById('time').innerHTML = "GAME OVER!";
        clearInterval(timer);
      }
    }, 1000);
    game = true;
    square = new Square(Math.random() * (canvas.width - 30), Math.random() * (canvas.height - 30), 30, 30);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(square.x, square.y, 30, 30);
    ctx.stroke();
  } else if (mousePos.x >= square.x && mousePos.x <= square.x + square.w && mousePos.y >= square.y && mousePos.y <= square.y + square.h && game) {
    document.getElementById('result').innerHTML = ++result;
    square = new Square(Math.random() * (canvas.width - 30), Math.random() * (canvas.height - 30), 30, 30);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(square.x, square.y, 30, 30);
    ctx.stroke();
  }
}

canvas.addEventListener("click", onClick);
