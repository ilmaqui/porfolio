$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("#menu")
        .css("background-color", "rgba(255, 255, 255, 0.25)")
        .addClass("shadow-xs backdrop-filter backdrop-blur-md");
    } else {
      $("#menu")
        .css("background-color", "rgba(255, 255, 255, 0)")
        .removeClass("shadow-xs backdrop-filter backdrop-blur-md");
    }
  });
});
