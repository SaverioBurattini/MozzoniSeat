let header = document.querySelector('header');

header.innerHTML = `
<div class="nav-div-icons logo-group">
    <button id="btn-apri-chiudi-menu-categorie" class="nav-mobile-btn fa-solid fa-bars"></button>
    <a href="./index.html"><img src="./img/logo-intero.png" alt="Logo" class="logo unselectable"></a>
    <a href="./index.html"><img src="./img/logo-ridotto.png" alt="Logo" class="logo-ridotto"></a>
    <nav class="navbar gap-3 d-flex align-items-center nav-left">

    <!-- Searchbar -->
    <div class="searchbar-header input-group ">
        <span class="input-group-text" id="inputGroup-sizing-default"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" class="form-control" aria-label="" aria-describedby="inputGroup-sizing-default" placeholder="Cerca evento">
    </div>
    <!-- Searchbar -->

        <a href="about.html">
            <li class="about-li"><b>Chi siamo</b></li>
        </a>

        <a href="categorie.html#Sport">
            <li>Sport</li>
        </a>
        <a href="categorie.html#Concerti">
            <li>Concerti</li>
        </a>
        <a href="categorie.html#Teatro">
            <li>Teatro</li>
        </a>
    </nav>
</div>
<div class="nav-div-icons nav-div-icons-left">
<div id="headerSalutoNomeUtente"></div>
<div id="headerITuoiBiglietti"></div>
<div class="div-btn-searchbar">
    <button data-bs-toggle="modal" data-bs-target="#mobileSearchbar" class="nav-mobile-btn fa-solid fa-magnifying-glass"></button>
</div>

    <nav class="navbar gap-3 d-flex align-items-center">
        <!-- Button trigger modal -->
        <button type="button" class="btn-modal-accesso-header unselectable" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Registrati
        </button>
    </nav>

    <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="nav-mobile-btn fa-solid fa-user"></button>
</div>
`;

function rimuoviSearchbarHeader() { // Rimuove la searchbar dall'header nelle pagine index e checkout
    if(header.hasAttribute('data-no-searchbar')) {

        let searchbarHeader = document.querySelector('.searchbar-header');
        searchbarHeader.style.display = "none";

        let bottoneSearchHeader = document.querySelector('.div-btn-searchbar');
        bottoneSearchHeader.style.display = "none";

    } else {
        createSearchbarModal();
    }
}
rimuoviSearchbarHeader();





/* -------------------------------------------------------------------------- */
/*                        SIGN IN / SIGN UP MODAL FORMS                       */
/* -------------------------------------------------------------------------- */

let signinupmodal = document.getElementById('sign-in-up-modal');
signinupmodal.innerHTML = `
                <!-- Modal -->
                <div class="modal modal-auth fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="titoloModalAutenticazione">Registrati</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form action="" id="modal-registrazione">
                    <div class="form-group">
                        <label class="nome" for="nome">Nome</label>
                        <input id="nome" type="text" placeholder="Nome">
                    </div>
                    <div class="form-group">
                        <label class="cognome" for="cognome">Cognome</label>
                        <input id="cognome" type="text" placeholder="Cognome">
                    </div>
                    <div class="form-group">
                        <label for="dataNascita">Data di nascita</label>
                        <input id="dataNascita" type="date" placeholder="Inserisci la tua data di nascita">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" type="email" placeholder="Inserisci la tua email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" type="password" placeholder="Scegli una password">
                    </div>
                    <div class="form-group">
                        <label for="confermaPassword">Conferma password</label>
                        <input id="confermaPassword" type="password" placeholder="Ripeti la password">
                    </div>
                    <div class="div-policy">
                        <input type="checkbox" id="checkboxPolicy">
                        <p>Selezionando la casella, confermi di accettare i nostri <a href="">Termini di servizio</a>.</p>
                    </div>

                    <p id="signupFeedback"></p>

                    <div class="div-btn-auth"><button class="btn-registrati btn-auth">Registrati</button></div>
                    <p>Hai già un account MozzoniSeat? <button class="btn btn-dark" onclick="switchAuthModal()">Log in</button></p>
                </form>

                <!-- Modal login -->
                    <form action="" id="modal-login" style="display:none;">
                        <div class="form-group">
                            <label class="email" for="email">Email</label>
                            <input id="emailLogin" type="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label class="password" for="password">Password</label>
                            <input id="passwordLogin" type="password" placeholder="Password">
                        </div>

                        <p id="signinFeedback"></p>

                        <div class="div-btn-auth"><button class="btn-login btn-auth">Log in</button></div>

                        <p>Non hai ancora un account MozzoniSeat? <button class="btn btn-dark" onclick="switchAuthModal()">Registrati</button></p>
                        <p>Non ricordi le credenziali? <a href="">Recupera password</a></p>
                    </form>
            </div>


                
            </div>
            </div>


    </div>
</div>

`;

let modalLogin = document.getElementById('modal-login');
let modalRegistrazione = document.getElementById('modal-registrazione');
let signinFeedback = document.getElementById('signinFeedback');
let signupFeedback = document.getElementById('signupFeedback');
let titoloModalAutenticazione = document.getElementById('titoloModalAutenticazione');

function switchAuthModal() {
    event.preventDefault();

    if(modalLogin.style.display == "none") {
        modalLogin.style.display = "block";
        modalRegistrazione.style.display = "none";

        titoloModalAutenticazione.textContent = "Accedi";

    } else if (modalRegistrazione.style.display == "none") {
        modalRegistrazione.style.display = "block";
        modalLogin.style.display = "none";

        titoloModalAutenticazione.textContent = "Registrati";
    }
    
    signupFeedback.textContent = "";
    signinFeedback.textContent = "";

}



/* -------------------------------------------------------------------------- */
/*                                MOBILE NAVBAR                               */
/* -------------------------------------------------------------------------- */

let mobilenavbar = document.getElementById('mobile-navbar');
mobilenavbar.innerHTML = `
<a href="about.html">
    <b><li>Chi siamo</li></b>
</a>

<hr>

    <a href="categorie.html#Sport" onclick="closeDiv()">
        <li>Sport</li>
    </a>
    <a href="categorie.html#Concerti" onclick="closeDiv()">
        <li>Concerti</li>
    </a>
    <a href="categorie.html#Teatro" onclick="closeDiv()">
        <li>Teatro</li>
    </a>
`;

const btnToggleDivMobileNavbar = document.getElementById('btn-apri-chiudi-menu-categorie');

// Funzione per impedire lo scroll
function preventScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

function openDiv() {
  window.location.replace("#"); // riporta a inizio pagina
  mobilenavbar.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Blocca lo scroll

  btnToggleDivMobileNavbar.style.color = "rgb(24, 24, 24)";
  btnToggleDivMobileNavbar.style.background = "#fff";
  btnToggleDivMobileNavbar.classList.add('fa-xmark');
  btnToggleDivMobileNavbar.addEventListener('click', closeDiv);
  btnToggleDivMobileNavbar.removeEventListener('click', openDiv);

  // Aggiunge gli event listener per impedire lo scroll
  window.addEventListener('scroll', preventScroll, { passive: false });
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
  window.addEventListener('keydown', preventScrollKeys, { passive: false });
}

function closeDiv() {
  mobilenavbar.style.display = 'none';
  document.body.style.overflow = 'auto'; // Ripristina lo scroll
  
  btnToggleDivMobileNavbar.style.color = "var(--text-color)";
  btnToggleDivMobileNavbar.style.background = "transparent";
  btnToggleDivMobileNavbar.classList.remove('fa-xmark');
  btnToggleDivMobileNavbar.addEventListener('click', openDiv);
  btnToggleDivMobileNavbar.removeEventListener('click', closeDiv);

  // Rimuove gli event listener per impedire lo scroll
  window.removeEventListener('scroll', preventScroll, { passive: false });
  window.removeEventListener('wheel', preventScroll, { passive: false });
  window.removeEventListener('touchmove', preventScroll, { passive: false });
  window.removeEventListener('keydown', preventScrollKeys, { passive: false });
}

// Funzione per impedire lo scroll con i tasti freccia
function preventScrollKeys(event) {
  const keys = [32, 37, 38, 39, 40]; // Spazio e frecce
  if (keys.includes(event.keyCode)) {
      preventScroll(event);
  }
}

btnToggleDivMobileNavbar.addEventListener('click', openDiv);








/* -------------------------------------------------------------------------- */
/*                              MODAL SEARCHBAR                               */
/* -------------------------------------------------------------------------- */
function createSearchbarModal() {

    let mobileSearchbar = document.getElementById('search-modal');

mobileSearchbar.innerHTML = `<div class="modal fade" id="mobileSearchbar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">

    <div class="modal-body">
      <form>
      <div class="searchbar-modal input-group">
      
      <span class="input-group-text" id="inputGroup-sizing-default"><i class="fa-solid fa-magnifying-glass"></i></span>
      <input type="text" class="form-control" aria-label="" aria-describedby="inputGroup-sizing-default" placeholder="Cerca un evento">
      </div>
      <div class="d-flex justify-content-end"><button type="button" class="btn mt-1" data-bs-dismiss="modal" aria-label="Close">Chiudi</button></div>
      </form>
</div>
</div>
`;

}