$(window).scroll(function () {
  $(".intro__content").css("opacity", 1 - $(window).scrollTop() / 250);
});

$(window).scroll(function () {
  parallax();
});

function parallax() {
  var wScroll = $(window).scrollTop();
  console.log(wScroll);

  $(".parallax").css("background-position", "center " + wScroll * 0.4 + "px");
}
