document.addEventListener("DOMContentLoaded", () => {
  const infoCV = document.getElementById("infoCV");
  const progressBar = document.getElementById("progressBar");
  const downloadIcon = document.getElementById("downloadIcon");
  const completeIcon = document.getElementById("completeIcon");

  infoCV.addEventListener("click", () => {
    // Reinicia cualquier progreso previo
    progressBar.style.width = "0";
    completeIcon.classList.remove("active");
    downloadIcon.classList.add("active");

    // Inicia el progreso simulado
    setTimeout(() => {
      progressBar.style.width = "100%"; // Llena la barra de progreso
    }, 100);

    setTimeout(() => {
      // Cambia a icono de "completado" y oculta el de descarga
      completeIcon.classList.add("active");
      downloadIcon.classList.remove("active");

      // Simula la descarga del archivo
      const link = document.createElement("a");
      link.href = "/assets/pdf/CV_IgnacioGarciaSausor.pdf"; // Ruta del archivo
      link.download = "CV_IgnacioGarciaSausor.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Limpia el DOM
    }, 1500); // Tiempo para completar la animación

    setTimeout(() => {
      // Reinicia el botón para volver al estado inicial
      progressBar.style.width = "0";
      completeIcon.classList.remove("active");
      downloadIcon.classList.add("active");
    }, 2500); // Tiempo para reiniciar después
  });
});
