$(document).ready(function () {

  // timer

  function countdown(endDate) {
    var days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
      return;
    }

    setInterval(calculate, 1000);

    function calculate() {
      var startDate = new Date().getTime();

      var timeRemaining = parseInt((endDate - startDate) / 1000);

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);

        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);

        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);

        seconds = parseInt(timeRemaining);

        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
      } else {
        return;
      }
    }
  }

  (function () {
    countdown('06/19/2020 12:00:00 AM');
  }());

  $("#myModal").modal('show');

  
});


function send() {
  var link = 'mailto:email@example.com?subject=Message from '
           +document.getElementById('email').value
           +'&body='+ "Email: " + document.getElementById('email').value
           + '%0D%0A' + "First Name: " + document.getElementById('firstName').value 
           + '%0D%0A' + "Last Name: " + document.getElementById('lastName').value 
          //  + '%0D%0A' + "EMail: " + document.getElementById('EMail').value 
           + '%0D%0A' + "Job Title: " + document.getElementById('jobTitle').value;
  window.location.href = link;
}
