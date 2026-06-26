import "./styles.css";
import { renderHomepage } from "./homepage.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";


const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
const logoLight = document.querySelector(".logo-light");
const logoDark = document.querySelector(".logo-dark");


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
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    renderMenu();
})

homeBtn.addEventListener("click", (e) => {
    homeBtn.classList.add("btn-active");
    menuBtn.classList.remove("btn-active", "btn-tab-dark");
    aboutBtn.classList.remove("btn-active", "btn-tab-dark");
    clearThePage();
    logoLight.style.display = "block";
    logoDark.style.display = "none";
    renderHomepage();

    const homeMenuBtn = document.querySelector(".home-menu-btn");

    homeMenuBtn.addEventListener("click", (e) => {
    menuBtn.click();
})
})


aboutBtn.addEventListener("click", (e) => {
    menuBtn.classList.remove("btn-active");
    homeBtn.classList.remove("btn-active");
    aboutBtn.classList.add("btn-active");
    homeBtn.classList.add("btn-tab-dark");
    menuBtn.classList.add("btn-tab-dark");
    clearThePage();
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    renderAbout();
})

logoLight.addEventListener("click", (e) => {
    homeBtn.click();
})
logoDark.addEventListener("click", (e) => {
    homeBtn.click();
})

homeBtn.click();

