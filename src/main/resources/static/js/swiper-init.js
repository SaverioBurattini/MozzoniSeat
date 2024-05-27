var swiper = new Swiper(".swiper-homepage", {
  slidesPerView: 3,
  spaceBetween: 10,
 
  centeredSlides: true,
  centeredSlidesBounds: true,

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  breakpoints: {
    0: {
      slidesPerView: 1.3
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    882: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});