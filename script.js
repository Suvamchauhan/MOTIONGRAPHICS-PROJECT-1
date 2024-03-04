$(document).ready(function () {
  $("#toggle-switch").click(function () {
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
      $("body").animate({ backgroundColor: "lightgreen" }, 500); // To change background color when ON
      $('#switch-message').text('Switch Is Turned ON'); // To Update the message when the switch is turned on
      setTimeout(function(){
        $('#switch-message').text(''); // To Clear the message after a few seconds when turned on
      }, 1000); 
    } else {
      $("body").animate({ backgroundColor: "white" }, 500); //  To Smoothly revert background color when OFF
      $('#switch-message').text('Switch Is Turned OFF'); // To Update the message when the switch is turned off
      setTimeout(function(){
        $('#switch-message').text(''); // To Clear the message after a few seconds mwhen turned off
      }, 1000); 
    }
    $(this).animate({ left: $(this).hasClass("on") ? 0 : 60 }, 300); // for sliding animation for the toggle switch
  });
});
