$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".mobile-collapse").toggleClass("show");
  });

  $("#top").click(function (event) {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  $(".dropdown-btn").click(function (e) {
    $(".dropdown-menu").toggleClass("show");
  });

  $(".new-to-old").click(function (e) {
    e.preventDefault();
    $(".dropdown-menu").toggleClass("show");
    $(".dropdown-btnText").text("由新到舊");
  });

  $(".old-to-new").click(function (e) {
    e.preventDefault();
    $(".dropdown-menu").toggleClass("show");
    $(".dropdown-btnText").text($(".old-to-new").text());
  });

  $("li").click(function (e) {
    $(this).toggleClass("active");
    $(this).find(".answer").toggleClass("show");
    $(this).find(".add").toggleClass("d-none");
    $(this).find(".remove").toggleClass("d-none");
  });
});
