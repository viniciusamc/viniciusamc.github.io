const navProjects = document.querySelector(".nav-projects");
const btnMenu = document.querySelector("header nav button");
const navSkills = document.querySelector(".nav-skills");
const navHome = document.querySelector("nav ul li a");
const navAbout = document.querySelector(".nav-about");
const linkedin = document.querySelector(".linkedin");
const titulo = document.querySelector(".name-write");
const github = document.querySelector(".github")
const email = document.querySelector(".email");
const stack = document.querySelector(".stack");
const nav  = document.querySelector("nav");

function toggleMenu(){
  nav.classList.remove("active");
}

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
})

github.addEventListener("mouseover", () => {
  github.classList.toggle(".github-message")
})

navHome.addEventListener("click", toggleMenu);
navAbout.addEventListener("click", toggleMenu);
navSkills.addEventListener("click", toggleMenu);
navProjects.addEventListener("click", toggleMenu);


function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 50 * i);
  });
}

typeWriter(stack);
typeWriter(titulo);
