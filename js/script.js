const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
const PHONE = '5511984242915'; // TROQUE pelo WhatsApp da Briza, somente numeros.

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 30);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
  nav.classList.toggle('open', !open);
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const text = encodeURIComponent('Olá! Conheci a Briza Atelier pelo site e gostaria de saber mais.');
  link.href = `https://wa.me/${PHONE}?text=${text}`;
});

document.querySelectorAll('[data-whatsapp-product]').forEach(link => {
  const product = link.dataset.whatsappProduct;
  const text = encodeURIComponent(`Olá! Conheci a Briza Atelier pelo site e gostaria de saber mais sobre ${product}.`);
  link.href = `https://wa.me/${PHONE}?text=${text}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();
