var html = document.querySelector('html');
var p = document.querySelector('p');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');

if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;

  html.style.backgroundColor = '#' + currentColor;
  p.style.fontFamily = currentFont;
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);

  setStyles();
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
