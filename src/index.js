import './style.css'
import home from "./home.js"
import aboutUs from "./about.js"
import menu from "./menu.js"
import odin from "./odin.svg"



const content = document.querySelector("#content")
const homeBtn = document.createElement("button")
const aboutBtn = document.createElement("button")
const menuBtn = document.createElement("button")
const orderBtn = document.createElement("button")
const nav = document.createElement("div")
const logo = document.createElement("img")
const name = document.createElement("h1")
const container = document.createElement("div")

homeBtn.classList.add("btn")
aboutBtn.classList.add("btn")
menuBtn.classList.add("btn")
nav.classList.add("nav")

name.textContent = "ODIN Restaurant"
name.classList.add("name")
logo.src = odin
logo.classList.add("logo")
homeBtn.textContent = "Home"
menuBtn.textContent = "Menu"
aboutBtn.textContent = "About Us"
orderBtn.textContent = "Delivery"
orderBtn.classList.add("order")
const buttons = document.querySelectorAll('.btn')
nav.addEventListener("click", (event)=>{
    nav.childNodes.forEach(btn => {
        btn.classList.remove("focus")
   })

    switch(event.target.textContent){
        case "Home":
            content.removeChild(content.lastChild)
            content.appendChild(home())
            event.target.classList.add("focus")
            break
        case "About Us":
            content.removeChild(content.lastChild)
            content.appendChild(aboutUs())
            event.target.classList.add("focus")
            break;
        case "Menu":
            content.removeChild(content.lastChild)
            content.appendChild(menu())
            event.target.classList.add("focus")
            break
        default:
            break
    }
})

function removeFocus(event){
    event.target.childNodes.forEach(btn => btn.classList.remove("focus"))
}

document.addEventListener("DOMContentLoaded", ()=>{
    content.appendChild(home())
})

container.appendChild(logo)
container.appendChild(name)
container.classList.add("container")
nav.appendChild(container)
nav.appendChild(homeBtn)
nav.appendChild(menuBtn)
nav.appendChild(aboutBtn)
nav.appendChild(orderBtn)
content.appendChild(nav)

