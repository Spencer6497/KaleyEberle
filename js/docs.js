$(document).ready(function() { 
    $('.card').each(function(fadeInDiv){
        $(this).delay(fadeInDiv * 250).fadeIn(1000);
    });
    $('.page-footer').fadeIn(1000);
 });

function myFunction(x) {
    x.classList.toggle("change");
}