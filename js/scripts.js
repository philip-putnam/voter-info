$(document).ready(function() {
  var age = prompt("How old are you?");

  if (age >= 18) {
    $("#info").show();
  } else {
    $("#under18info").show();
  }

});
