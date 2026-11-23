const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#booking-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  status.textContent = 'Thanks — your session request has been received.';
  form.reset();
});
