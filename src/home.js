export default function home() {
    const home = document.createElement("div")
    const homeText = document.createElement("h1")
    const name = document.createElement("h1")
    const container = document.createElement("div")

    homeText.textContent = "The Best Restaurant In The Whole Hawzen To Eat And Hangout"
    homeText.classList.add('home-text')
    
    name.textContent = "ODIN Restaurant"
    name.classList.add("name")
    const logo = new Image()
    logo.src = "./odin.svg"

    container.classList.add("container")
    home.classList.add("home")

    container.appendChild(logo)
    container.appendChild(name)

    home.appendChild(container)
    home.appendChild(homeText)
    return home
    
}