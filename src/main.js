const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
}

const routes = {
  404: "/pages/404.html",
  "/": "src/pages/index.html",
  "/about": "/src/pages/about.html",
}

const handleLocation = async () => {
  const { pathname } = window.location;
  const route = routes[pathname] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

const nav  = document.querySelector("nav");
const btnMenu = document.querySelector("header nav button");
const navHome = document.querySelector("nav ul li a")
const navAbout = document.querySelector(".nav-about")
const navSkills = document.querySelector(".nav-skills")
const navProjects = document.querySelector(".nav-projects")

function toggleMenu(){
  nav.classList.remove("active");
}

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
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

const titulo = document.querySelector(".name-write");
const stack = document.querySelector(".stack")
typeWriter(stack);
typeWriter(titulo);