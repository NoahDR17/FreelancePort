// Extracted JS from index.html

function toggleChip(el) {
  el.classList.toggle('active');
}

function toggleBudget(el) {
  document.querySelectorAll('.budget-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
}

function handleSubmit(e) {
  e.preventDefault();
  const btn = document.querySelector('.form-submit');
  btn.textContent = 'Message sent ✓';
  btn.style.background = '#1a9e5e';
  btn.disabled = true;
}

document.addEventListener('DOMContentLoaded', () => {
  // Replace inline onclicks for chips and budgets with event delegation
  document.getElementById('service-chips')?.addEventListener('click', (ev) => {
    const target = ev.target;
    if (target.classList && target.classList.contains('chip-option')) toggleChip(target);
  });

  document.getElementById('budget-options')?.addEventListener('click', (ev) => {
    const target = ev.target;
    if (target.classList && target.classList.contains('budget-option')) toggleBudget(target);
  });

  // Form submit
  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', handleSubmit);

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Close mobile nav when internal links are clicked
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav-links')?.classList.remove('open');
    });
  });
});
