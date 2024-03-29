$(function () {
    // preloader js
    $(window).on('load', function () {
        $('.prealoder').delay(1000).fadeOut(600);
    })

    // fixed menu
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > 0) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    })

    $('.links').click(function () {
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-collapse').removeClass('show');
    })

    // active menu js
    const li = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");

    function activeMenu() {
        let len = sec.length;
        while (--len && window.scrollY + 300 < sec[len].offsetTop) {}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu)

    // smooth scroll js
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 74
                }, 0);
                return false;
            }
        }
    });

    // back to top button js
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });



    // banner slider js
    $('#banner').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 700,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="fa fa-angle-left icon left"></i>',
        nextArrow: '<i class="fa fa-angle-right icon right"></i>',
    });

    // portfolio slider js
    $('.port-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    // counter up js
    $('.counter').counterUp({
        delay: 20,
        time: 1500
    });

    // venobox js
    $('.venobox').venobox();

    // services slider js
    $('.service-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        centerMode: true,
        centerPadding: '0',
        verticalSwiping: true,
        prevArrow: '<i class="fa fa-angle-up icons left"></i>',
        nextArrow: '<i class="fa fa-angle-down icons right"></i>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                vertical: false,
                verticalSwiping: false,
            }
        }]

    });


    // testimonial image slider js
    $('.testi-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        centerMode: true,
        centerPadding: '0',
        verticalSwiping: true,
        asNavFor: '.testi-details-slider',
        prevArrow: '<i class="fa fa-angle-up icons left"></i>',
        nextArrow: '<i class="fa fa-angle-down icons right"></i>',
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    // testimonial details slider js
    $('.testi-details-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true,
        asNavFor: '.testi-slider',
        centerPadding: 0,
    });

    // sponsor slider js
    $('.sponsor-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
})