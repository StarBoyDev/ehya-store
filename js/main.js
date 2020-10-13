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
});
