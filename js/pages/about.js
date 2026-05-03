
document.addEventListener('DOMContentLoaded', () => {

  const targets = [
    '.legacy-section .section-eyebrow',
    '.legacy-section .section-heading',
    '.legacy-body p',
    '.btn-primary',
    '.compliance-card',
    '.leader-image-wrap',
    '.leader-content',
    '.anchor-card',
    '.anchors-title',
    '.anchors-sub',
  ];

  targets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('fade-up');
      if (i === 1) el.classList.add('fade-up-delay-1');
      if (i === 2) el.classList.add('fade-up-delay-2');
      if (i === 3) el.classList.add('fade-up-delay-3');
    });
  });

 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

});
