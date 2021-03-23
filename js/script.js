
$(document).ready(function(){
  function mobileCompositionSlider() {
    $('.composition .slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false
    });
  }
  if (window.innerWidth < 768) {
    mobileCompositionSlider();
  }
  $(window).resize(function(e){
    if (window.innerWidth < 768) {
      if (!$('.composition .slider').hasClass('slick-initialized')) {
        mobileCompositionSlider();
      }
    } else {
      if ($('.composition .slider').hasClass('slick-initialized')) {
        $('.composition .slider').slick('unslick');
      }
    }
  });
});
