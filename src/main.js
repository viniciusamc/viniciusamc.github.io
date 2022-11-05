const btnMenu = document.querySelector("header nav button");

btnMenu.addEventListener("click", () => {
  const nav  = document.querySelector("nav");
  nav.classList.toggle("active");
})