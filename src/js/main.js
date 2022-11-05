import { Router } from "./routes.js";

const router = new Router();
router.add('/', "../pages/home.html")
router.add('/sobre', "../pages/sobre.html")


router.handle()

window.onpopstate = () => router.handle();

window.route = () => router.route()

const btnMenu = document.querySelector("header nav button");

btnMenu.addEventListener("click", () => {
  const nav  = document.querySelector("nav");
  nav.classList.toggle("active");
})