

export default function home() {
    const home = document.createElement("div")
    const homeText = document.createElement("h1")
    const motto = document.createElement("p")
    const description = document.createElement("p")

    
    motto.textContent = "Come! Sit! Relax & Eat!"
    motto.classList.add("motto")
    homeText.textContent = "The Best Restaurant In The Whole Hawzen To Eat And Hangout"
    homeText.classList.add('home-text')
    home.classList.add("home")
    // description.textContent = ""

    // home.appendChild(container)
    home.appendChild(motto)
    home.appendChild(homeText)

    return home
    
}