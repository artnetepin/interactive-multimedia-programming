var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = document.getElementById('width');
var color = document.getElementById('color');

var mousePressed = false;
var lastX, lastY;

function init() {

    canvas.onmousedown = function(e) {
        mousePressed = true;
        Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
    }

    canvas.onmousemove = function (e) {
        if (mousePressed) {
            Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        }
    }

    canvas.onmouseup = function (e) {
        mousePressed = false;
    }

	  canvas.onmouseleave = function (e) {
        mousePressed = false;
    }
}

function Draw(x, y, isDown) {
    if (isDown) {
        context.beginPath();
        context.strokeStyle = color.value;
        context.lineWidth = width.value;

        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.closePath();
        context.stroke();
    }
    lastX = x; lastY = y;
}

function clearArea() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
