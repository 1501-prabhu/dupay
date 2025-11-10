// ===== Sticky Navbar and Logo Change =====
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navBar");
  const logo = document.getElementById("logo");

  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
    logo.src = "./assets/images/dupay_blue.29119847.svg";
  } else {
    navbar.classList.remove("sticky");
    logo.src = "./assets/images/dupay_white.71764264.svg";
  }
});

// ===== Toggle Menu (for mobile) =====
const menuIcon = document.getElementById("menuIcon");
const linksBlock = document.getElementById("linksBlock");

menuIcon.addEventListener("click", () => {
  linksBlock.classList.toggle("active");
  // Toggle icon between bars and X
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});