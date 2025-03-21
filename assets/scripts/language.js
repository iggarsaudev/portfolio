// Variable para rastrear el idioma actual
let currentLanguage = "es";

// Función para cargar el archivo JSON de traducciones
async function loadTranslations(language) {
  // const response = await fetch(`${language}.json`);
  const response = await fetch(`translations/${language}.json`);
  const translations = await response.json();
  return translations;
}

function updateFlag(currentLanguage) {
  // Actualizar bandera
  // Definir las banderas y sus atributos
  const flags = {
    es: {
      icon: "assets/images/flags/es.png",
      alt: "Cambiar a Inglés",
    },
    en: {
      icon: "assets/images/flags/en.png",
      alt: "Switch to Spanish",
    },
  };

  // Cambiar el idioma y actualizar la bandera solo si currentLanguage es válido
  if (flags[currentLanguage]) {
    const languageIcon = document.getElementById("language-icon");

    // Actualizar la ruta de la imagen y el atributo 'alt'
    languageIcon.src = flags[currentLanguage].icon;
    languageIcon.alt = flags[currentLanguage].alt;
  }
}

// Función para cambiar el idioma
export async function changeLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es";

  // Cargar las traducciones dinámicamente
  const translations = await loadTranslations(currentLanguage);

  // Actualizamos la bander
  updateFlag(currentLanguage);

  // Actualizar los textos fijos de la página
  document.getElementById("menuHome").textContent = translations.menuHome;
  document.getElementById("menuSkills").textContent = translations.menuSkills;
  document.getElementById("menuProjects").textContent =
    translations.menuProjects;

  document.getElementById("infoName").textContent = translations.infoName;
  document.getElementById("infoDescription").textContent =
    translations.infoDescription;
  document.getElementById("infoDescription2").textContent =
    translations.infoDescription2;
  document.getElementById("infoCV").textContent = translations.infoCV;

  document.getElementById("projectsTitle").textContent =
    translations.projectsTitle;
  document.getElementById("viewProject").textContent = translations.viewProject;

  document.getElementById("skillsTitle").textContent = translations.skillsTitle;

  document.getElementById("footerNote").textContent = translations.footerNote;

  // Actualizar los proyectos
  fetch("../../data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      const projects = data.map((project) => project.id);
      projects.forEach((projectId) => {
        const project = translations[projectId];
        document.getElementById(`${projectId}-title`).textContent =
          project.title;
        document.getElementById(`${projectId}-description`).textContent =
          project.description;
      });
    })
    .catch((error) => console.error("Error al cargar el archivo JSON:", error));

  // Actualizar los botones de "Ver Proyecto"
  const projectButtons = document.querySelectorAll(".view-project-btn");
  projectButtons.forEach((button) => {
    const projectId = button.getAttribute("data-id");
    button.textContent = translations.viewProject;
  });

  // Actualizar las skills
  document.getElementById("frontendTitle").textContent =
    translations.frontendTitle;
  document.getElementById("backendTitle").textContent =
    translations.backendTitle;
  document.getElementById("bdaTitle").textContent = translations.bdaTitle;
  document.getElementById("versionsTitle").textContent =
    translations.versionsTitle;
}
