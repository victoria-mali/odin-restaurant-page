const renderMenu = function() {
    const contentDiv = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.classList.add("menu-content");
    h1.textContent = "Menu";
    contentDiv.appendChild(h1);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container", "menu-content");
    contentDiv.appendChild(menuContainer);


    const coffeeSection = document.createElement("div");
    coffeeSection.classList.add("menu-section", "menu-content");
    menuContainer.appendChild(coffeeSection);

    const coffeeSectionTitle = document.createElement("h2");
    coffeeSectionTitle.classList.add("menu-content");
    coffeeSectionTitle.textContent = "Coffee";
    coffeeSection.appendChild(coffeeSectionTitle);


    class MenuItem {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    function createNewItem(name, price, section) {
        let newItem = new MenuItem(name, price);
        addMenuItem(name, price, section)
    }

    function addMenuItem(name, price, section) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item", "menu-content");
        section.appendChild(menuItem);

        const itemDiv = document.createElement("p");
        itemDiv.classList.add("item", "menu-content");
        itemDiv.textContent = name;
        menuItem.appendChild(itemDiv);
        
        const priceDiv = document.createElement("p");
        priceDiv.classList.add("price", "menu-content");
        priceDiv.textContent = price;
        menuItem.appendChild(priceDiv);
    }

  createNewItem("Espresso", "€ 2,00", coffeeSection);
  createNewItem("Americano", "€ 2,00", coffeeSection);
  createNewItem("Capuccino", "€ 3,00", coffeeSection);
  createNewItem("Latte", "€ 3,50", coffeeSection);
  createNewItem("Filter", "€ 4,00", coffeeSection);
  createNewItem("Batch brew", "€ 3,00", coffeeSection);

}

export { renderMenu };