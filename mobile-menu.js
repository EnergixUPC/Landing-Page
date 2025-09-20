document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const menuItems = document.querySelector('.menuItems');
  const menuLinks = document.querySelectorAll('.menuItem');
  
  hamburger.addEventListener('click', function() {
    // Toggle para las clases activas
    menuItems.classList.toggle('active');
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
  });
  
  // Cerrar menú al hacer clic en un enlace
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuItems.classList.remove('active');
      const bars = document.querySelectorAll('.bar');
      bars.forEach(bar => bar.classList.remove('active'));
    });
  });
  
  // Ajustar la altura del menú según la altura del nav
  function updateMenuPosition() {
    const navHeight = document.querySelector('nav').offsetHeight;
    document.querySelector('.menuItems').style.top = navHeight + 'px';
  }
  
  // Actualizar al cargar y al cambiar el tamaño de la ventana
  window.addEventListener('load', updateMenuPosition);
  window.addEventListener('resize', updateMenuPosition);
});