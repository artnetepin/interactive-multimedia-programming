viewController.populateArray();

document.getElementById("btn").addEventListener("click", addPerson);

function addPerson() {
  var name = document.getElementById("personName").value;
  viewController.addPerson(name);
}

document.getElementById("addsmth").addEventListener("click", addSomething);

function addSomething() {
  var input = document.getElementById("something").value;
  var result = document.getElementById("someresult");

  var newElement = document.createElement("INPUT");
  newElement.setAttribute("type", "text");
  newElement.setAttribute("placeholder", input);
  result.appendChild(newElement);
}
