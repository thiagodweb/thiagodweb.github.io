$(document).ready(function() {
  function e() {
    $("[blink]").fadeOut(250);
    $("[blink]").fadeIn(250);
  }

  setInterval(e, 600)
  $(".card").flip({
    trigger: 'hover',
    autoSize: true,
    forceHeight: true
  });
});

$(window).load(function(){
  new WOW({mobile: false}).init();
  $.adaptiveBackground.run();

})
