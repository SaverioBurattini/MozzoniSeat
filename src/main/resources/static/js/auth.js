const URL = "http://localhost:8080";
const ENDPOINT_NUOVO_UTENTE = `${URL}/api/utenti/nuovoUtente`;
const ENDPOINT_CERCA_UTENTE_BY_EMAIL_PASSWORD = `${URL}/api/utenti`;


let btnModalAccessoHeader = document.querySelector(".btn-modal-accesso-header");

let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let data = document.getElementById("dataNascita");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confermaPassword = document.getElementById("confermaPassword");
let checkboxPolicy = document.getElementById("checkboxPolicy");

let emailLogin = document.getElementById("emailLogin");
let passwordLogin = document.getElementById("passwordLogin");

let bottoneRegistrati = document.querySelector(".btn-registrati");  
let bottoneLogin = document.querySelector(".btn-login");
let bottoneLogout = document.querySelector(".btnLogout");

class Utente {
  constructor(nome, cognome, data, email, password) {
    this.nome = nome;
    this.cognome = cognome;
    this.data = data;
    this.email = email;
    this.password = password;
  }
}


function checkIfLoggedIn(){
  if(localStorage["utente"]){ 
    btnModalAccessoHeader.textContent = "Logout";
    btnModalAccessoHeader.setAttribute("data-bs-target", "");
    btnModalAccessoHeader.addEventListener("click", logout);

    let headerUserIcon = document.querySelector('.fa-user');
    headerUserIcon.classList.add('fa-sign-out');
    headerUserIcon.classList.remove('fa-user');
    headerUserIcon.setAttribute('data-bs-target','')
    headerUserIcon.setAttribute('data-bs-toggle','')
    headerUserIcon.addEventListener('click',logout)
    }
  }


function registrati() {
  event.preventDefault();
  
  if (nome.value.trim() != "" &&
      cognome.value.trim() != "" &&
      dataNascita.value.trim() != "" &&
      email.value.trim() != "" &&
      password.value.trim() != "" &&
      confermaPassword.value.trim() != "") {

    if(password.value != confermaPassword.value) {
      signupFeedback.textContent = "Le due password inserite devono coincidere";

    } else {
      if(checkboxPolicy.checked) {

      const UtenteCreato = new Utente(
        nome.value,
        cognome.value,
        data.value,
        email.value,
        password.value
      );
      
      fetch(`${ENDPOINT_NUOVO_UTENTE}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UtenteCreato),
      })
      .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });

        window.localStorage.setItem("utente", JSON.stringify(UtenteCreato));
        location.reload();
      } else {
        signupFeedback.textContent = "Per continuare devi accettare i Termini di servizio";
      }
    }
  } else {
    signupFeedback.textContent = "Compila tutti i campi";
  }
    
}



function login(){
  event.preventDefault();

  if(emailLogin.value.trim() != "" && passwordLogin.value.trim() != "") {
    try {
      fetch(`${ENDPOINT_CERCA_UTENTE_BY_EMAIL_PASSWORD}/${emailLogin.value}/${passwordLogin.value}`)
      .then(data =>{
        return data.json();
      }).then(utente =>{
        if(JSON.stringify(utente) == "null") {
          signinFeedback.textContent = ("Utente non trovato o password errata");
        } else {
          console.log(JSON.stringify(utente));
          window.localStorage.setItem("utente", JSON.stringify(utente));
          location.reload();
        }
      })
    } catch {
      console.log("Errore fatale nella ricerca dell'utente");
    }

  } else {
    signinFeedback.textContent = "Compila tutti i campi";
  }
  
}

function logout(){
  event.preventDefault();
  localStorage.clear();
  location.reload();
}



checkIfLoggedIn();
bottoneRegistrati.addEventListener("click", registrati);
bottoneLogin.addEventListener("click", login);