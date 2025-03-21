export async function loadSkills() {
  const response = await fetch("data/skills.json");
  const skills = await response.json();

  const skillsContainer = document.getElementById("skills");

  // Limpiar el contenido de la sección antes de agregar las habilidades
  skillsContainer.innerHTML = "";

  // Título de la sección
  const skillsTitleElement = document.createElement("div");
  skillsTitleElement.classList.add("col-12", "text-center", "text-md-left");
  const skillsTitle = document.createElement("h2");
  skillsTitle.id = "skillsTitle";
  skillsTitle.classList.add("name");
  skillsTitle.textContent = "Habilidades";
  skillsTitleElement.appendChild(skillsTitle);
  skillsContainer.appendChild(skillsTitleElement);

  // Div contenedor de las habilidades
  const skillsRow = document.createElement("div");
  skillsRow.classList.add("row");

  // Frontend
  const frontendColumn = createSkillsColumn(
    "Frontend",
    skills.frontend,
    "frontendTitle"
  );
  skillsRow.appendChild(frontendColumn);

  // Backend y Base de Datos dentro de la misma "card"
  const backendBdaColumn = document.createElement("div");
  backendBdaColumn.classList.add("col-12", "col-sm-4");

  const backendBdaCard = document.createElement("div");
  backendBdaCard.classList.add("skills-type");

  // Título de Backend
  const backendTitleElement = document.createElement("div");
  backendTitleElement.classList.add("skills-title");
  const backendTitle = document.createElement("h5");
  backendTitle.id = "backendTitle"; // Id del título de Backend
  backendTitle.classList.add("skills-name");
  backendTitle.textContent = "Backend";
  backendTitleElement.appendChild(backendTitle);
  backendBdaCard.appendChild(backendTitleElement);

  // Habilidades de Backend
  skills.backend.forEach((skill) => {
    const skillCircle = document.createElement("div");
    skillCircle.classList.add("skill-circle");

    const skillCircleContent = document.createElement("div");
    skillCircleContent.classList.add("skill-circle__content");

    const skillImage = document.createElement("img");
    skillImage.classList.add("skill-icon");
    skillImage.src = skill.image;
    skillImage.alt = skill.skill;

    skillCircleContent.appendChild(skillImage);
    skillCircle.appendChild(skillCircleContent);
    backendBdaCard.appendChild(skillCircle);
  });

  // Título de Base de Datos
  const bdaTitleElement = document.createElement("div");
  bdaTitleElement.classList.add("skills-title");
  const bdaTitle = document.createElement("h5");
  bdaTitle.id = "bdaTitle"; // Id del título de Base de Datos
  bdaTitle.classList.add("skills-name");
  bdaTitle.textContent = "Base de Datos";
  bdaTitleElement.appendChild(bdaTitle);
  backendBdaCard.appendChild(bdaTitleElement);

  // Habilidades de Base de Datos
  skills.bda.forEach((skill) => {
    const skillCircle = document.createElement("div");
    skillCircle.classList.add("skill-circle");

    const skillCircleContent = document.createElement("div");
    skillCircleContent.classList.add("skill-circle__content");

    const skillImage = document.createElement("img");
    skillImage.classList.add("skill-icon");
    skillImage.src = skill.image;
    skillImage.alt = skill.skill;

    skillCircleContent.appendChild(skillImage);
    skillCircle.appendChild(skillCircleContent);
    backendBdaCard.appendChild(skillCircle);
  });

  backendBdaColumn.appendChild(backendBdaCard);
  skillsRow.appendChild(backendBdaColumn);

  // Control de versiones
  const versionsColumn = createSkillsColumn(
    "Control de Versiones",
    skills.versions,
    "versionsTitle"
  );
  skillsRow.appendChild(versionsColumn);

  skillsContainer.appendChild(skillsRow);
}

// Función para crear las columnas de habilidades
function createSkillsColumn(categoryName, skillsList, categoryId) {
  const column = document.createElement("div");
  column.classList.add("col-12", "col-sm-4");

  const categoryElement = document.createElement("div");
  categoryElement.classList.add("skills-type");

  const categoryTitle = document.createElement("div");
  categoryTitle.classList.add("skills-title");
  const categoryHeading = document.createElement("h5");
  categoryHeading.id = categoryId; // Asignación del id dinámicamente
  categoryHeading.classList.add("skills-name");
  categoryHeading.textContent = categoryName;
  categoryTitle.appendChild(categoryHeading);
  categoryElement.appendChild(categoryTitle);

  skillsList.forEach((skill) => {
    const skillCircle = document.createElement("div");
    skillCircle.classList.add("skill-circle");

    const skillCircleContent = document.createElement("div");
    skillCircleContent.classList.add("skill-circle__content");

    const skillImage = document.createElement("img");
    skillImage.classList.add("skill-icon");
    skillImage.src = skill.image;
    skillImage.alt = skill.skill;

    skillCircleContent.appendChild(skillImage);
    skillCircle.appendChild(skillCircleContent);
    categoryElement.appendChild(skillCircle);
  });

  column.appendChild(categoryElement);

  return column;
}
