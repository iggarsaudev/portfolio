document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // Selecciona todas las secciones
  const menuLinks = document.querySelectorAll(".menu-item__link"); // Selecciona los enlaces del menú

  // Función para manejar el scroll y actualizar el menú
  function handleScroll() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop - 50 &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    menuLinks.forEach((link) => {
      link.classList.remove("active"); // Elimina la clase 'active' de todos los enlaces
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active"); // Añade 'active' al enlace correspondiente
      }
    });
  }

  // Agregar evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Actualizar el menú cuando se hace clic en un enlace
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      setTimeout(() => {
        handleScroll();
      }, 100); // Asegura que el cambio de clase active ocurra después de que el navegador haga el scroll
    });
  });

  // Llamada inicial para verificar qué sección está activa
  handleScroll();
});
