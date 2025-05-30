import './assets/style.css';

// Sidebar
const sidebar = document.getElementById('sidebar');
const openButton = document.getElementById('sidebar-open');
const closeButton = document.getElementById('sidebar-close');

openButton.addEventListener('click', () => {
  sidebar.classList.remove('translate-x-[-100%]');
});

closeButton.addEventListener('click', () => {
  sidebar.classList.add('translate-x-[-100%]');
});

const links = document.querySelectorAll('#sidebar-link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    sidebar.classList.add('translate-x-[-100%]');
  });
});
