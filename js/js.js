const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const steamBtn = document.querySelector(".steamBtn");
const wikiBtn = document.querySelector(".wikiBtn");
const developerBtn = document.querySelector(".developerBtn");

const steamLinks = ['https://store.steampowered.com/app/1443430/Rogue/', 'https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/', 'https://store.steampowered.com/app/646570/Slay_the_Spire/', 'https://store.steampowered.com/app/588650/Dead_Cells/'];

const wikiLinks = ['https://en.wikipedia.org/wiki/Rogue_(video_game)', 'https://bindingofisaacrebirth.fandom.com/wiki/Binding_of_Isaac:_Rebirth_Wiki', 'https://slay-the-spire.fandom.com/wiki/Slay_the_Spire_Wiki', 'https://deadcells.fandom.com/wiki/Dead_Cells_Wiki'];

const developerLinks = ['https://en.wikipedia.org/wiki/Glenn_Wichman', 'https://en.wikipedia.org/wiki/Edmund_McMillen', 'https://en.wikipedia.org/wiki/Humble_Bundle', 'https://en.wikipedia.org/wiki/Motion_Twin']

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");
const icons = document.querySelectorAll(".img-icon");

const sliderNav = (manual) => {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    })

    slides.forEach((slide) => {
        slide.classList.remove("active")
    })

    contents.forEach((content) => {
        content.classList.remove("active")
    })

    icons.forEach((icon) => {
        icon.classList.remove("active")
    })

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
    icons[manual].classList.add("active");
    steamBtn.setAttribute('href', steamLinks[manual]);
    wikiBtn.setAttribute('href', wikiLinks[manual]);
    developerBtn.setAttribute('href', developerLinks[manual]);
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})