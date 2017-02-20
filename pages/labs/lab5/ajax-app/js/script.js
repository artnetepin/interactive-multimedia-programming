function load() {
  $.ajax({
    type: "POST",
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp?callback=parseResponse",
    dataType: "jsonp",
  });
}

var names = [];
var emails = [];

function jsonCallback(json) {
  for (var i = 0; i < json.length; i++) {
    names.push(json[i].name);
    emails.push(json[i].email);
  }

  for (var i = 0; i < names.length; i++) {
    $('.content').html("");
    $('.content').append(document.createTextNode(names[i])).append('<span> email: </span>').append(document.createTextNode(emails[i])).append('<br />');
  }
}
