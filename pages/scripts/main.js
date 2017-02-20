$(document).ready(function() {
  $('#menu-open').click(function() {
    $('.mobile-menu').slideDown(200);
    $(this).fadeOut(200,
      function() {
        $('#menu-close').fadeIn(200);
      });
  });
  $('#menu-close').click(function() {
    $('.mobile-menu').slideUp(200);
    $(this).fadeOut(200,
      function() {
        $('#menu-open').fadeIn(200);
      });
  });
});
