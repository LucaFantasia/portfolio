const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");

const components = [
  ["load-hero", "components/hero.html"],
  ["load-projects", "components/projects.html"],
  ["load-about", "components/about.html"],
  ["load-skills", "components/skills.html"],
  ["load-contact", "components/contact.html"]
]

async function loadComponent(id, path) {
  const element = document.getElementById(id);
  const response = await fetch(path);
  element.innerHTML = await response.text();
}

components.forEach(([id, path]) => {
  loadComponent(id, path);
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});