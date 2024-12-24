$(function(){
    //слайдер slick
  $('.slider__inner-footer').slick({
    arrows: false,
    dots: false,
    infinite: true,
    
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //menu__btn
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

});