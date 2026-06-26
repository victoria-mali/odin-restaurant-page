const renderAbout = function() {
    const container = document.getElementById("container");
    container.classList.remove("container");

    const contentDiv = document.querySelector("#content");


    const h2 = document.createElement("h1");
    h2.classList.add("about-title", "about-content");
    h2.textContent = "About us";
    contentDiv.appendChild(h2);

}

export { renderAbout };