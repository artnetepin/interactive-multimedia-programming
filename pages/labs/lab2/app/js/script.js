document.getElementById('btn').addEventListener("click", function() {
  var newName = document.getElementById('name').value;
  var list = document.getElementById('list');
  list.appendChild(document.createTextNode(newName));
  list.innerHTML += '<br/>';
});
