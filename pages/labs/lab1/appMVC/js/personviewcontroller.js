var viewController = new ViewController();

function ViewController() {
  this.personModel = new PersonModel();

  this.updateView = function(){
    var results = document.getElementById("list");
    var onePerson;

    for (var i = 0; i < this.personModel.getPersons().length; i++) {
      onePerson = this.personModel.getPersons()[i];

    }
    var textNode = document.createTextNode(onePerson.name);
    var node = document.createElement("P");
    node.appendChild(textNode);
    results.appendChild(node);
  }

  this.addPerson = function(name) {
    var newPerson = new Person(name);
    this.personModel.addPerson(newPerson);
    this.updateView();
  }
}
