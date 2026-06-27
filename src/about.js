import cafeImg from "./img/pexels-bong-235371727-12176271.jpg";

const renderAbout = function() {
    const container = document.getElementById("container");
    container.classList.remove("container");

    const contentDiv = document.querySelector("#content");


    const h2 = document.createElement("h2");
    h2.classList.add("about-title", "about-content");
    h2.textContent = "About us";
    contentDiv.appendChild(h2);

    const para = document.createElement("p");
    para.classList.add("about-para", "about-content");
    para.textContent = "Visit us for a specialty coffee and a little treat";
    contentDiv.appendChild(para);

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container", "about-content")
    contentDiv.appendChild(aboutContainer);

        const aboutImg = document.createElement("img");
        aboutImg.classList.add("about-img", "about-content");
        aboutImg.src = cafeImg;
        aboutImg.alt = "A photo of a coffee cup";
        aboutContainer.appendChild(aboutImg);
    

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info", "about-content")
    aboutContainer.appendChild(infoDiv);

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-us", "about-content")
    infoDiv.appendChild(contactDiv);

    const contactTitle = document.createElement("h3");
    contactTitle.classList.add("about-content")
    contactTitle.textContent = "Contact us";
    contactDiv.appendChild(contactTitle);

    const number = document.createElement("p");
    number.classList.add("number", "about-content")
    number.textContent = "+435643234";
    contactDiv.appendChild(number);

    const email = document.createElement("p");
    email.textContent = "contact@slowcoffeeclub.com";
    email.classList.add("email", "about-content")
    contactDiv.appendChild(email);

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("address", "about-content")
    infoDiv.appendChild(addressDiv);


    const addressTitle = document.createElement("h3");
    addressTitle.classList.add("about-content")
    addressTitle.textContent = "Our address";
    addressDiv.appendChild(addressTitle);

    const address = document.createElement("p");
    address.innerHTML = "1892 Wayback Lane<br>10005<br>NY";
    address.classList.add("address", "about-content")
    addressDiv.appendChild(address);
}

export { renderAbout };