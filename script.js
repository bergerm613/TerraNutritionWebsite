$(document).ready(function() {
  $("#nav-placeholder").load("nav.html");
  $("#footer-placeholder").load("footer.html");
  

  //true is kg, false is lb
  var switchStatus = false;
  $("#togBtn").on('change', function() {
      if ($(this).is(':checked')) {
          switchStatus = $(this).is(':checked');
      }
      else {
        switchStatus = $(this).is(':checked');
      }
  });

  $("#calculate").click( function() {
    var feet = parseFloat( $("#feet").val() );
    var inches = parseFloat( $("#inches").val() );
    var weight = parseFloat( $("#weight").val() );

    // converting from lb to kg
    if (switchStatus == false)
    {
      weight /= 2.205;
    }

    let meter = feet + (inches / 12);
    let height = meter / 3.2808;

    let bmi = weight / Math.pow(height, 2);
    bmi = (Math.round(bmi * 100) / 100);

    let answer = "Your Body Mass Index (BMI) is: " + bmi; 

    if(bmi < 18.5) {
      answer += ". Index Value is Underweight.";
    }
    else if ((bmi >= 25) && (bmi <= 29.9)) {
      answer += ". Index Value is Overweight.";
    }
    else if (bmi > 30) {
      answer += ". Index Value is Obese.";
    };

    if (isNaN(bmi))
    {
      answer = " ";
    }

    $("#outcome").text(answer);
  });
});


//For resizing text on banner
$(function() {
    var timer
    $(window).resize(function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
           if ($(window).width() < 555){
               $('h1. br').replaceWith(' ');
           }
        }, 100);
    });
});

