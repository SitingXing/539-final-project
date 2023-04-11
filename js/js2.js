const movement = document.querySelectorAll(".movement");
const bigTitle = document.querySelector(".bigTitle");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const description = document.querySelectorAll(".descriptionContainer");
const gameDescription = document.querySelector(".gameDescription");

let headerHeight = header.offsetHeight;
let gameDescriptionHeight = gameDescription.offsetHeight;

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

    bigTitle.style.opacity = -scroll / (headerHeight / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 600}px`
})