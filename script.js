$(document).ready(function () {
  $("#toggle-switch").click(function () {
    $(this).toggleClass("on");

    // for the background color based on the switch state
    var backgroundColor = $(this).hasClass("on") ? "rgb(15, 104, 20)" : "rgb(192, 51, 16)"; 
    
    // To Update the background color
    $("body").css("background-color", backgroundColor); 
    if 
    
    ($(this).hasClass("on")) {

      // To Update the message when the switch is turned on
      $('#switch-message').text('Switch Is Turned ON'); 
      setTimeout(function(){

        // To set the message  only for few seconds when turned on
        $('#switch-message').text(''); 
      }, 3000);

    } else {

      // To Update the message when the switch is turned off
      $('#switch-message').text('Switch Is Turned OFF'); 
      setTimeout(function(){

      // To set the message  only for few seconds when turned off
        $('#switch-message').text(''); 
      }, 3000); 
    }
    // To Slide animation for the toggle switch
    $(this).animate({ left: $(this).hasClass("on") ? 0 : 60 }, 300); 
  });
});
