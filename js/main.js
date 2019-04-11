$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'before',
        after_label: 'after'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        swipe: false,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        responsive:[
            {
              breakpoint: 1199,
              settings: {
                prevArrow: false,
                nextArrow: false,
              }
            }
        ]
    });
    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        dotsClass: 'before-slider__dots',
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
      });
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -110 + "px"});
        return false;
    });
    $('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top').addClass("active");
		} else {
			$('.top').removeClass("active");
		};
    });
    // $(window).on('load', function() {
    //     $('.preloader').delay(1500).fadeOut('slow');
    // });
    /*Показывать карту как только докрутили до неё */
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function (){
      var windowTop = $(this).scrollTop();
      if (windowTop > reviewsTop) {
        $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3c88c4b3b651d48d6d4667e12696866c76f325790fe2187598dfbb77cbe335a9&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
        $(window).unbind('scroll')
      }
    });
});  