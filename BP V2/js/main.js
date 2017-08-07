$(document).ready(function () {
    /***************** Owl Carousel ******************/

    $("#myCarousel").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        dots: false

    });
    
    /***************** Full Width Slide ******************/

//    var slideHeight = $(window).height();
//
//    $('#myCarousel .item').css('height', slideHeight);
//
//    $(window).resize(function () {
//        $('#myCarousel .item').css('height', slideHeight);
//    });
    
    /***************** Owl Carousel Testimonials ******************/

    $("#owl-testi").owlCarousel({

        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "backSlide",
        autoPlay: true,
        items:1

    });
});