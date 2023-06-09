const swiper = new Swiper(".swiper", {
  slidesPerView: 1,   // 頁面呈現的物件數
  slidesPerGroup: 1, // 一次切換幾個物件
  spaceBetween: 12,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2, 
    },
    992: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
