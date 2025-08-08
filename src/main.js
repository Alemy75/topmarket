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
const ofertCheckbox = document.getElementById('ofertCheckbox');
const submitBtn = document.getElementById('submitBtn');

checkbox.addEventListener('change', function () {
  const isDisabled = !this.checked || !ofertCheckbox.checked;

  console.log(ofertCheckbox.checked);

  submitBtn.disabled = isDisabled;
  submitBtn.classList.toggle('opacity-50', isDisabled);
  submitBtn.classList.toggle('cursor-not-allowed', isDisabled);
  submitBtn.classList.toggle('cursor-pointer', isDisabled);
  submitBtn.classList.toggle('pointer-events-none', isDisabled);
});

ofertCheckbox.addEventListener('change', function () {
  const isDisabled = !this.checked || !checkbox.checked;

  submitBtn.disabled = !this.checked;
  submitBtn.classList.toggle('opacity-50', isDisabled);
  submitBtn.classList.toggle('cursor-not-allowed', isDisabled);
  submitBtn.classList.toggle('cursor-pointer', isDisabled);
  submitBtn.classList.toggle('pointer-events-none', isDisabled);
});

// cookie
const cookie = document.getElementById('cookie');
const btnCookie = document.getElementById('cookie-btn');

setTimeout(() => {
  cookie.classList.add('duration-500');
  cookie.classList.remove('translate-y-[150%]');
}, 2000);

btnCookie.addEventListener('click', () => {
  cookie.classList.add('translate-y-[150%]');
});
