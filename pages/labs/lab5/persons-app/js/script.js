$(document).ready(function() {
  $('#btn').click(function() {
    $('#list').append(document.createTextNode($('#name').val())).append('<br />');
  });
});
