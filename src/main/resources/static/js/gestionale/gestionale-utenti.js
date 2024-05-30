let tabelle = document.querySelector(".table_component");
let bodyTabella = document.querySelector("#bodyTabella");
let errore = document.querySelector(".errore");

let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let data = document.getElementById("data");
let email = document.getElementById("email");
let password = document.getElementById("password");
let ruolo = document.getElementById("ruolo");

let bottoneNuovoUtente = document.querySelector(".btn-utentePubblica");

let bottoneModificaUtente = document.querySelector(".bottoneModifica");

let bottoneConfermaEliminazione = document.getElementById('bottoneConfermaEliminazione')
let spanUtenteDaEliminare = document.getElementById("spanUtenteDaEliminare");

let utenteSelezionato = "";
let arrayUtenti = [];

async function getAllUtenti() {
    try {
        const response = await fetch("http://localhost:8080/api/utenti/tuttiGliUtenti");
        const utenti = await response.json();
        arrayUtenti = utenti;
        console.log(arrayUtenti);
        tuttiGliUtenti();
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

getAllUtenti();

function tuttiGliUtenti() {
    let fragment = document.createDocumentFragment();
    
    arrayUtenti.forEach((utente) => {
        let utenteRecord = document.createElement("tr");
        let inserisciInTabella = `
        <td class="idUtente">${utente.utente_id}</td>
        <td class="nome" data-utenteId="${utente.utente_id}" >${utente.nome}</td>
        <td class="cognome" data-utenteId="${utente.utente_id}">${utente.cognome}</td>
        <td class="data" data-utenteId="${utente.utente_id}">${utente.data}</td>
        <td class="email" data-utenteId="${utente.utente_id}">${utente.email}</td>
        <td class="password" data-utenteId="${utente.utente_id}">${utente.password}</td>
        <td class="ruolo" data-utenteId="${utente.utente_id}">${utente.ruolo}</td>
        <td>
        <button class="bottoneModifica fa-solid fa-pen btn btn-primary" data-utenteId="${utente.utente_id}"></button>
        <button data-bs-toggle="modal" data-bs-target="#modalConfermaEliminazione" class="btnApriModalEliminazione fa-solid fa-trash btn btn-danger" data-utenteId="${utente.utente_id}"></button>  
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
            let utente = arrayUtenti.find(utente => utente.utente_id == btn.getAttribute("data-utenteId"));
            if (utente) {
                spanUtenteDaEliminare.textContent = utente.nome;
                utenteSelezionato = btn.getAttribute("data-utenteId");
            }
        });
    });
}





async function toggleEdit(btn) {
    let isEditable = btn.classList.contains("fa-floppy-disk");
    
    let userId = btn.getAttribute("data-utenteId");
    
    let campiForm = document.querySelectorAll(`[data-utenteId="${userId}"]`);
    let btnApriModalEliminazioneSingoloUtente = document.querySelector(`.btnApriModalEliminazione[data-utenteId="${userId}"]`);
    
    if(btn.classList.contains("fa-floppy-disk")) {
        let nomeUtenteSelezionato = document.querySelector(`.nome[data-utenteId="${userId}"]`);
        let cognomeUtenteSelezionato= document.querySelector(`.cognome[data-utenteId="${userId}"]`);
        let dataUtenteSelezionato = document.querySelector(`.data[data-utenteId="${userId}"]`);
        let emailUtenteSelezionato = document.querySelector(`.email[data-utenteId="${userId}"]`);
        let passwordUtenteSelezionato = document.querySelector(`.password[data-utenteId="${userId}"]`);
        let ruoloUtenteSelezionato = document.querySelector(`.ruolo[data-utenteId="${userId}"]`);
        
        
        
        const oggettoUtenteModificato = new UtentePUT (
            Number(userId),
            nomeUtenteSelezionato.textContent,
            cognomeUtenteSelezionato.textContent,
            dataUtenteSelezionato.textContent,
            emailUtenteSelezionato.textContent,
            passwordUtenteSelezionato.textContent,
            ruoloUtenteSelezionato.textContent,
        )
        
        modificaUtente(oggettoUtenteModificato);
        
        btn.classList.remove("fa-floppy-disk");
        btn.classList.add("fa-pen");
        
        [...campiForm].forEach(campo =>{
            campo.style.color = !isEditable ? "blue" : "black";
            campo.removeAttribute('contenteditable');
        })
        
        btn.style.color = "white";
        btnApriModalEliminazioneSingoloUtente.style.color = "white";
        
        
           
    } else {
        
        campiForm.forEach(campo => {
            
            campo.setAttribute("contenteditable", !isEditable);
            campo.style.color = !isEditable ? "blue" : "black";
            
            btnApriModalEliminazioneSingoloUtente.style.color = "white";
        });
        
        btn.classList.toggle("fa-floppy-disk", !isEditable);
        btn.classList.toggle("fa-pen", isEditable);
        btn.style.color = "white";
    }
    
}

function confermaEliminazione() {
    fetch(`http://localhost:8080/api/utenti/${utenteSelezionato}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then(() => location.reload())
    .catch(error => console.error("Error deleting user:", error));
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

class UtentePUT {
    constructor(id, nome, cognome, data, email, password, ruolo) {
        this.utente_id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.data = data;
        this.email = email;
        this.password = password;
        this.ruolo = ruolo;
    }
}

const URL = "http://localhost:8080/api/utenti";
function inserisciNuovoUtente() {
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


bottoneNuovoUtente.addEventListener("click", inserisciNuovoUtente);


function modificaUtente(oggettoUtenteModificato) {
    
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
                body: JSON.stringify(oggettoUtenteModificato),
                
            })
        }
        
        // )};

