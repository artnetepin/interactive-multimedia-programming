function Person(personName) {
  this.name = personName;
  this.age = undefined;
  this.phoneNumber = undefined;

  this.setAge = function(age){
    this.age = age;
  }
}
