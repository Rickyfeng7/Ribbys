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

        document.getElementById("dayTimer").innerHTML = parseInt(days, 10);
        document.getElementById("hourTimer").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minuteTimer").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("secondTimer").innerHTML = seconds < 10 ? "0" + seconds : seconds;
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
  var link = 'mailto:ribbysjobs@gmail.com?subject=Message from '
           +document.getElementById('email').value
           +'&body='+ "Email: " + document.getElementById('email').value
           + '%0D%0A' + "First Name: " + document.getElementById('firstName').value 
           + '%0D%0A' + "Last Name: " + document.getElementById('lastName').value 
          //  + '%0D%0A' + "EMail: " + document.getElementById('EMail').value 
           + '%0D%0A' + "Job Title: " + document.getElementById('jobTitle').value;
  window.location.href = link;
}



function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}


function send() {
  // Retrieving the values of form elements 
  var fullName = document.getElementById('fullName').value;
  var eMail = document.getElementById('eMail').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var jobTitle = document.getElementById('jobTitle').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var employment = document.getElementById('employment').value;
  var school = document.getElementById('School').value;
  
  
  var link = 'mailto:email@example.com?subject=Message from '
           +document.getElementById('eMail').value
           +'&body='+ "Email: " + eMail
           + '%0D%0A' + "Full Name: " + fullName
           + '%0D%0A' + "Phone Number: " + phoneNumber
           + '%0D%0A' + "Job Title: " + jobTitle
           + '%0D%0A' + "Address: " + address
           + '%0D%0A' + "City: " + city
           + '%0D%0A' + "Employment Type: " + employment
           + '%0D%0A' + " Education: " + school
           
  window.location.href = link;
  event.preventDefault();
}




// Defining a function to validate form 
function validate() {

  // Retrieving the values of form elements 
  var fullName = document.getElementById('fullName').value;
  var eMail = document.getElementById('eMail').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var jobTitle = document.getElementById('jobTitle').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var employment = document.getElementById('employment').value;
  var school = document.getElementById('School').value;


  // Sets value to true to compare
  var fullNameErr = eMailErr = phoneNumberErr = jobTitleErr = addressErr = cityErr = employmentErr = schoolErr = true;
  
  // Validate name
  if(fullName == "") {
      printError("fullNameErr", "Enter your full name");
  } else {
      // checks name is letters
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(fullName) === false) {
          printError("fullNameErr", "Enter your full name");
      } else {
          printError("fullNameErr", "");
          fullNameErr = false;
      }

  }

  // Validate email address
  if(eMail == "") {
      printError("eMailErr", "Enter your email address");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(eMail) === false) {
          printError("eMailErr", "Enter your email address");
      } else{
          printError("eMailErr", "");
          eMailErr = false;
      }
  }

  // Validate School
  if(school == "") {
      printError("schoolErr", "Input your Highest Level of Education");
  } else {
      // Regular expression checks name is letters
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(school) === false) {
          printError("schoolErr", "Input your Highest Level of Education");
      } else {
          printError("schoolErr", "");
          schoolErr = false;
      }

  }

  // Address Validate 
  if(address == "") {
      printError("addressErr", "Enter your address ie: 1956 Duluth Hwy");
  } else {
      // Regular expression for basic address validation
      var regex = /^\d+\s[A-z]+\s[A-z]+/;
      if(regex.test(address) === false) {
          printError("addressErr", "Enter a valid  address eg: 1956 Duluth Hwy");
      } else{
          printError("addressErr", "");
          addressErr = false;
      }
  }
  
  // City Validate
  if(city == "") {
      printError("cityErr", "Enter your city");
  } else {
      // Regular expression for basic city validation
      var regex = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
      if(regex.test(city) === false) {
          printError("cityErr", "Enter your city");
      } else{
          printError("cityErr", "");
          cityErr = false;
      }
  }

  // Validate Number
  if(phoneNumber == "") {
      printError("phoneNumberErr", "Enter your mobile number");
  } else {
      // Regular expression for basic number validation
      var regex = /^[1-9]\d{9}$/;
      if(regex.test(phoneNumber) === false) {
          printError("phoneNumberErr", "Enter a valid 10 digit mobile number ie: 17705458443");
      } else{
          printError("phoneNumberErr", "");
          phoneNumberErr = false;
      }
  }
  
  // employment selection
  if(employment == "Select") {
      printError("employmentErr", "Eelect an option");
  } else {
      printError("employmentErr", "");
      employmentErr = false;
  }
  
  
  if(jobTitle == "Select") {
      printError("jobTitleErr", "Eelect a Job Title");
  } else {
      printError("jobTitleErr", "");
      jobTitleErr = false;
  }
  
  if((fullNameErr || eMailErr || phoneNumberErr || jobTitleErr || addressErr || cityErr || employmentErr || schoolErr) == true) {
      return false;
   } else {
  // if name is valid prints to email
   send();

   }
}

