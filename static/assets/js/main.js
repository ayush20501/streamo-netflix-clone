(function($) {
    "use strict";

    // Check if element exists
    $.fn.elExists = function() {
        return this.length > 0;
    };

    new WOW().init();

    $(window).on('load', function() {
        dataBackgroundImage();
    });
    /*--
        Data Background Image 
    -----------------------------------*/
    function dataBackgroundImage() {
        $('.bg-image , .bg-image-two').each(function() {
            var $this = $(this),
                $image = $this.data('bgimage');

            $this.css({
                'background-image': 'url(' + $image + ')'
            });
        });
    }
    dataBackgroundImage();


    /*--
        Menu Sticky
    -----------------------------------*/
    var windows = $(window);
    var sticky = $('.header-sticky');

    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 5) {
            sticky.removeClass('is-sticky');
        } else {
            sticky.addClass('is-sticky');
        }
    });

    // Prevent closing dropdown upon clicking inside the dropdown
    $(".dropdown-menu").on("click", function(e) {
        e.stopPropagation();
    });

    /*--
        Mobile Menu
    ------------------------*/

    var menuNav = $('nav.main-navigation');
    menuNav.meanmenu({
        meanScreenWidth: '991',
        meanMenuContainer: '.mobile-menu',
        meanMenuClose: '<span class="menu-close"></span>',
        meanMenuOpen: '<span class="menu-bar"></span>',
        meanRevealPosition: 'right',
        meanMenuCloseSize: '0',
    });


    /*--
        Hero Slider
    --------------------------------------------*/
    var heroSlider = $('.hero-slider-three');
    heroSlider.slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: false,
            }
        }]
    });

    /*--
        Hero Slider
    --------------------------------------------*/
    var heroSlider2 = $('.hero-slider-four , .series-slider-active ');
    heroSlider2.slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: false,
            }
        }]
    });

    /*--
        Slider Height
	--------------------------------*/

    var $headerMedia = $('.header-medea-inner-area');

    function heroSliderMargin() {
        var headerHeight = ($headerMedia.elExists()) ? $headerMedia[0].getBoundingClientRect().height : 0;
        if ($('.header-transparant').length) {
            $('.single-slide-3').css({
                'min-height': '100vh'
            });
        } else {

            $('.single-slide-3').css({
                'min-height': 'calc(100vh - ' + headerHeight + 'px)'
            });
        }
    }
    $(window).on('load', function() {
        heroSliderMargin();
    });

    $(window).on('resize', function() {
        heroSliderMargin();
    });

    /*--    
       Toogle Menu
    --------------------------------------*/

    $('.mobile-sidebar').on('click', function() {
        $('.mobile-sidebar').addClass('offsetmenu');
        $('.sidebar-menu').toggleClass('offsetmenu-on');
    });

    /*--
        Service Slider
    --------------------------------------------*/
    var partnerBrand = $('.sponsor-brand-active');
    partnerBrand.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--
        Movie Slider
    --------------------------------------------*/
    var movieSlider = $('.movie-slider-active');
    movieSlider.slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1365,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--
        Movie Slider
    --------------------------------------------*/
    var movieSlider2 = $('.movie-slider-active-2');
    movieSlider2.slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--
        Movie Slider
    --------------------------------------------*/
    var movieSlider3 = $('.movie-slider-active-3');
    movieSlider3.slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--
        Movie Slider
    --------------------------------------------*/
    var brandLogoActive = $('.brand-logo-active');
    brandLogoActive.slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*--
    Brand Slider
    --------------------------------------------*/
    var partnerBrand = $('.partner-brand-active');
    partnerBrand.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--
        Product Slider
    --------------------------------------------*/
    var productActive = $('.product-carousl-active');
    productActive.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--
        Coming Soon Slider
    --------------------------------------------*/
    var productActive = $('.coming-soon-active');
    productActive.slick({
        accessibility: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.coming-soon-active a').on('click', function(e) {
        e.preventDefault();

        var $href = $(this).attr('href');

        $('.coming-soon-active a').removeClass('active');
        $(this).addClass('active');

        $('.coming-soon-tab-panel .tab-pane').removeClass('active show');
        $('.coming-soon-tab-panel ' + $href).addClass('active show');
    });

    /*--
        Testimonial Slider Active
    --------------------------------------------*/
    var testimonialSlider = $('.testimonial-slider');

    testimonialSlider.on('init afterChange', function(e) {
        $(this).find('.slick-slide.slick-active').first().addClass('first-elem');
        $(this).find('.slick-slide.slick-active').last().addClass('last-elem');
        $(this).find('.slick-slide:not(.slick-active)').removeClass('first-elem last-elem');
        $(this).find('.slick-slide.slick-active.slick-current').removeClass('first-elem last-elem');
    });

    testimonialSlider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        dots: false,
        arrows: true,
        prevArrow: false,
        nextArrow: false,
        adaptiveHeight: true,
        infinite: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }]
    });



    /*--
        Odometer Activation
    ------------------------------------*/
    if ($('.odometer').length) {

        $(window).on('scroll', function() {

            function winScrollPosition() {
                var scrollPos = $(window).scrollTop(),
                    winHeight = $(window).height();
                var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
                return scrollPosition;
            }

            var scrollPos = $(this).scrollTop();
            var elemOffset = $('.odometer').offset().top;
            var winHeight = $(window).height();

            if (elemOffset < winScrollPosition()) {

                $('.odometer').each(function() {
                    $(this).html($(this).data('count-to'));
                });

            }
        });
    }


    /*--
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    // Magnific Popup Video
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });


    /*--
        ScrollUp Active
    ------------------------*/
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*-------------------------------
       Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('search-open')) {
            $(this).removeClass('search-open');
            $(this).siblings('.search-wrap-2').removeClass('search-open');
        } else {
            $(this).addClass('search-open');
            $(this).siblings('.search-wrap-2').addClass('search-open');
        }
    })

})(jQuery);