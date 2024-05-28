let tabelle = document.querySelector(".table_component");
let bodyTabella = document.querySelector("#bodyTabella");
let errore = document.querySelector(".errore");

let nome = document.getElementById("nome");
let locandina = document.getElementById("locandina");
let descrizione = document.getElementById("descrizione");
let data = document.getElementById("data");
let localita = document.getElementById("localita");
let coordinate = document.getElementById("coordinate");
let prezzoIntero = document.getElementById("prezzoIntero");
let prezzoRidotto= document.getElementById("prezzoRidotto");
let categoria = document.getElementById("categoriaID");
let caricaProdotti = document.getElementById("caricaProdotti");
let link = document.getElementsByClassName("link");

let bottoneNuovoEvento = document.querySelector(".btn-eventoPubblica");

let bottoneModificaEvento = document.querySelector(".bottoneModifica");

let bottoneConfermaEliminazione = document.getElementById('bottoneConfermaEliminazione')
let spanEventoDaEliminare = document.getElementById("spanEventoDaEliminare");

let eventoSelezionato = "";
let arrayEventi = [];

async function getAllEventi() {
    try {
        const response = await fetch("http://localhost:8080/api/eventi/tuttiGliEventi");
        const eventi = await response.json();
        arrayEventi = eventi;
        console.log(arrayEventi);
        tuttiGliEventi();
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

getAllEventi();

function tuttiGliEventi() {
    let fragment = document.createDocumentFragment();

    arrayEventi.forEach((evento) => {
        let eventoRecord = document.createElement("tr");
        let inserisciInTabella = `
            <td class="idEvento">${evento.id}</td>
            <td class="nome" data-eventoId="${evento.id}" >${evento.nome}</td>
            <td class="locandina" data-eventoId="${evento.id}">${evento.locandina}</td>
            <td class="descrizione" data-eventoId="${evento.id}">${evento.descrizione}</td>
            <td class="data" data-eventoId="${evento.id}">${evento.data}</td>
            <td type="file" class="localita" data-eventoId="${evento.id}">${evento.localita}</td>
            <td class="coordinate" data-eventoId="${evento.id}">${evento.coordinate}</td>
            <td class="prezzoIntero" data-eventoId="${evento.id}">${evento.prezzoIntero}</td>
            <td class="prezzoRidotto" data-eventoId="${evento.id}">${evento.prezzoRidotto}</td>
            <td class="categoria" data-eventoId="${evento.id}">${evento.categoria.id}</td>
            <td>
                <button class="bottoneModifica fa-solid fa-pen btn btn-primary" data-eventoId="${evento.id}"></button>
                <button data-bs-toggle="modal" data-bs-target="#modalConfermaEliminazione" class="btnApriModalEliminazione fa-solid fa-trash btn btn-danger" data-eventoId="${evento.id}"></button>  
            </td>
        `;

        eventoRecord.innerHTML = inserisciInTabella;
        fragment.appendChild(eventoRecord);
    });

    bodyTabella.appendChild(fragment);

    document.querySelectorAll(".bottoneModifica").forEach(btn => {
        btn.addEventListener("click", () => toggleEdit(btn));
    });

    document.querySelectorAll(".btnApriModalEliminazione").forEach(btn => {
        btn.addEventListener("click", () => {
            let evento = arrayEventi.find(evento => evento.id == btn.getAttribute("data-eventoId"));
            if (evento) {
                spanEventoDaEliminare.textContent = evento.nome;
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
    let locandinaEventoSelezionato = document.querySelector(`.locandina[data-eventoId="${eventId}"]`);
    let descrizioneEventoSelezionato = document.querySelector(`.descrizione[data-eventoId="${eventId}"]`);
    let dataEventoSelezionato = document.querySelector(`.data[data-eventoId="${eventId}"]`);
    let localitaEventoSelezionato = document.querySelector(`.localita[data-eventoId="${eventId}"]`);
    let coordinateEventoSelezionato = document.querySelector(`.coordinate[data-eventoId="${eventId}"]`);
    let prezzointeroEventoSelezionato = document.querySelector(`.prezzoIntero[data-eventoId="${eventId}"]`);
    let prezzoRidottoEventoSelezionato = document.querySelector(`.prezzoRidotto[data-eventoId="${eventId}"]`);
    let idCategoriaEventoSelezionato = document.querySelector(`.categoria[data-eventoId="${eventId}"]`);

    let categoria = await fetch(`http://localhost:8080/api/categoria/${idCategoriaEventoSelezionato.textContent}`)
      .then(response=>{
          return response.json();
      }).then(categoria=>{
        return categoria;
      })

    const oggettoEventoModificato = new EventoPUT (
      Number(eventId),
      nomeEventoSelezionato.textContent,
      locandinaEventoSelezionato.textContent,
      descrizioneEventoSelezionato.textContent,
      dataEventoSelezionato.textContent,
      localitaEventoSelezionato.textContent,
      coordinateEventoSelezionato.textContent,
      parseFloat(prezzointeroEventoSelezionato.textContent),
      parseFloat(prezzoRidottoEventoSelezionato.textContent),
      categoria
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
    fetch(`http://localhost:8080/api/eventi/${eventoSelezionato}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then(() => location.reload())
      .catch(error => console.error("Error deleting event:", error));
}

bottoneConfermaEliminazione.addEventListener("click", confermaEliminazione);

class Evento {
    constructor(nome, locandina, descrizione, data, localita, coordinate, prezzoIntero, prezzoRidotto, categoria) {
        this.nome = nome;
        this.locandina = locandina;
        this.descrizione = descrizione;
        this.data = data;
        this.localita = localita;
        this.coordinate = coordinate;
        this.prezzoIntero = prezzoIntero;
        this.prezzoRidotto = prezzoRidotto;
        this.categoria = categoria;
    }
}

class EventoPUT {
  constructor(id, nome, locandina, descrizione, data, localita, coordinate, prezzoIntero, prezzoRidotto, categoria) {
      this.id = id;
      this.nome = nome;
      this.locandina = locandina;
      this.descrizione = descrizione;
      this.data = data;
      this.localita = localita;
      this.coordinate = coordinate;
      this.prezzoIntero = prezzoIntero;
      this.prezzoRidotto = prezzoRidotto;
      this.categoria = categoria;
  }
}

class Categoria {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
  }
}

const URL = "http://localhost:8080/api/eventi";
function InserisciNuovoEvento() {
    event.preventDefault();
    
    if (nome.value.trim() == "" ||
        locandina.value.trim() == "" ||
        descrizione.value.trim() == "" ||
        data.value.trim() == "" ||
        localita.value.trim() == "" ||
        coordinate.value.trim() == "" ||
        prezzoIntero.value.trim() == "" ||
        prezzoRidotto.value.trim() == "" ||
        categoria.value.trim() == "") {
        errore.innerHTML = "Non hai inserito tutti i campi";

    } else {
        const EventoCreato = new Evento(
        nome.value,
        locandina.value,
        descrizione.value,
        data.value,
        localita.value,
        coordinate.value,
        prezzoIntero.value,
        prezzoRidotto.value,
        categoria.value
        );

        fetch("http://localhost:8080/api/categoria/"+ categoria.value)
        .then(response=>{
            return response.json();
        }).then(categoria=>{
            EventoCreato.categoria = categoria;
            console.log(JSON.stringify(EventoCreato));

            fetch("http://localhost:8080/api/eventi", {
                method: "POST",
                mode : "cors",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(EventoCreato),
            
                })
            
        })

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

              fetch(`http://localhost:8080/api/eventi`, {
                method: "PUT",
                mode : "cors",
                      headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(oggettoEventoModificato),
                  
                      })
            }

 
