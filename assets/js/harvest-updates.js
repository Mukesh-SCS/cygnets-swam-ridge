document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('harvest-updates');
  if (!container) return;

  fetch('data/harvest.json')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.updates && data.updates.length > 0) {
        const latest = data.updates[0];
        container.innerHTML = '<p class="mb-0">' + latest.message + '</p>' +
          '<p class="mb-0" style="margin-top: var(--space-md); font-size: 0.9375rem; color: var(--color-body-muted);">Last updated: ' + latest.date + '</p>';
      }
    })
    .catch(function() { /* fallback: leave static content */ });
});
