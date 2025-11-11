
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navBar");
  const logo = document.getElementById("logo");

  if (window.scrollY > 0) {
    navbar.classList.add("sticky","hamburgerIcon");
    logo.src = "./assets/images/dupay_blue.29119847.svg";
  } else {
    navbar.classList.remove("sticky","hamburgerIcon");
    logo.src = "./assets/images/dupay_white.71764264.svg";
  }
});