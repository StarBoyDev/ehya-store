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
  // var trendsTab = $(".trends__tab");
  // var trendsCard = $(".trends__card");

  // trendsTab.on("click", function (event) {
  //   var activeCard = $(this).attr("data-target");
  //   $(activeCard).toggleClass("trends__active");
  // });

  $(".js-tab-trigger").on("click", function () {
    var tabName = $(this).data("tab");
    console.log(tabName);
    var tab = $('.js-tab-content[data-tab="' + tabName + '"]');
    $(".js-tab-trigger.trends__active").removeClass("trends__active");
    $(this).addClass("trends__active");
    $(".js-tab-content").removeClass("trends__active");
    tab.addClass("trends__active");
  });
});
