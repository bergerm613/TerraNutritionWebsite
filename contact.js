$("document").ready( function () {
        alert("The contact page is currently under construction. The messages will not be sent nor will the appointment chosen be booked. Sorry for the inconvenience.You can contact us via terraNutrition@gmail.com");
    }); 
 
 $(function() {
        $( "#dialog_box" ).dialog({
           autoOpen: false,  
        });});

  //DatePicker Function
  $(function () {
    $("#date_picker").datepicker();
  });

  //Data validation for email

  function validateInput() {


    var tracker = 0;

    // validate the name entry
    var name = $("#name_input").val().trim().replace(/\s/g, '');
    var alpha = /^[a-zA-Z]*$/g
    if (name == "") {
      document.getElementById("name_requirement").innerHTML = "*Please enter your name.";

    } else if (!alpha.test(name)) {
      document.getElementById("name_requirement").innerHTML = "*The name that you entered is invalid. Please try again.";

    } else {
      document.getElementById("name_requirement").innerHTML = "*";
      tracker += 1;
    }

    // validate the email entry 
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var email = $("#email_input").val().trim();
    if (email == "") {
      document.getElementById("email_requirement").innerHTML = "*Please enter an email address.";
      
    } else if (!emailPattern.test(email)) {
      document.getElementById("email_requirement").innerHTML = "*The email address that you entered is invalid. Please try again.";
      
    } else {
      document.getElementById("email_requirement").innerHTML = "*";
      tracker +=1;
    }

    // validate the phone number entry
    var phone = $("#phone_input").val().trim();
    if (phone == "") {
      document.getElementById("phone_requirement").innerHTML = "*Please enter a phone number.";
      //	isValid = false;
    } else if (phone.length != 10 || isNaN(phone)) {
      document.getElementById("phone_requirement").innerHTML = "*Please enter a valid phone number.";
      
    } else {
      document.getElementById("phone_requirement").innerHTML = "*";
      tracker +=1;
    }

    // ensure that user leaves a message
    var message = $("#message_input").val().trim();
    if (message == "") {
      document.getElementById("message_requirement").innerHTML = "*Please enter a message.";
     
    } else {
      document.getElementById("message_requirement").innerHTML = "*";
       tracker += 1;
    }

    

    $.ajax({
      type: "POST",
      url: "recaptcha.php",
      data: {
        captcha: grecaptcha.getResponse()
      }, 
      success: function() {
        //Ensure recaptcha was filled
        if (grecaptcha.getResponse() == false) { 
           document.getElementById("recap_requirement").innerHTML = "*Please verify you are not a robot.";
           grecaptcha.reset();
        }
        else  if (grecaptcha.getResponse().length && tracker == 4){
          //Dialog to let user know that message was sent successfully
            $( "#dialog_box" ).dialog( "open" );
         }
        
    
       
      }
});

    //end validation function

  };
  
  
  //vue function to greet user
  var Name = new Vue({
	el : '#name',
	data: {
		name_input: ""
	}
});





