document.addEventListener('DOMContentLoaded', function () {
    NProgress.start();  // Avvia la barra di progresso
  });

  window.addEventListener('load', function () {
    NProgress.done();  // Termina la barra di progresso
  });