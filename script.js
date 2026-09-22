const header = document.querySelector('.site-header');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
});

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.activeElement?.blur();
  });
});

const revealItems = document.querySelectorAll('.reveal');
if (revealItems.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}
