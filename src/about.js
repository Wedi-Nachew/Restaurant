import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'


export default function aboutUs(){
    const aboutUs = document.createElement("div")
    const header = document.createElement("h1")
    const firstPara  = document.createElement("p")
    const secondPara = document.createElement("p")
    const thirdPara = document.createElement("p")
    const firstImg = document.createElement("img")
    const secondImg = document.createElement("img")
    const thirdImg = document.createElement("img")
    const imgContainer = document.createElement("div")
    const textWrapper = document.createElement("div")
    

    
    header.textContent = "About Us"

    firstPara.textContent = "Lorem ipsum dolor sit nunc pellentesque pin. Sed sagittis lectus ut euismod. in reprehenderit in voluptate velit esse cillum adipiscing elit, sed do eiusmod tempor incidid consectetur dolor in reprehenderit in voluptate strud exercitation ipsum dolor sit amet, consectetur dolor in reprehenderit ullamco."
    secondPara.textContent = "Lectuss fringilla xoccaecat iste  aliquip ex ea commodo consequat. Duis aute irure pretium fugiat convallis a, Consequat facilisi ultricies integer eu nibh pellentesque. veniam conubia qui leo."
    thirdPara.textContent = "unt dasds reprehenderit  dolor sit amet, consectetur dolor in reprehenderit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  irure pretium fugiat convallis a, Consequat facilisi ultricies integer eu nibh  tempor incidid consectetur dolor in reprehender."
    textWrapper.appendChild(firstPara)
    textWrapper.appendChild(secondPara)
    textWrapper.appendChild(thirdPara)
    
    firstImg.src = img1
    secondImg.src = img2
    thirdImg.src = img3

    imgContainer.classList.add("img-container")
    imgContainer.appendChild(thirdImg)
    imgContainer.appendChild(firstImg)
    imgContainer.appendChild(secondImg)
    aboutUs.classList.add("about")
    aboutUs.appendChild(header)
    aboutUs.appendChild(textWrapper)
    aboutUs.appendChild(imgContainer)

    return aboutUs
}