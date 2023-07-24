import odin from "./odin.svg"

export default function home() {
    const home = document.createElement("div")
    const homeText = document.createElement("h1")
    const name = document.createElement("h1")
    const container = document.createElement("div")
    const logo = document.createElement("img")

    homeText.textContent = "The Best Restaurant In The Whole Hawzen To Eat And Hangout"
    homeText.classList.add('home-text')
    
    name.textContent = "ODIN Restaurant"
    name.classList.add("name")
    logo.src = odin
    logo.classList.add("logo")
    
    container.appendChild(logo)
    container.appendChild(name)

    container.classList.add("container")
    home.classList.add("home")

   
    home.appendChild(container)
    home.appendChild(homeText)
    return home
    
}