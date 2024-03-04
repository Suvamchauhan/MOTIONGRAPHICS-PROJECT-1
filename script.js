$(document).ready(function () {
  $("#toggle-switch").click(function () {
    $(this).toggleClass("on");
    var backgroundColor = $(this).hasClass("on") ? "rgb(15, 104, 20)" : "rgb(192, 51, 16)"; // Determine the background color based on the switch state
    $("body").css("background-color", backgroundColor); // Update the background color
    if ($(this).hasClass("on")) {
      $('#switch-message').text('Switch Is Turned ON'); // To Update the message when the switch is turned on
      setTimeout(function(){
        $('#switch-message').text(''); // To Clear the message after a few seconds when turned on
      }, 1000); 
    } else {
      $('#switch-message').text('Switch Is Turned OFF'); // To Update the message when the switch is turned off
      setTimeout(function(){
        $('#switch-message').text(''); // To Clear the message after a few seconds when turned off
      }, 1000); 
    }
    // Slide animation for the toggle switch
    $(this).animate({ left: $(this).hasClass("on") ? 0 : 60 }, 300); 
  });
});
