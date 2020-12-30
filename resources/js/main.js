function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";document.getElementById("mySidepanel").style.height = "100%";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// SMOOTH SCROOL 

$(function(){
    $('.sidepanel a').on('click', function(){
       $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top
       }, 500); 
    });
});


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

//===========================
// START JQUERY 

$(document).ready(function(){
    
    new WOW().init();
    
    $('#tabs').tabs();
    
    // STICKY HEADER
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }); 
    
});


// SKILL BAR 

	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});


























