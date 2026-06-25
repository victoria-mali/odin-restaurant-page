const renderAbout = function() {
    const container = document.getElementById("container");
    container.classList.remove("container");

    const contentDiv = document.querySelector("#content");


    const h1 = document.createElement("h1");
    h1.classList.add("about-title", "about-content");
    h1.textContent = "About us";
    contentDiv.appendChild(h1);

}

export { renderAbout };