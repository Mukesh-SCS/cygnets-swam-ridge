document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form[action="#"]');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your enquiry. We will be in touch soon.\n\nNote: Form submission is not yet connected to a backend. Please email us directly or call to place your order.');
    });
  });
});
