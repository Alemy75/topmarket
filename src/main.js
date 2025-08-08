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

// form
const checkbox = document.getElementById('agreeCheckbox');
const submitBtn = document.getElementById('submitBtn');

checkbox.addEventListener('change', function () {
  submitBtn.disabled = !this.checked;
  submitBtn.classList.toggle('opacity-50', !this.checked);
  submitBtn.classList.toggle('cursor-not-allowed', !this.checked);
  submitBtn.classList.toggle('cursor-pointer', this.checked);
  submitBtn.classList.toggle('pointer-events-none', !this.checked);
});

// cookie
const cookie = document.getElementById('cookie');
const closeCookie = document.getElementById('cookie-close');
const btnCookie = document.getElementById('cookie-btn');

setTimeout(() => {
  cookie.classList.add('duration-500');
  cookie.classList.remove('translate-y-[150%]');
}, 2000);

closeCookie.addEventListener('click', () => {
  cookie.classList.add('translate-y-[150%]');
});

btnCookie.addEventListener('click', () => {
  cookie.classList.add('translate-y-[150%]');
});
