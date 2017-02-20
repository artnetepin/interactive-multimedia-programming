function PersonModel(){
  this.persons = new Array();

  this.addPerson = function(person) {
    this.persons.push(person);
  }

  this.getPersons = function() {
    return this.persons;
  }
}
