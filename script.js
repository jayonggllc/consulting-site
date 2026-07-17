// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-reveal for sections
const revealTargets = document.querySelectorAll('.service-card, .process-steps li, .rate-sheet');
revealTargets.forEach(el => el.setAttribute('data-reveal', ''));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}
