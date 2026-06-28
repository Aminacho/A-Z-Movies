
const openMenu= document.querySelector('.openMenu')
const closeMenu= document.querySelector('.closeMenu')
const menu = document.querySelector('.menu')
let body = document.querySelector("body")
let hero = document.querySelector(".hero");


let movies = [
  {
    title: "Avatar",
    date: "2025",
    alt: "Avatar movie poster",
    poster: "public/avatar.jpg",
    rating: "⭐⭐⭐⭐",
    description: "A journey through Pandora where nature, conflict, and destiny collide.",
    trailer: "https:www.youtube.com/embed/nb_fFj_0rq8?si=ArkBjYVefr0XCMk3",
  },
  {
    title: "Dune",
    date: "2024",
    alt: "Dune movie poster",
    poster: "public/Dune.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description: "A young leader rises to fulfill a prophecy on a desert world.",
    trailer: "https://www.youtube.com/embed/3_9vCamtuPY?si=dSZllKBmfe5YS4G8",
  },
  {
    title: "Inception",
    date: "2024",
    alt: "Inception movie poster",
    poster: "public/inception.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description: "A mind-bending mission inside dreams where reality becomes uncertain.",
    
    trailer: "https://www.youtube.com/embed/hstBN0Qkqhc?si=1ccOULDjRrUD8Oeo",
  },
  {
    title: "Bring Her Back",
    date: "2025",
    alt: "Gun movie poster",
    poster: "public/bring.webp",
    rating: "⭐⭐⭐⭐⭐",
    description: "A disturbing tale of grief, obsession, and supernatural horror.",
    trailer: "https://www.youtube.com/embed/kBskrYZfhw8?si=Bd-AIutVNx-_4fQw",
  },
  {
    title: "interstellar",
    date: "2026",
    alt: "intersteelar movie poster",
    poster: "public/intersteelar.jpg",
    rating: "⭐⭐⭐⭐",
    description: "Explorers travel beyond the stars to secure humanity's future.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?si=G1hxyDCkPydXF20I",
  },
  {
    title: "Joker",
    date: "2024",
    alt: "Joker movie poster",
    poster: "public/joker.jpg",
    rating: "⭐⭐⭐⭐",
    description: "A troubled man transforms into Gotham's most feared criminal.",
    trailer: "https://www.youtube.com/embed/_OKAwz2MsJs?si=RuztuPGzMZp58ZaG",
  },
  {
    title: "Batman",
    date: "2022",
    alt: "Batman movie poster",
    poster: "public/batman.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description: "A detective vigilante confronts crime and corruption in Gotham.",
    trailer: "https://www.youtube.com/embed/mqqft2x_Aa4?si=_TZSh2EITsxMQ_WU",
  },
];

const containerCards = document.querySelector(".cards");

let images = document.querySelectorAll(".carousel img");
let carousel = document.querySelector(".carousel");

movies.forEach((movie) => {
  let card = `
  <div class="card">
  <img src="${movie.poster}" alt="${movie.alt}">
  <div class="container">
  <h2 class="title">${movie.title}</h2>
  <div class="date">
  <p>${movie.date}</p>
  <span> ${movie.rating}</span>
  </div> 
  <p class="desc">${movie.description}</p>
  </div>
  <button class="play" aria-label="play Trailer">▶</button>
  </div>
  `;
  containerCards.innerHTML += card;
});



openMenu.addEventListener("click",(eo) => {
  openMenu.classList.toggle('hide');
  closeMenu.classList.toggle('hide');
    menu.classList.add("active")

}
)
closeMenu.addEventListener("click",(eo) => {
  openMenu.classList.toggle('hide');
  closeMenu.classList.toggle('hide');

      menu.classList.remove("active")
}
)

  window.addEventListener("load", () => {
    const images = Array.from(carousel.children);

    images.forEach((img) => {
      let clone = img.cloneNode(true);
      carousel.appendChild(clone);
    });

    let totWidth = carousel.scrollWidth / 2;
    carousel.style.setProperty("--scroll-width", `${totWidth}px`);
  });

carousel.addEventListener("click", (e) => {
  if (e.target.matches("img")) {
    hero.style.backgroundImage = `url("${e.target.src}")`;
  }
});

let search = document.querySelector(".searchInput");
let notFound = document.querySelector(".notFound");

search.addEventListener("keyup", (eo) => {
  let userInput = search.value.toLowerCase();

  let found = 0;
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let title = card.querySelector(".title").textContent.toLowerCase();

    if (title.includes(userInput)) {
      card.style.display = "block";
      found = 1;
    } else card.style.display = "none";
  });
  if (found == 0) {
    notFound.style.display = "block";
  } else notFound.style.display = "none";
});


movies.forEach((movie) => {
  let modal = `
  <div class="modalContainer">
   <div class="modalheader">
     <h1> ${movie.title}</h1>
     <div class="close closeModal"> X </div>
</div>
     <iframe
    width="100%"
    height="87%"
    src="${movie.trailer}"
    allowfullscreen>
  </iframe>
  
  </div>
  `;
body.insertAdjacentHTML("beforeend", modal);
});

  let btnPlay = document.querySelectorAll(".play")

const modals = document.querySelectorAll(".modalContainer");

btnPlay.forEach((btn, index) => {

  btn.addEventListener("click", () => {

    modals[index].style.display = "block";

  });

});

let closes = document.querySelectorAll(".closeModal");

closes.forEach((closeBtn, index) => {

  closeBtn.addEventListener("click", () => {
        const trailer = modals[index].querySelector("iframe");
    trailer.src = ""
    modals[index].style.display = "none";

  });

});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modals.forEach((modal) => {
      modal.style.display = "none";
    });
  }
});

