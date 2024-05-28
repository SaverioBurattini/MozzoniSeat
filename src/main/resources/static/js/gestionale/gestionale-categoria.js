let tabelle = document.querySelector(".table_component");
let bodyTabella = document.querySelector("#bodyTabella");
let errore = document.querySelector(".errore");

let nome = document.getElementById("nome");

let bottoneNuovoUtente = document.querySelector(".btn-utentePubblica");

let bottoneModificaUtente = document.querySelector(".bottoneModifica");

let bottoneConfermaEliminazione = document.getElementById('bottoneConfermaEliminazione')
let spanUtenteDaEliminare = document.getElementById("spanUtenteDaEliminare");

let utenteSelezionato = "";
let arrayCategorie = [];

async function getAllCategorie() {
    try {
        const response = await fetch("http://localhost:8080/api/categoria/tutteCategorie");
        const categorie = await response.json();
        arrayCategorie = categorie;
        console.log(arrayCategorie);
        tutteLeCategorie();
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}


function tutteLeCategorie() {
    let fragment = document.createDocumentFragment();
    arrayCategorie.forEach((categoria) => {
        let categoriaRecord = document.createElement("tr");
        let inserisciInTabella = `
        <td class="idUtente">${categoria.id}</td>
        <td class="nome" data-utenteId="${categoria.id}" >${categoria.nome}</td>
        <td>
        <button class="bottoneModifica fa-solid fa-pen btn btn-primary" data-utenteId="${categoria.id}"></button>
        <button data-bs-toggle="modal" data-bs-target="#modalConfermaEliminazione" class="btnApriModalEliminazione fa-solid fa-trash btn btn-danger" data-utenteId="${categoria.id}"></button>  
        </td>
        `;
        
        categoriaRecord.innerHTML = inserisciInTabella;
        fragment.appendChild(categoriaRecord);
    });
    
    bodyTabella.appendChild(fragment);
    
    document.querySelectorAll(".bottoneModifica").forEach(btn => {
        btn.addEventListener("click", () => toggleEdit(btn));
    });
    
    document.querySelectorAll(".btnApriModalEliminazione").forEach(btn => {
        btn.addEventListener("click", () => {
            let categoria = arrayCategorie.find(categoria => categoria.id == btn.getAttribute("data-utenteId"));
            if (categoria) {
                spanUtenteDaEliminare.textContent = categoria.nome;
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

        
        const oggettoCategoriaModificato = new categoriaPUT (
            Number(userId),
            nomeUtenteSelezionato.textContent
        )
        
        modificaUtente(oggettoCategoriaModificato);
        
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
    fetch(`http://localhost:8080/api/categoria/${utenteSelezionato}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then(() => location.reload())
    .catch(error => console.error("Error deleting user:", error));
}

bottoneConfermaEliminazione.addEventListener("click", confermaEliminazione);

class Categoria {
    constructor(nome) {
        this.nome = nome;

    }
}

class categoriaPUT {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;

    }
}

const URL = "http://localhost:8080/api/categoria";
function inserisciNuovoUtente() {
    event.preventDefault();
    
    if (nome.value.trim() == "") {
        errore.innerHTML = "Non hai inserito tutti i campi";
        
    } else {
        const CategoriaCreata = new Categoria(
        nome.value,
    );
    
    
    
    
    
    fetch("http://localhost:8080/api/categoria", {
        method: "POST",
        mode : "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(CategoriaCreata),
        
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
            
            fetch(`http://localhost:8080/api/categoria`, {
                method: "PUT",
                mode : "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(oggettoUtenteModificato),
                
            })
        }
        
        // )};


getAllCategorie();