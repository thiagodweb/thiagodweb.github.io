$(document).ready(function() {
  function e() {
    $("[blink]").fadeOut(250);
    $("[blink]").fadeIn(250);
  }

  setInterval(e, 600)
  $(window).on('resize',function(){
    $(".panel-body").height($(".job").height()+10);
  });
  $(".card").flip({
    trigger: 'hover',
    autoSize: true,
    speed:250
  });
});

$(window).load(function(){
  new WOW({mobile: false}).init();
  $(this).resize();
})
