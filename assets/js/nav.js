document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('is-open');
    });
  }

  // Set active nav link based on current page
  let current = window.location.pathname.split('/').pop();
  if (!current || current === '') current = 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function(a) {
    const href = a.getAttribute('href');
    if (href === current || (current === 'index.html' && href === 'index.html') || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});
