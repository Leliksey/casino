$(document).ready(function() {
    $(".burger__icon").click(function() {
        $(this).hide();
        $(".burger__icon_close").show();
        $(".burger__block").addClass("open");
        $("html, body").addClass("ovh");
    })
    $(".burger__icon_close").click(function() {
        $(this).hide();
        $(".burger__icon").show();
        $(".burger__block").removeClass("open");
        $("html, body").removeClass("ovh");
    });

    $('.cards').owlCarousel({
        loop:true,
        nav:true,
        mouseDrag:true,
        touchDrag: true,
        pullDrag:false,
        freeDrag:false,
        URLhashListener:false,
        dots:true,
        autoplay:false,
        margin: 20,
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1400:{
                items:6
            }
        }
    });
    if($(window).width() < 769) {
        $('.cards').owlCarousel('destroy')
    };
    $(window).on("resize", function() {
        if($(window).width() < 769) {
            $('.cards').owlCarousel('destroy')
        } else {
            $('.cards').owlCarousel({
                loop:true,
                nav:true,
                mouseDrag:true,
                touchDrag: true,
                pullDrag:false,
                freeDrag:false,
                URLhashListener:false,
                dots:true,
                autoplay:false,
                margin: 20,
                responsive:{
                    0:{
                        items:2
                    },
                    576:{
                        items:3
                    },
                    768:{
                        items:4
                    },
                    992:{
                        items:5
                    },
                    1400:{
                        items:6
                    }
                }
            });
        }
    });
});