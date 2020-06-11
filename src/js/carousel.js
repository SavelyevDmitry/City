$(document).ready(function(){
    $('#owl-carousel-top').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 800,
        smartSpeed: 800,
        items: 1,
        responsive:{
            0:{

            },
            768:{

            },
            1920:{
                nav: true,
                navText: ['', ''],
                navSpeed: 800
            }
        }
    });
});