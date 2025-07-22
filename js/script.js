// Script para animação dos links da sidebar

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.sidebar a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      link.classList.add('pulse');
      setTimeout(function() {
        link.classList.remove('pulse');
      }, 400);
    });
  });
});
