const renderAbout = function() {
    const contentDiv = document.querySelector("#content");


    const h1 = document.createElement("h1");
    h1.classList.add("about-content");
    h1.textContent = "About";
    contentDiv.appendChild(h1);

}

export { renderAbout };