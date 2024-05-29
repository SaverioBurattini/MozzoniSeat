let nomeUtenteProfilo = document.querySelector('.nome');
// let dataNascitaProfilo = document.querySelector('.dataNascita');
let emailProfilo = document.querySelector('.email');

let utente = JSON.parse(localStorage.getItem('utente'));

nomeUtenteProfilo.textContent = `${utente.nome} ${utente.cognome}`;
// dataNascitaProfilo.textContent = utente.dataNascita;
emailProfilo.textContent = utente.email;