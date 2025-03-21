const toggleThemeButton = document.getElementById('toggle-theme');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Cargar el tema guardado en localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  themeIcon.textContent = 'dark_mode'; // Mostrar icono del modo oscuro
} else {
  themeIcon.textContent = 'light_mode'; // Mostrar icono del modo claro
}

// Cambiar el tema y guardar la preferencia
toggleThemeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Cambiar el icono según el modo
  if (body.classList.contains('dark-theme')) {
    themeIcon.textContent = 'dark_mode'; // Icono para modo oscuro
    localStorage.setItem('theme', 'dark'); // Guardar modo oscuro en localStorage
  } else {
    themeIcon.textContent = 'light_mode'; // Icono para modo claro
    localStorage.setItem('theme', 'light'); // Guardar modo claro en localStorage
  }
});
