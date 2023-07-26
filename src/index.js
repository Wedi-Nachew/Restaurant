import './style.css'
import home from "./home.js"
import aboutUs from "./about.js"


const content = document.querySelector("#content")
const homeBtn = document.createElement("button")
const aboutBtn = document.createElement("button")
const menuBtn = document.createElement("button")
const orderBtn = document.createElement("button")
const nav = document.createElement("div")

nav.classList.add("nav")

homeBtn.textContent = "Home"
menuBtn.textContent = "Menu"
aboutBtn.textContent = "About Us"
orderBtn.textContent = "Delivery"
orderBtn.classList.add("order")

nav.addEventListener("click", (event)=>{
    if(event.target.textContent === "Home"){
        content.removeChild(content.lastChild)
        content.appendChild(home())
    }else if(event.target.textContent === "About Us"){
        content.removeChild(content.lastChild)
        content.appendChild(aboutUs())
    }else if(event.target.textContent === "Menu"){
        content.removeChild(content.lastChild)
        content.appendChild(menu())
    }else{
        false
    }
})


document.addEventListener("DOMContentLoaded", ()=>{
    content.appendChild(home())
})

nav.appendChild(homeBtn)
nav.appendChild(menuBtn)
nav.appendChild(aboutBtn)
nav.appendChild(orderBtn)
content.appendChild(nav)

