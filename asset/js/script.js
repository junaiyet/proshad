new WOW().init();
 
 

$(".backtotop").click(function(){
 $("html,body").animate ({
   scrollTop:0,
 },1000)
});

$(window).scroll(function(){
if($(window).scrollTop() > 800){
  $(".backtotop").fadeIn()
}else{
  $(".backtotop").fadeOut()
}
});


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
 
 $('.properties-slider').slick({
    dots: false,
    infinite: true,
    arrows:true,
    prevArrow:'<i class="fa fa-long-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-long-arrow-right next" aria-hidden="true"></i>',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
   
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
 $('.client-slider').slick({
    dots: false,
    infinite: true,
    arrows:true,
    prevArrow:'<i class="fa fa-long-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-long-arrow-right next" aria-hidden="true"></i>',
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
   
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
 
 
 
 
  $('.blog-slider').slick({
    dots: false,
    infinite: true,
    arrows:true,
    prevArrow:'<i class="fa fa-long-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-long-arrow-right next" aria-hidden="true"></i>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:"0",
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