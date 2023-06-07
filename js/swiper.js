const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
