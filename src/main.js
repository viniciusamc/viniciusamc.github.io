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
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

const btnMenu = document.querySelector("header nav button");

btnMenu.addEventListener("click", () => {
  const nav  = document.querySelector("nav");
  nav.classList.toggle("active");
})

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