const renderHomepage = function() {
    const contentDiv = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.classList.add("home-content");
    h1.textContent = "Coffee and pastry. Everything that you need."

    const p = document.createElement("p");
    p.classList.add("home-content");
    p.textContent = "Each sip is a journey through time";

    const btn = document.createElement("button");
    btn.classList.add("home-content");
    btn.textContent = "Check our menu";

    contentDiv.appendChild(h1);
    contentDiv.appendChild(p);
    contentDiv.appendChild(btn);
}


export { renderHomepage } ;