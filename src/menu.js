const renderMenu = function() {
    const container = document.getElementById("container");
    container.classList.remove("container");
    
    const contentDiv = document.querySelector("#content");
    const h2 = document.createElement("h2");
    h2.classList.add("menu-title", "menu-content");
    h2.textContent = "Menu";
    contentDiv.appendChild(h2);

    const para = document.createElement("p");
    para.classList.add("menu-para", "menu-content");
    para.textContent = "Everything that you know and love, and more";
    contentDiv.appendChild(para);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container", "menu-content");
    contentDiv.appendChild(menuContainer);


    function createNewSection(title) {
    const section = document.createElement("div");
    section.classList.add("menu-section", "menu-content");
    menuContainer.appendChild(section);

    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("menu-content");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);
    return section;
    }

    const coffeeSection = createNewSection("Coffee");
    const otherDrinksSection = createNewSection("Other drinks");
    const foodSection = createNewSection("Food");

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
  createNewItem("Tea", "€ 2,50", otherDrinksSection);
  createNewItem("Chai latte", "€ 3,50", otherDrinksSection);
  createNewItem("Matcha latte", "€ 4,00", otherDrinksSection);
  createNewItem("Croissant", "€ 3,00", foodSection);
  createNewItem("Brownie", "€ 3.50", foodSection);
  createNewItem("Cookie", "€ 2,50", foodSection);
  createNewItem("Cinnamon roll", "€ 3,50", foodSection);

}

export { renderMenu };