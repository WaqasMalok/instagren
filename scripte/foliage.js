var swiper = new Swiper('.rent-Swiper', {
  slidesPerView: 1,
  spaceBetween: 8,
  loop: true,
  speed: 600,
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
  },
});
// ADD SWIPER
var swiper1 = new Swiper('.foliage-Swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 1000,
  autoplay: {
    delay: 2000,
  },
});
