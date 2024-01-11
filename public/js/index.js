const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");
const instagram = document.querySelector(".instagram__flex");
const instagramContent = Array.from(instagram.children);
const scrollRevealoption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-regular fa-circle-xmark" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealoption,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealoption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealoption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealoption,
});

ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealoption,
  delay: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealoption,
  interval: 500,
});

instagramContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidder", true);
  instagram.appendChild(duplicateNode);
});
