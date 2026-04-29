
document.querySelectorAll('.footer-links a, .footer-legal a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


const copyEl = document.querySelector('.footer-copy');
if (copyEl) {
  const currentYear = new Date().getFullYear();
  copyEl.innerHTML = copyEl.innerHTML.replace('2024', currentYear);
}
