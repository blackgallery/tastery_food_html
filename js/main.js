(function($) {
    'use strict';

    /*----------------------------------------
        Sticky Menu Activation
    ------------------------------------------*/

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 85) {
            $('.navigation').addClass('header-sticky');
        } else {
            $('.navigation').removeClass('header-sticky');
        }
    });


    /* =======================================
        For Sidebar
    =======================================*/
    $(".siderbar_btn").on("click", function() {
        $(".menu_sidebar_info").addClass("info-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".menu_info_close-btn").on("click", function() {
        $(".menu_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
    });
    $(".body-overlay").on("click", function() {
        $(".menu_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
    });


    /* =======================================
        For slider
    =======================================*/
    $("#slider_owl").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 9000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        loop: true,
        navText: ["<i class='icon-glyph-205'></i>", "<i class='icon-glyph-204'></i>"],
        mouseDrag: true,
        touchDrag: true,
    });



    /*=======================================
        slider Section
     ========================================== */
    $(".search_icon").on('click', function() {
        $(".search_icon_inr").slideToggle();
    });
    $(".slider_home").on("translate.owl.carousel", function() {
        $(".single_slider h2, .single_slider h5, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider_home").on("translated.owl.carousel", function() {
        $(".single_slider h2, .single_slider h5, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
    });

    /* =======================================
         Team Section 
     =======================================*/
    $("#team_carsel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 1000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 30,
        singleItem: false,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: false,
        navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],
    });


    /* =======================================
         Testimonial Section 
     =======================================*/
    $("#testimonial").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 1000, // Default is 250
        items: 3, //Set Testimonial items
        loop: true,
        margin: 30,
        center: true,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: true,
        navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],
        responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });

    /* =======================================
         Product Promotion Section 
     =======================================*/
    $("#product_pro").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 1000, // Default is 250
        items: 3, //Set Testimonial items
        loop: true,
        margin: 30,
        center: true,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: true,
        navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"],
        responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });

    /*=======================================
        Event  Section  
    =======================================*/
    $("#event_carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 2000, // Default is 250
        items: 3,
        center: true,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: true,
        nav: false,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"],
        responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            },
            280: {
                items: 2
            }
        }
    });


    /*=======================================
        Client Section  
    =======================================*/
    $("#client_carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 5,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: false,
        nav: false,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"],
        responsive: {
            1200: {
                items: 5
            },
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            },
            280: {
                items: 2
            }
        }
    });

  

    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });

 
/*=======================================
       * gallery.min.js        
======================================= */

     $(".project-link").magnificPopup({
         type: 'image',
         gallery: {
             enabled: true,
         },
     });




    /*=======================================
        Scroll Top
    =======================================*/

    // $('.scrollup').on('click', function () {
    //     $('html,body').animate({
    //       scrollTop: 0
    //     }, 900);
    //   });

    // $(window).on('scroll', function () {
    // 	if ($(window).scrollTop() >= 500) {
    // 	  $('.scrollup').slideDown(450);
    // 	} else {
    // 	  $('.scrollup').slideUp(450);
    // 	}
    // });




})(jQuery);