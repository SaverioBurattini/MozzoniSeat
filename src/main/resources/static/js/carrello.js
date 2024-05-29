let eventoSelezionato = {};
let bigliettiIntero = 0;
let bigliettiRidotto = 0; 

function aggiungiAlCarrello(eventoId){
    fetch(`http://localhost:8080/api/eventi/${eventoId}`)
    .then(data =>{
        return data.json();
    }).then(evento =>{
        console.log(evento);
        eventoSelezionato = evento;
        localStorage.setItem('eventoSelezionato',JSON.stringify(eventoSelezionato));
    })
}

localStorage.getItem(('eventoSelezionato'))? eventoSelezionato = JSON.parse(localStorage.getItem('eventoSelezionato')) : eventoSelezionato = {};
localStorage.getItem(('bigliettiIntero'))? bigliettiIntero = localStorage.getItem('bigliettiIntero') : bigliettiIntero = 0;
localStorage.getItem(('bigliettiRidotto'))? bigliettiRidotto = localStorage.getItem('bigliettiRidotto') : bigliettiRidotto = 0;