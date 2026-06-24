import "./styles.css";
import { renderHomepage } from "./homepage.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

renderHomepage();


const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");


function clearThePage() {
    const homeContent = document.querySelectorAll(".home-content");
    const menuContent = document.querySelectorAll(".menu-content");
    const aboutContent = document.querySelectorAll(".about-content");

    for (let item of homeContent) {
        item.remove();
    }
    for (let item of menuContent) {
        item.remove()
    }
    for (let item of aboutContent) {
        item.remove()
    }
}

menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.add("btn-active");
    homeBtn.classList.remove("btn-active");
    aboutBtn.classList.remove("btn-active");
    clearThePage();
    renderMenu();
})

homeBtn.addEventListener("click", (e) => {
    homeBtn.classList.add("btn-active");
    menuBtn.classList.remove("btn-active");
    aboutBtn.classList.remove("btn-active");
    clearThePage();
    renderHomepage();
})


aboutBtn.addEventListener("click", (e) => {
    menuBtn.classList.remove("btn-active");
    homeBtn.classList.remove("btn-active");
    aboutBtn.classList.add("btn-active");
    clearThePage();
    renderAbout();
})