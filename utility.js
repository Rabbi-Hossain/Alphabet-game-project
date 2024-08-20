function hidenElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}


function setBgColore(elementId){
    const bgColor = document.getElementById(elementId)
    bgColor.classList.add('bg-orange-400')
}
function removeBgColore(elementId){
    const removebgColor = document.getElementById(elementId)
    removebgColor.classList.remove('bg-orange-400')
}

// function elementTextId(elementId){
//     const element = document.getElementById(elementId)
//     const elementText = element.innerText;
//     const value = parseInt(elementText)
//     console.log(elementText)
//     return value
// }

// function setElementByTextId(elementId, text){
//     const element = document.getElementById(elementId)
//     element.innerText = text
// }

function elementTextId(elementId){
    const element = document.getElementById(elementId)
    const elementText = element.innerText;
    const value = parseInt(elementText)
    console.log(elementText)
    return value
}

function setElementByTextId(elementId, text){
    const element = document.getElementById(elementId)
    element.innerText = text
}

function singleTextById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text
}

function alphabetANumbers(){
    const alphabetStrings = "abcdefghijklmnopqrstuvwxyz"
    const alphabetNumbers = alphabetStrings.split('')

    const randomNumbers = Math.random()*25
    const index = Math.round(randomNumbers)
    const alphabet = alphabetNumbers[index]
    console.log(alphabet, index)
    return alphabet
}
