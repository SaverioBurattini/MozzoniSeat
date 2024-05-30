let heroSection = document.querySelector('.hero-section');
let eventThumbnailImg = document.getElementById('eventThumbnailImg');
let nomeEvento = document.getElementById('nomeEvento');
let infoEvento = document.getElementById('infoEvento');
let luogoEvento = document.getElementById('luogoEvento');
let dataEvento = document.getElementById('dataEvento');
let orarioEvento = document.getElementById('orarioEvento');
let iframeMap = document.getElementById('iframeMap');

let btnCompletaAcquisto = document.getElementById('btnCompletaAcquisto');

let btnPlusIntero = document.getElementById('btnPlusIntero');
let btnMinusIntero = document.getElementById('btnMinusIntero');
let btnPlusRidotto = document.getElementById('btnPlusRidotto');
let btnMinusRidotto = document.getElementById('btnMinusRidotto');

let inputQuantitaBigliettiIntero = document.getElementById('inputQuantitaBigliettiIntero');
let inputQuantitaBigliettiRidotto = document.getElementById('inputQuantitaBigliettiRidotto');

let finalizePurchaseFeedback = document.getElementById('finalizePurchaseFeedback');


function redirectToCheckout() {
    if (updateTicketsQuantity()) {
        window.location.href = "checkout.html";
    }
}

function updateTicketsQuantity() {
    let interoValue = parseInt(inputQuantitaBigliettiIntero.value);
    let ridottoValue = parseInt(inputQuantitaBigliettiRidotto.value);

    if (interoValue < 0 || ridottoValue < 0) {
        if (interoValue < 1) {
            inputQuantitaBigliettiIntero.value = 1;
            interoValue = 1;
        }
        if (ridottoValue < 0) {
            inputQuantitaBigliettiRidotto.value = 0;
            ridottoValue = 1;
        }
    }

    if (interoValue > 5 || ridottoValue > 5) {
        finalizePurchaseFeedback.textContent = "Quantità massima biglietti per tipologia: 5";
        return false;
    } else {
        finalizePurchaseFeedback.textContent = "";
        localStorage.setItem('bigliettiIntero', interoValue);
        localStorage.setItem('bigliettiRidotto', ridottoValue);
        return true;
    }
}

function handleInputChange(event) {
    let value = parseInt(event.target.value);
    if (value <= 0) {
        event.target.value = 1;
    } else {
        finalizePurchaseFeedback.textContent = "";
    }
    
    updateTicketsQuantity();
}

function init() {
    let quantitaBigliettiInteriIniziale = 1;
    let quantitaBigliettiRidottiIniziale = 0;

    window.top.document.title = `${eventoSelezionato.nome} | MozzoniSeat`;

    localStorage.setItem('bigliettiIntero', quantitaBigliettiInteriIniziale);
    localStorage.setItem('bigliettiRidotto', quantitaBigliettiRidottiIniziale);
    inputQuantitaBigliettiIntero.value = quantitaBigliettiInteriIniziale;
    inputQuantitaBigliettiRidotto.value = quantitaBigliettiRidottiIniziale;

    heroSection.style.backgroundImage = `url(./img/posters/${eventoSelezionato.locandina})`;
    eventThumbnailImg.src = `./img/posters/${eventoSelezionato.locandina}`;
    nomeEvento.textContent = eventoSelezionato.nome;
    infoEvento.textContent = eventoSelezionato.descrizione;
    luogoEvento.innerHTML = `<a style="color:white;" href="https://www.google.it/maps/search/${eventoSelezionato.localita}" target="_blank">${eventoSelezionato.localita}</a>`;
    dataEvento.textContent = eventoSelezionato.data.split(' ')[0].replaceAll('-','/');
    orarioEvento.textContent = eventoSelezionato.data.slice(0, -3).replaceAll('-','/').split(' ')[1];
    iframeMap.src = `https://api.maptiler.com/maps/streets/?key=B4gRiv5GELTnle0J2Oe1#11.53/42.3363/14.1581`;

    inputQuantitaBigliettiIntero.addEventListener('input', handleInputChange);
    inputQuantitaBigliettiRidotto.addEventListener('input', handleInputChange);
    btnCompletaAcquisto.addEventListener('click', redirectToCheckout);


    btnPlusIntero.addEventListener('click',function(){
        this.previousElementSibling.value++;
        updateTicketsQuantity();
    })
    btnMinusIntero.addEventListener('click',function(){
        this.nextElementSibling.value--;
        updateTicketsQuantity();
    })
    btnPlusRidotto.addEventListener('click',function(){
        this.previousElementSibling.value++;
        updateTicketsQuantity();
    })
    btnMinusRidotto.addEventListener('click',function(){
        this.nextElementSibling.value--;
        updateTicketsQuantity();
    })
}

init();