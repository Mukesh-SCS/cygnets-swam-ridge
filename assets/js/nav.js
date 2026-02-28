document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const overlay = document.querySelector('.nav-overlay');

  function openMenu() {
    nav.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (overlay) overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (overlay) overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.contains('is-open') ? closeMenu() : openMenu();
    });
    if (overlay) overlay.addEventListener('click', closeMenu);
    nav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeMenu);
    });
  }

  // Set active nav link based on current page
  var current = window.location.pathname.split('/').pop();
  if (!current || current === '') current = 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === current || (current === 'index.html' && href === 'index.html') || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});
