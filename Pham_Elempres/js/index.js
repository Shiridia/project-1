$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
        indicators: true
    });

    setInterval(function() {
        $('.carousel').carousel('next');
    }, 5000);
});