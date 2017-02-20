var viewController = new ViewController();

function ViewController() {
  this.personModel = new PersonModel();

  this.updateView = function() {
    var results = document.getElementById("list");

    results.innerHTML = "";

    for (var i = 0; i < this.personModel.getPersons().length; i++) {
      var person = this.personModel.getPersons()[i];
      results.innerHTML += "<p>" + person.name + "</p>";
    }
  }
  this.addPerson = function(name) {
    localStorage.setItem(name, name);
    var newPerson = new Person(name);
    this.personModel.addPerson(newPerson);
    this.updateView();
  }
  this.populateArray = function() {
    for (key in localStorage) {
      var newPerson = new Person(localStorage[key]);
      this.personModel.addPerson(newPerson);
    }
    this.updateView();
  }
}
