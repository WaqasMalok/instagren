// MAIN SWIPER SLIDER STYLE
var swiper = new Swiper('.mainSwiper', {
  spaceBetween: 30,
  effect: 'fade',
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 5000,

    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ABOUT SWIPER SLIDER STYLE
var swiper = new Swiper('.myAboutSwiper', {
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
