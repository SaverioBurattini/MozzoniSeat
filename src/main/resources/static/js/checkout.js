let cardStatic = document.querySelector(".card");
let quantiCeNeSOno = document.querySelector(".text-secondary");
let divPerIlQuanti = document.querySelector(".row");
let riepilogo = document.querySelector(".riepilogos");
let bottoneElimina = document.querySelector(".eliminazione");
let totaleBiglietti = parseInt(bigliettiRidotto) + parseInt(bigliettiIntero);
let totaleBigliettiInteri = parseInt(bigliettiIntero);
let totaleBigliettiRidotti = parseInt(bigliettiRidotto);
let somma = 0;
let sommaIntero = 0;
let sommaRidotto = 0;
sommaIntero += eventoSelezionato.prezzoIntero;
sommaRidotto += eventoSelezionato.prezzoRidotto;


function controllo(){
    if (!localStorage.getItem('eventoSelezionato') ||
        (localStorage.getItem('bigliettiIntero') == 0 && localStorage.getItem('bigliettiRidotto') == 0)) {
        window.location.href = "index.html" ;
    }
}

controllo();

function creaCardCarrello(){
    let creaQUantita = ` <div class="col-8">
    <h1 class="text-white">Il tuo carrello</h1>
    </div>
    <div class="col-4  d-flex align-items-end justify-content-end">
    <p class="text-secondary">${totaleBiglietti} biglietti</p>
    </div>` 
    
    divPerIlQuanti.innerHTML+= creaQUantita;
    for (let i = 0; i < bigliettiIntero; i++) {
        cardStatic.innerHTML+= `
        <img src="./img/posters/${eventoSelezionato.locandina}" class="card-img-top" alt="...">
        <div class="card-body">
        <div class="quantitaNome">
            <h5 class="card-title">${eventoSelezionato.nome}</h5>
            </div>

                <p class="card-text">${eventoSelezionato.localita}</p>
                <p class="card-text">${eventoSelezionato.data.split(' ')[0].replaceAll('-','/')}, ${eventoSelezionato.data.slice(0, -3).replaceAll('-','/').split(' ')[1]}</p>
            <p class="card-text">Prezzo intero (${eventoSelezionato.prezzoIntero}€)</p>
            <a href="#" class="btn btn-danger rimuoviBigliettoIntero">Elimina</a>
            </div>
        </div>
        `
    }
    
    for (let i = 0; i < bigliettiRidotto; i++) {
        cardStatic.innerHTML+= `
        <img src="./img/posters/${eventoSelezionato.locandina}" class="card-img-top" alt="...">
        <div class="card-body">
        <div class="quantitaNome">
        <h5 class="card-title">${eventoSelezionato.nome}</h5>
        </div>
        <p class="card-text">${eventoSelezionato.localita}, ${eventoSelezionato.coordinate}</p>
        <p class="card-text">${eventoSelezionato.data}</p>
        <p class="card-text">Prezzo ridotto (${eventoSelezionato.prezzoRidotto}€)</p>
        <a href="#"  class="btn btn-danger rimuoviBigliettoRidotto">Elimina</a>
        </div>
        <hr>
        `
    }
    listenerBtnEliminaBiglietti()
    listenerBtnEliminaBigliettiRidotto()
    };

   

creaCardCarrello();

function listenerBtnEliminaBiglietti(){
    let btnEliminaBigliettoIntero = document.querySelectorAll(".rimuoviBigliettoIntero");
    [...btnEliminaBigliettoIntero].forEach(btn => {
        btn.addEventListener("click", rimuoviUnBigliettoIntero)
    });
    function rimuoviUnBigliettoIntero(){
        nuovaQuantita = bigliettiIntero -1;
        localStorage.setItem("bigliettiIntero", nuovaQuantita);
        location.reload();
        
    }
}

function listenerBtnEliminaBigliettiRidotto(){
    let btnEliminaBigliettoRidotto = document.querySelectorAll(".rimuoviBigliettoRidotto");
    [...btnEliminaBigliettoRidotto].forEach(btn => {
        btn.addEventListener("click", rimuoviUnBigliettoRidotto)
    });
    function rimuoviUnBigliettoRidotto(){
        nuovaQuantita = bigliettiRidotto -1;
        localStorage.setItem("bigliettiRidotto", nuovaQuantita);
        location.reload();
        
    }
}



function riepilogoOrdine(){
    let cardTotale = ` <div class="d-flex justify-content-between my-2 provasss">
    <div class="soldi">
    <p>${eventoSelezionato.nome} x ${totaleBigliettiInteri} Intero</p>
    <p> Prezzo Intero: ${sommaIntero * totaleBigliettiInteri}€</p>
    </div>
    <div class="soldiPochi">
    <p>${eventoSelezionato.nome} x ${totaleBigliettiRidotti} Ridotto</p>
    <p> Prezzo Ridotto: ${sommaRidotto * totaleBigliettiRidotti}€</p>
    </div>
      </div>
      <form action="" class="d-flex flex-column">
      </form>
      <div class="d-flex justify-content-between">
        <p>TOTALE (IVA incl.)</p>
        <p>${(sommaIntero * totaleBigliettiInteri) + (sommaRidotto * totaleBigliettiRidotti)}€</p>
      </div>
      <button type="button" class="mb-3 btn-acquista" data-bs-toggle="modal" data-bs-target="#modal-pagamento">
        Compra
      </button>`

      riepilogo.innerHTML += cardTotale;
    }

    riepilogoOrdine();

    let bigliettiAcquistati =[];

    class Pagamento {
        constructor(evento, bigliettiRidotto, bigliettiIntero) {
            this.evento = evento;
            this.bigliettiRidotto = bigliettiRidotto;
            this.bigliettiIntero = bigliettiIntero;
        }
    }
    let bottonePaga = document.getElementById('bottonePaga');
    bottonePaga.addEventListener('click',creaPagamento);
    function creaPagamento() {
    const pagamento = new Pagamento(JSON.parse(localStorage.getItem('eventoSelezionato')), localStorage.getItem('bigliettiRidotto'), localStorage.getItem('bigliettiIntero'))

        bigliettiAcquistati.push(pagamento);
        localStorage.setItem('bigliettiAcquistati',JSON.stringify(bigliettiAcquistati));
    }

    function fetchBigliettiAcquistati(){
        localStorage.getItem('bigliettiAcquistati') ? bigliettiAcquistati=JSON.parse(localStorage.getItem('bigliettiAcquistati')) : bigliettiAcquistati=[]
    }
    
    fetchBigliettiAcquistati()