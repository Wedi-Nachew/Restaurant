import vegiesImg from "./vegies.jpg"
import steakImg from "./steak.jpg"
import beverageImg from "./beverage.jpg"
import dessertImg from "./dessert.jpg"

export default function menu(){
    const menu = document.createElement("div")
    const vegies = document.createElement("div")
    const steak = document.createElement("div")
    const beverage = document.createElement("div")
    const dessert = document.createElement("div")
    const menuHeader = document.createElement("h1")
    const vegiesHeader = document.createElement("h1")
    const steakHeader = document.createElement("h1")
    const beverageHeader = document.createElement("h1")
    const dessertHeader = document.createElement("h1")

    menuHeader.textContent = "Our Menu"

    vegiesHeader.textContent = "Vegies"
    const vegiesList = document.createElement("div")
    const vegiesPic = document.createElement("img")
    vegiesList.textContent = `Legumes ............ $ 8.99  Aamras ...............  $ 4.99 
                              Kebab ................. $ 10.50 Masala ............... $ 3.69
                              Gerfed ...............  $ 11.40 Boembi ............. $ 1.99
                              Gerfed ...............  $ 11.40 Boembi ............. $ 1.99`
    vegiesPic.src = vegiesImg
    vegies.appendChild(vegiesHeader)
    vegies.appendChild(vegiesList)
    vegies.appendChild(vegiesPic)

    steakHeader.textContent = "Steak"
    const steakList = document.createElement("div")
    const steakPic = document.createElement("img")
    steakList.textContent = ` Gerfed ...............  $ 11.40 Boembi ............. $ 1.99
                              Legumes ............ $ 8.99  Aamras ...............  $ 4.99 
                              Kebab ................. $ 10.50 Masala ............... $ 3.69
                              Gerfed ...............  $ 11.40 Boembi ............. $ 1.99`
    steakPic.src = steakImg
    steak.appendChild(steakHeader)
    steak.appendChild(steakList)
    steak.appendChild(steakPic)

    beverageHeader.textContent = "Beverages"
    const beverageList = document.createElement("div")
    const beveragePic = document.createElement("img")
    beverageList.textContent = `Legumes ............ $ 8.99  Aamras ...............  $ 4.99
                                Gerfed ...............  $ 11.40 Boembi ............. $ 1.99 
                                Kebab ................. $ 10.50 Masala ............... $ 3.69
                                Gerfed ...............  $ 11.40 Boembi ............. $ 1.99`
    beveragePic.src = beverageImg
    beverage.appendChild(beverageHeader)
    beverage.appendChild(beveragePic)
    beverage.appendChild(beverageList)

    dessertHeader.textContent = "Dessert"
    const dessertList = document.createElement("div")
    const dessertPic = document.createElement("img")
    dessertList.textContent = `Legumes ............ $ 8.99  Aamras ...............  $ 4.99 
                              Kebab ................. $ 10.50 Masala ............... $ 3.69
                              Gerfed ...............  $ 11.40 Boembi ............. $ 1.99
                              Gerfed ...............  $ 11.40 Boembi ............. $ 1.99`
    dessertPic.src = dessertImg
    dessert.appendChild(dessertHeader)
    dessert.appendChild(dessertPic)
    dessert.appendChild(dessertList)
    

    
    menu.appendChild(menuHeader)
    menu.appendChild(vegies)
    menu.appendChild(steak)
    menu.appendChild(beverage)
    menu.appendChild(dessert)
    menu.classList.add("menu")

    return menu
}