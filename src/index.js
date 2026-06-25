import "./styles.css";
import { renderHomepage } from "./homepage.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";


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
    homeBtn.classList.add("btn-tab-dark");
    aboutBtn.classList.add("btn-tab-dark");
    clearThePage();
    renderMenu();
})

homeBtn.addEventListener("click", (e) => {
    homeBtn.classList.add("btn-active");
    menuBtn.classList.remove("btn-active", "btn-tab-dark");
    aboutBtn.classList.remove("btn-active", "btn-tab-dark");
    clearThePage();
    renderHomepage();
})


aboutBtn.addEventListener("click", (e) => {
    menuBtn.classList.remove("btn-active");
    homeBtn.classList.remove("btn-active");
    aboutBtn.classList.add("btn-active");
    homeBtn.classList.add("btn-tab-dark");
    menuBtn.classList.add("btn-tab-dark");
    clearThePage();
    renderAbout();
})

homeBtn.click();