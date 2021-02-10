// Responsive nav
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function Validate(){
  var password = document.getElementById("password").value;
    var copassword = document.getElementById("copassword").value;
  var email = document.getElementById("email");
  var terms = $('#terms').is(':checked');
   var Uname = document.getElementById("Uname");

 

  if(email.value.length === 0){
    alert("Email can't be empty");
    return false;
  }
  else if(email.value.length < 7){
    alert("Email tidak sesuai format");
    return false;
  }

 

  if(password == ""){
    alert("You forget enter your password!");
    return false;
  }

  if(copassword != password){
      alert("Password Confirmation must be same");
      return false;
  }
   if(Uname.value.length === 0){
    alert("Username can't be empty");
    return false;
  }
  else if(Uname.value.length < 7){
    alert("Username must be more than 7 words!");
    return false;
  }

  if(!terms){
    alert('not checked!');
    return false;
  }

}