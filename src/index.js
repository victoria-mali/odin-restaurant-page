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
    clearThePage();
    renderMenu();
})

homeBtn.addEventListener("click", (e) => {
    clearThePage();
    renderHomepage();
})


aboutBtn.addEventListener("click", (e) => {
    clearThePage();
    renderAbout();
})