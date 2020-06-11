$(document).ready(function () {

  // Get the video
  // var video = document.getElementById("myVideo");

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
  //   function openPage(pageName, elmnt, color) {
  //     // Hide all elements with class="tabcontent" by default */
  //     var i, tabcontent, tablinks; tabcontent = document.getElementsByClassName("tabcontent");
  //     for (i = 0; i < tabcontent.length; i++) {
  //       tabcontent[i].style.display = "none";
  //     }

  //     // Remove the background color of all tablinks/buttons
  //     tablinks = document.getElementsByClassName("tablink");
  //     for (i = 0; i < tablinks.length; i++) {
  //       tablinks[i].style.backgroundColor = "";
  //     }

  //     // Show the specific tab content
  //     document.getElementById(pageName).style.display = "block";

  //     // Add the specific color to the button used to open the tab content
  //     elmnt.style.backgroundColor = color;
  //   }


  $("#myModal").modal('show');

  //   // Get the element with id="defaultOpen" and click on it
  //   document.getElementById("defaultOpen").click();


});
