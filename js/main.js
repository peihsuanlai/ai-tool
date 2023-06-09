$(document).ready(function () {
  //漢堡選單切換
  $(".hamburger-menu").click(function () {
    $(this).toggleClass("hide");
    $(".mobile-collapse").toggleClass("show");
    $(".close-icon").toggleClass("show");
  });

  $(".close-icon").click(function () {
    $(".mobile-collapse").toggleClass("show");
    $(".hamburger-menu").toggleClass("hide");
    $(this).toggleClass("show");
  });

  //回到最上

  $(".top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  //類別篩選
  $(".filter-dropdown-btn").click(function (e) {
    e.preventDefault();
    $(".filter-dropdown-menu").toggleClass("show");
  });

  //順序篩選
  $(".order-dropdown-btn").click(function (e) {
    e.preventDefault();
    $(".order-dropdown-menu").toggleClass("show");
  });

  //新舊切換
  $(".new-to-old").click(function (e) {
    e.preventDefault();
    $(".order-dropdown-menu").toggleClass("show");
    $(".order-dropdown-btnText").text("由新到舊");
  });

  $(".old-to-new").click(function (e) {
    e.preventDefault();
    $(".order-dropdown-menu").toggleClass("show");
    $(".order-dropdown-btnText").text($(".old-to-new").text());
  });

  $("li").click(function () {
    $(this).toggleClass("active");
    $(this).find(".answer").toggleClass("show");
    $(this).find(".add").toggleClass("d-none");
    $(this).find(".remove").toggleClass("d-none");
  });
});
