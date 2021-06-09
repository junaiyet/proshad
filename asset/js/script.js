new WOW().init();
 
 
 $('.banner-slider').slick({
    dots: false,
    infinite: true,
    arrows:true,
    prevArrow:'<i class="fa fa-angle-left left-arrow" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-right right-arrow" aria-hidden="true"></i>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
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