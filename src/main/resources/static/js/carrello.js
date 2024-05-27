let arrayCarrello = [];

function aggiungiAlCarrello(eventoId){
    fetch(`http://localhost:8080/api/eventi/${eventoId}`)
    .then(data =>{
        return data.json();
    }).then(evento =>{
        console.log(evento);
        arrayCarrello.push(evento);
        aggiornaCarrello();
    })
}

function aggiornaCarrello() {
    localStorage.setItem('carrello',JSON.stringify(arrayCarrello));
}

localStorage.getItem(['carrello'])? arrayCarrello = JSON.parse(localStorage.getItem['carrello']) : arrayCarrello = [];