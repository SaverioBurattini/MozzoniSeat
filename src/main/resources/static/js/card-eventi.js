const URL = "http://localhost:8080";
const ENDPOINT_GET_ALL_EVENTS = `${URL}/api/eventi/tuttiGliEventi`;
const ENDPOINT_GET_ALL_CATEGORIES = `${URL}/api/categoria`;

let arrayEventi = [];
function caricaEvento(){
    fetch(`${ENDPOINT_GET_ALL_EVENTS}`)
    .then(data =>{
        return data.json();
    }).then(eventi =>{
        arrayEventi = eventi;
        caricaCategorie();
    })
}


let arrayCategorieEventi = [];
function caricaCategorie(){
    fetch(`${ENDPOINT_GET_ALL_CATEGORIES}`)
    .then(data=>{
        return data.json();
    }).then(categorie=>{
        arrayCategorieEventi = categorie;
        creaSwiper();
    })
}


function creaSwiper() {

    arrayCategorieEventi.forEach(categoria => {
        let contenitoreSwipers = document.querySelector(".swiper-container");
        contenitoreSwipers.innerHTML += `<a id="${categoria.nome.split(' ')[0]}"><h1 class='titolo-categoria'>${categoria.nome}</h1></a>`; // anchor element di riferimento spaziale nella pagina - .split('' )[0] per prendere solo la prima parola del nome della categoria

        let swiper = document.createElement('div');
        swiper.classList.add('swiper', 'swiper-categorie');
        contenitoreSwipers.appendChild(swiper);

        let swiperWrapper = document.createElement('div');
        swiperWrapper.classList.add('swiper-wrapper');
        swiper.appendChild(swiperWrapper);

        let swiperPagination = document.createElement('div');
        swiperPagination.classList.add('swiper-pagination');
        swiper.appendChild(swiperPagination);

        arrayEventi.filter(evento => evento.categoria.id === categoria.id)
        .forEach(evento => {

            let swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');

            let cardEvento = document.createElement('div');
            cardEvento.classList.add('swiper-slide-evento');
            cardEvento.innerHTML = `
                <a href="http://localhost:8080/api/eventi/${evento.id}">
                    <img src="./img/posters/${evento.locandina}" alt=''>
                </a>
                <div class="swiper-slide-evento-infocontainer">
                    <h4>${evento.nome}</h4>
                    <p class="slide-event-venue"><a href="https://www.google.it/maps/search/${evento.localita}" target="_blank">${evento.localita}</a></p>
                    <p class="slide-event-date">${evento.data.slice(0, -3).replaceAll('-','/')}</p>
                    <button class="btn btn-add-to-cart" data-id-evento="${evento.id}">Vai all'evento</button>
                </div>
            `;
            /* .slice(0, -3) rimuove gli ultimi 3 caratteri dalla data, ovvero i secondi nell'orario (e.g., ':00') */
            /* .replaceAll('-','/') sostituisce i trattini con degli slash */

            swiperSlide.style.setProperty('--background-image', `url('../img/posters/${evento.locandina}')`);

            swiperSlide.appendChild(cardEvento);
            swiperWrapper.appendChild(swiperSlide);
        });
        aggiungiEventListenerBtnEventi();
    });

    var swiperInitCategorie = new Swiper(".swiper-categorie", {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 20
            },
            460: {
                slidesPerView: 1.5,
                spaceBetween: 10
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            882: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1100: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1500: {
                slidesPerView: 4.5,
                spaceBetween: 20
            }
        },
    });
}

function aggiungiEventListenerBtnEventi() {
    let allbtnaddtocart = document.querySelectorAll('.btn-add-to-cart');

    [...allbtnaddtocart].forEach(btn => {
        btn.addEventListener('click', function(){aggiungiAlCarrello(btn.getAttribute('data-id-evento'))});
    });
}

caricaEvento();