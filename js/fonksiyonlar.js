import { modlar } from "./veri.js";
const kokEtiket = document.querySelector("#kok-etiket")
function UIgoster (){
    modlar.forEach((deger, index) => {   
        const yeniDiv = document.createElement("div")
        yeniDiv.textContent = deger.tr
        
        const yeniImg = document.createElement ("img")
        yeniImg.src = '../img/' + deger.mod + '.jpg'

        const yeniAudio = document.createElement ("audio")
        yeniImg.src = '../audio/' + deger.mod + '.sound.mp3'
        yeniAudio.loop = true 


        yeniDiv.append(yeniAudio)
        yeniDiv.append(yeniImg)


        kokEtiket.append (yeniDiv)

        yeniDiv.addEventListener ('click', ()=>{
            if ( yeniAudio.paused === true) {
                yeniAudio.play() 
            }
            else {
                yeniAudio.paused()
            }
        } ) 

        
    })
}

export {UIgoster}