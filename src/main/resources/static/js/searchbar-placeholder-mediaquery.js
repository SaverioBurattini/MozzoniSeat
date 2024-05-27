function setPlaceholder() {
  const searchbarInput = document.querySelector('.searchbar input');
  if (window.matchMedia("(max-width: 600px)").matches) {
      // Se la finestra è larga al massimo 600px (telefono)
      searchbarInput.setAttribute('placeholder', 'Evento, artista, località');
  } else {
    searchbarInput.setAttribute('placeholder', 'Quale evento vuoi vedere dal vivo?');
  }
}

// Chiama la funzione all'inizio per impostare il placeholder corretto
setPlaceholder();

// Aggiungi un listener per rilevare i cambiamenti delle dimensioni della finestra
window.addEventListener('resize', setPlaceholder);