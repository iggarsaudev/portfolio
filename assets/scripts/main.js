import { changeLanguage } from "./language.js";
import { loadProjects } from "./projects.js";
import { loadSkills } from "./skills.js";

// Cargar los proyectos y habilidades cuando la página se carga
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  loadSkills();
});

document.addEventListener("DOMContentLoaded", function () {
  const langButton = document.getElementById("language-toggle");

  // Asegúrate de que el botón existe antes de agregar el eventListener
  if (langButton) {
    langButton.addEventListener("click", changeLanguage);
  } else {
    console.error("❌ El botón de cambio de idioma no se encontró en el DOM.");
  }
});
