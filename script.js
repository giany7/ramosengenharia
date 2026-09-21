const items = document.querySelectorAll('.nav-menu a');
items.forEach((item) => {
  item.addEventListener('click', () => {
    document.activeElement.blur();
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 24) {
    header.style.boxShadow = '0 24px 55px rgba(0,0,0,0.18)';
  } else {
    header.style.boxShadow = 'none';
  }
});
