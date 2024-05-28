let tabelle = document.querySelector(".table_component");
let bodyTabella = document.querySelector("#bodyTabella");
let errore = document.querySelector(".errore");

let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let data = document.getElementById("data");
let email = document.getElementById("email");
let password = document.getElementById("password");
let ruolo = document.getElementById("ruolo");

let bottoneNuovoEvento = document.querySelector(".btn-eventoPubblica");

let bottoneModificaEvento = document.querySelector(".bottoneModifica");

let bottoneConfermaEliminazione = document.getElementById('bottoneConfermaEliminazione')
let spanUtenteDaEliminare = document.getElementById("spanUtenteDaEliminare");

let eventoSelezionato = "";
let arrayUtenti = [];

async function getAllEventi() {
    try {
        const response = await fetch("http://localhost:8080/api/utenti/tuttiGliUtenti");
        const eventi = await response.json();
        arrayUtenti = eventi;
        console.log(arrayUtenti);
        tuttiGliUtenti();
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

getAllEventi();

function tuttiGliUtenti() {
    let fragment = document.createDocumentFragment();

    arrayUtenti.forEach((utente) => {
        let utenteRecord = document.createElement("tr");
        let inserisciInTabella = `
            <td class="idUtente">${utente.utente_id}</td>
            <td class="nome" data-eventoId="${utente.id}" >${utente.nome}</td>
            <td class="cognome" data-eventoId="${utente.id}">${utente.cognome}</td>
            <td class="data" data-eventoId="${utente.id}">${utente.data}</td>
            <td class="email" data-eventoId="${utente.id}">${utente.email}</td>
            <td class="password" data-eventoId="${utente.id}">${utente.password}</td>
            <td class="ruolo" data-eventoId="${utente.id}">${utente.ruolo}</td>
            <td>
                <button class="bottoneModifica fa-solid fa-pen btn btn-primary" data-eventoId="${utente.id}"></button>
                <button data-bs-toggle="modal" data-bs-target="#modalConfermaEliminazione" class="btnApriModalEliminazione fa-solid fa-trash btn btn-danger" data-eventoId="${utente.id}"></button>  
            </td>
        `;

        utenteRecord.innerHTML = inserisciInTabella;
        fragment.appendChild(utenteRecord);
    });

    bodyTabella.appendChild(fragment);

    document.querySelectorAll(".bottoneModifica").forEach(btn => {
        btn.addEventListener("click", () => toggleEdit(btn));
    });

    document.querySelectorAll(".btnApriModalEliminazione").forEach(btn => {
        btn.addEventListener("click", () => {
            let utente = arrayUtenti.find(utente => utente.utente_id == btn.getAttribute("data-eventoId"));
            if (utente) {
                spanUtenteDaEliminare.textContent = utente.nome;
                eventoSelezionato = btn.getAttribute("data-eventoId");
            }
        });
    });
}





async function toggleEdit(btn) {
  let isEditable = btn.classList.contains("fa-floppy-disk");

  let eventId = btn.getAttribute("data-eventoId");

  let campiForm = document.querySelectorAll(`[data-eventoId="${eventId}"]`);
  let btnApriModalEliminazioneSingoloEvento = document.querySelector(`.btnApriModalEliminazione[data-eventoId="${eventId}"]`);
  
  if(btn.classList.contains("fa-floppy-disk")) {
    let nomeEventoSelezionato = document.querySelector(`.nome[data-eventoId="${eventId}"]`);
    let cognomeEventoSelezionato= document.querySelector(`.cognome[data-eventoId="${eventId}"]`);
    let dataEventoSelezionato = document.querySelector(`.data[data-eventoId="${eventId}"]`);
    let emailSelezionato = document.querySelector(`.email[data-eventoId="${eventId}"]`);
    let passwordEventoSelezionato = document.querySelector(`.password[data-eventoId="${eventId}"]`);
    let ruoloEventoSelezionato = document.querySelector(`.ruolo[data-eventoId="${eventId}"]`);

   

    const oggettoEventoModificato = new EventoPUT (
      Number(eventId),
      nomeEventoSelezionato.textContent,
      cognomeEventoSelezionato.textContent,
      dataEventoSelezionato.textContent,
      emailSelezionato.textContent,
      passwordEventoSelezionato.textContent,
      ruoloEventoSelezionato.textContent,
    )

    modificaEvento(oggettoEventoModificato);

    btn.classList.remove("fa-floppy-disk");
    btn.classList.add("fa-pen");

    [...campiForm].forEach(campo =>{
      campo.style.color = !isEditable ? "blue" : "black";
      campo.removeAttribute('contenteditable');
    })

    btn.style.color = "white";
    btnApriModalEliminazioneSingoloEvento.style.color = "white";


    
  } else {

    campiForm.forEach(campo => {
      
      campo.setAttribute("contenteditable", !isEditable);
      campo.style.color = !isEditable ? "blue" : "black";
      
      btnApriModalEliminazioneSingoloEvento.style.color = "white";
    });

    btn.classList.toggle("fa-floppy-disk", !isEditable);
    btn.classList.toggle("fa-pen", isEditable);
    btn.style.color = "white";
    }

}

function confermaEliminazione() {
    fetch(`http://localhost:8080/api/utenti/${eventoSelezionato}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then(() => location.reload())
      .catch(error => console.error("Error deleting event:", error));
}

bottoneConfermaEliminazione.addEventListener("click", confermaEliminazione);

class Utente {
    constructor(nome, cognome, data, email, password, ruolo) {
        this.nome = nome;
        this.cognome = cognome;
        this.data = data;
        this.email = email;
        this.password = password;
        this.ruolo = ruolo;
    }
}

class EventoPUT {
  constructor(id, nome, cognome, data, email, password, ruolo) {
      this.id = id;
      this.nome = nome;
      this.cognome = cognome;
      this.data = data;
      this.email = email;
      this.password = password;
      this.ruolo = ruolo;
  }
}

const URL = "http://localhost:8080/api/utenti";
function InserisciNuovoEvento() {
    event.preventDefault();
    
    if (nome.value.trim() == "" ||
        cognome.value.trim() == "" ||
        data.value.trim() == "" ||
        email.value.trim() == "" ||
        password.value.trim() == "" ||
        ruolo.value.trim() == "") {
        errore.innerHTML = "Non hai inserito tutti i campi";

    } else {
        const UtenteCreato = new Utente(
        nome.value,
        cognome.value,
        data.value,
        email.value,
        password.value,
        ruolo.value,
        );





            fetch("http://localhost:8080/api/utenti", {
                method: "POST",
                mode : "cors",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(UtenteCreato),
            
                }).then(location.reload())
            
        }

    }


    bottoneNuovoEvento.addEventListener("click", InserisciNuovoEvento);


function modificaEvento(oggettoEventoModificato) {

  // fetch("http://localhost:8080/api/categoria/"+ oggettoEventoModificato.categoria)
  //       .then(response=>{
  //           return response.json();
  //       }).then(categoria=>{
  //         oggettoEventoModificato.categoria = categoria;
  //           console.log(JSON.stringify(oggettoEventoModificato));

              fetch(`http://localhost:8080/api/utenti`, {
                method: "PUT",
                mode : "cors",
                      headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(oggettoEventoModificato),
                  
                      })
            }
        
  // )};