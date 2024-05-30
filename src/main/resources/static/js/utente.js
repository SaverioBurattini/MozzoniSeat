let nomeUtenteProfilo = document.querySelector('.nome');
// let dataNascitaProfilo = document.querySelector('.dataNascita');
let emailProfilo = document.querySelector('.email');

let utente = JSON.parse(localStorage.getItem('utente'));

nomeUtenteProfilo.textContent = `${utente.nome} ${utente.cognome}`;
// dataNascitaProfilo.textContent = utente.dataNascita;
emailProfilo.textContent = utente.email;

let biglietto=document.querySelector('.div-container-biglietti')

let bigliettiAcquistati=[];



function stampaBiglietto() {
    bigliettiAcquistati.forEach(pagamento => {
        for(i = 0; i < pagamento.bigliettiIntero; i++) {
            biglietto.innerHTML += `
            <div class="biglietto">
                <img src="./img/1.webp" alt="">
                    <div class="dati-biglietto">
                    <h3>${pagamento.evento.nome}</h3>
                    <h3>${pagamento.evento.data.slice(0, -3).replaceAll('-','/')}</h3>
                    <h3>${pagamento.evento.localita}</h3>
                    <h3>${pagamento.evento.prezzoIntero}€</h3>
                    </div>
                <img id="immagine" src="./img/posters/${pagamento.evento.locandina}" alt="">
            </div>`
        }
        for(i = 0; i < pagamento.bigliettiRidotto; i++) {
            biglietto.innerHTML += `
            <div class="biglietto">
                <img src="./img/2.webp" alt="">
                    <div class="dati-biglietto">
                    <h3>${pagamento.evento.nome}</h3>
                    <h3>${pagamento.evento.data.slice(0, -3).replaceAll('-','/')}</h3>
                    <h3>${pagamento.evento.localita}</h3>
                    <h3>${pagamento.evento.prezzoRidotto}€</h3>
                    </div>
                <img id="immagine" src="./img/posters/${pagamento.evento.locandina}" alt="">
            </div>`
        }
    });

}

function fetchBigliettiAcquistati(){
    localStorage.getItem('bigliettiAcquistati') ? bigliettiAcquistati=JSON.parse(localStorage.getItem('bigliettiAcquistati')) : bigliettiAcquistati=[]
    stampaBiglietto()
}
fetchBigliettiAcquistati()