let anchors = document.querySelectorAll('header a[href*="#"]'); //обовязково вказати де знаходиться меню

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      anchorId = this.getAttribute("href");
      yOffset = -50; // задаете отступ
      element = document.querySelector(anchorId); // находим элемент до которого нужно прокручивать страницу
      y = element.getBoundingClientRect().top + window.pageYOffset + yOffset; // находим расстояние до элемента
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }
}
