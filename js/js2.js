const movement = document.querySelectorAll(".movement");
const bigTitle = document.querySelector(".bigTitle");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const description = document.querySelectorAll(".descriptionContainer");
const gameDescription = document.querySelector(".gameDescription");
const characters = document.querySelectorAll(".character");
const characterContainer = document.querySelector(".characteristics");
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

let headerHeight = header.offsetHeight;
let gameDescriptionHeight = gameDescription.offsetHeight;

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

window.addEventListener('scroll', ()=> {
    let scroll = window.pageYOffset;
    let gameDescriptionY = gameDescription.getBoundingClientRect();

    movement.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    description.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight / 2){
            element.style.opacity = 1;
        } else {
            element.style.opacity = 0;
        };
    });

    characters.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 2 / 3){
            element.style.opacity = 1;
        } else {
            element.style.opacity = 0;
        };
    });

    bigTitle.style.opacity = -scroll / (headerHeight / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 600}px`
})

const apiKey = '6d8a9e88b0104ad0bfe2f2f578e4bc7e';
let gameName = ''
if (bigTitle.textContent === 'Binding of Issac:Rebirth') {
    gameName = 'the-binding-of-isaac-rebirth';
} else if (bigTitle.textContent === 'Slay the Spire') {
    gameName = 'slay-the-spire';
} else if (bigTitle.textContent === 'Dead Cells') {
    gameName = 'dead-cells'
}

if (gameName !== ''){
    const url = `https://api.rawg.io/api/games/${gameName}?key=${apiKey}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".rating").innerHTML += ` ${data.rating}`;
        })

    const achievementUrl = `https://api.rawg.io/api/games/${gameName}/achievements?key=${apiKey}`

    fetch(achievementUrl)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".achievements").innerHTML += `<p class="text">Total ${data.count}`;
            const images = data.results.map(result => `<div><img src="${result.image}" alt=${result.name}></div>`);
            document.querySelector(".achievements").innerHTML += `<div class="achieveImages">${images.join("")}</div>`;
        })
}