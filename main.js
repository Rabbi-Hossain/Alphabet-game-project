
function ContinuGame(){
    const alphabet = alphabetANumbers()
    console.log(alphabet)

    const currentVlaue = document.getElementById('current-vlaue')
    currentVlaue.innerText = alphabet

    setBgColore(alphabet)

}

document.addEventListener('keyup',handlekeboardonPress)

function handlekeboardonPress(event){
    const playerPressed = event.key

    if(playerPressed === 'Escape'){
        gameOver()
    }
    console.log('player pressd', event.key)

    const currentAlphabetElement = document.getElementById('current-vlaue')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase()
    console.log(playerPressed, expectedAlphabet)

    if(playerPressed === expectedAlphabet){
        const currentScore = elementTextId('current-scores')
        const updateValue = currentScore + 1
        setElementByTextId('current-scores', updateValue)
        console.log(updateValue)

        console.log('you get a point')
        removeBgColore(expectedAlphabet)
        ContinuGame()


    }else{
        console.log('you missed. you lost a life')

        const lifeScore = elementTextId('life-score')
        const updateLife = lifeScore - 1
        setElementByTextId('life-score', updateLife)

        if(updateLife === 0){
            gameOver()
        }

        
    }
}

function play(){
    hidenElement('home')
    hidenElement('final-score')
    showElement('play-ground')

    setElementByTextId('life-score', 5)
    setElementByTextId('current-scores', 0)
    ContinuGame()
}

function gameOver(){
    hidenElement('play-ground')
    showElement('final-score')

    const lastGame = elementTextId('current-scores')
    setElementByTextId('last-game', lastGame)

    const currentAlphabet = singleTextById('current-vlaue')
    removeBgColore(currentAlphabet)
    // setElementByTextId('')

}