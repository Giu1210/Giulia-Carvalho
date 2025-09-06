// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const hamburger = document.querySelector('.hamburger');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  hamburger.classList.toggle('active');
});

// Fechar menu mobile ao clicar em um link
const navLinks = document.querySelectorAll('#mobile-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    hamburger.classList.remove('active');
  });
});

// Indicar página ativa
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinksAll = document.querySelectorAll('.nav-link');

navLinksAll.forEach(link => {
  const linkHref = link.getAttribute('href').split('/').pop();
  
  if (currentPage === linkHref) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
