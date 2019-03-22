$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'before',
        after_label: 'after'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        responsive:[
            {
              breakpoint: 1199,
              settings: {
                prevArrow: false,
                nextArrow: false
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
    
});  