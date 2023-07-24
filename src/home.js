export default function home() {
    const homeText = document.createElement("h1")

    homeText.textContent = "The Best Restaurant In The Whole Town Of Hawzen To Eat And Hangout"
    homeText.classList.add('home')
    
    return homeText
    
}