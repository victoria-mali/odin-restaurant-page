const renderMenu = function() {
    const contentDiv = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.classList.add("menu-content");
    h1.textContent = "Menu";
    contentDiv.appendChild(h1);
}

export { renderMenu }