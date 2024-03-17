const changeLogoButton = document.getElementById("changeLogoButton");
const logo = document.getElementById("logo");

changeLogoButton.addEventListener("click", () => {
  const newLogoImage = "img/new-logo.png";
  logo.src = newLogoImage;
});
