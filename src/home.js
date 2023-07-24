export default function home() {
    const div = document.createElement("div")
    const homeText = document.createElement("h1")
    const name = document.createElement("h1")

    homeText.textContent = "The Best Restaurant In The Whole Hawzen To Eat And Hangout"
    homeText.classList.add('home-text')
    name.textContent = "ODIN Restaurant"
    name.classList.add("name")



    div.classList.add("div")

    div.appendChild(name)
    div.appendChild(homeText)
    return div
    
}