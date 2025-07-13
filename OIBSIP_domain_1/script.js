// SET A FUTURE DATE FIRST! Change this to a valid future time
var countDownDate = new Date("Jul 5, 2025 15:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  let expired = false;
  if (distance < 0) {
    expired = true;
    distance = now - countDownDate; // make distance positive
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var output = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  if (expired) {
    output += " (EXPIRED)";
  }

  document.getElementById("demo").innerHTML = output;
}, 1000);

// Splash screen auto-hide
setTimeout(() => {
  const splash = document.getElementById("splash");
  if (splash) splash.style.display = "none";
}, 3000);
