$(document).ready(function(){

  //change colors
  function changeColor(){
    var colors = ["#69c410","#0076ba","#7e0fad","#03ccb2","#e11f5a"];
    var n = Math.floor(Math.random() * 5);
    $("h1, .blinker").css("color", colors[n]);
    $(".info").css("background", colors[n]);
  }
  changeColor();


  $(".info").hide();
  $.adaptiveBackground.run();
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100
    }
  );
  wow.init();

  function blink(){
    $(".blinker").fadeOut(250);
    $(".blinker").fadeIn(250);
  }
  setInterval(blink, 900);

  $(".jobs").mouseover(function(){
    $("> a",this).children(".info").fadeIn(200);
  })

  $(".jobs").mouseleave(function(){
    $("> a",this).children(".info").fadeOut(200);
  })

});
