let arrayEventi = [];
function caricaEvento(){
    fetch("http://localhost:8080/api/eventi/tuttiGliEventi")
    .then(data =>{
        return data.json();
    }).then(eventi =>{
        arrayEventi = eventi;
        caricaCategorie();
    })
}


let arrayCategorieEventi = [];
function caricaCategorie(){
    fetch("http://localhost:8080/api/categoria/tutteCategorie")
    .then(data=>{
        return data.json();
    }).then(categorie=>{
        arrayCategorieEventi = categorie;
        creaSwiper();
    })
}


function creaSwiper() {

    let arrayEventiHomepage = [];
    arrayEventiHomepage.push(arrayEventi[2-1]);
    arrayEventiHomepage.push(arrayEventi[5-1]);
    arrayEventiHomepage.push(arrayEventi[10-1]);
    arrayEventiHomepage.push(arrayEventi[8-1]);
    arrayEventiHomepage.push(arrayEventi[19-1]);
    arrayEventiHomepage.push(arrayEventi[16-1]);
    arrayEventiHomepage.push(arrayEventi[21-1]);
    arrayEventiHomepage.push(arrayEventi[27-1]);
    arrayEventiHomepage.push(arrayEventi[30-1]);
    arrayEventiHomepage.push(arrayEventi[40-1]);

        let contenitoreSwipers = document.querySelector(".swiper-container");

        let swiper = document.createElement('div');
        swiper.classList.add('swiper', 'swiper-categorie');
        contenitoreSwipers.appendChild(swiper);

        let swiperWrapper = document.createElement('div');
        swiperWrapper.classList.add('swiper-wrapper');
        swiper.appendChild(swiperWrapper);

        let swiperPagination = document.createElement('div');
        swiperPagination.classList.add('swiper-pagination');
        swiper.appendChild(swiperPagination);


        arrayEventiHomepage.forEach(evento => {

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

    var swiperInitCategorie = new Swiper(".swiper-categorie", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
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
        btn.addEventListener('click', function(){aggiungiAlCarrello(btn.getAttribute('data-id-evento'));setTimeout(function(){
            location.href = "evento.html";
        }, 100)});
    });
}

caricaEvento();