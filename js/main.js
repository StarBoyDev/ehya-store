$(document).ready(function () {
  // Modal
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalMain = $(".modal__main");
    modalOverlay.addClass("modal__overlay--visible");
    modalMain.addClass("modal__main--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalMain = $(".modal__main");
    modalOverlay.removeClass("modal__overlay--visible");
    modalMain.removeClass("modal__main--visible");
  }

  // Tabs
  $(".js-tab-trigger").on("click", function () {
    var tabName = $(this).data("tab");
    console.log(tabName);
    var tab = $('.js-tab-content[data-tab="' + tabName + '"]');
    $(".js-tab-trigger.trends__active").removeClass("trends__active");
    $(this).addClass("trends__active");
    $(".js-tab-content").removeClass("trends__active");
    tab.addClass("trends__active");
  });

  // Swiper Testimonial
  var testimonialSwiper = new Swiper(".testimonial__swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // Swiper Story
  var storySwiper = new Swiper(".story__swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".slide-button--next",
      prevEl: ".slide-button--prev",
    },
  });
});
