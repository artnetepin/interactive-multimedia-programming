var connection = new WebSocket('ws://obscure-waters-98157.herokuapp.com');
var msg = {
  text: document.getElementById('input').value
};

// When the connection is open, send some data to the server
connection.onopen = function() {
  var p = document.createElement('p');
  p.innerHTML = 'Connected';
  document.getElementById('connection').appendChild(p);
};

// Log errors
connection.onerror = function(error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function(e) {
  var p = document.createElement('p');
  p.innerHTML = e.data;
  document.getElementById('log').appendChild(p);
};

document.getElementById('btn').addEventListener("click", function() {
  connection.send(document.getElementById("input").value);
});
