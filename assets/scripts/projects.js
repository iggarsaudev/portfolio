export async function loadProjects() {
  const response = await fetch("data/projects.json");
  const projects = await response.json();

  // Obtener el contenedor donde se insertarán los proyectos
  const projectsContainer = document.getElementById("projects");

  // Crear el contenido de la sección 'Proyectos'
  const projectsSection = `
    <div class="row align-items-center">
      <div class="col-12 col-sm-12 text-center text-md-left">
        <h2 id="projectsTitle" class="name">
          Proyectos
        </h2>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="project-list">
        ${projects
          .map(
            (project) => `
          <div id="${project.id}" class="card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
              <h5 id="${project.id}-title" class="card-title">${project.title}</h5>
              <p id="${project.id}-description" class="card-text">${project.description}</p>
              <a href="${project.githubUrl}" class="github-btn" target="_blank">GitHub</a>
              <a href="${project.projectUrl}" id="viewProject" class="view-project-btn" target="_blank">Ver Proyecto</a>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  // Insertar el contenido dentro del contenedor
  projectsContainer.innerHTML = projectsSection;
}
