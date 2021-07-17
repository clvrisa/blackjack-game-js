let getRandomCard = (randomNumber) => {
    randomNumber = Math.floor( Math.random() * 13 + 1)
    if(randomNumber === 1)
        return 11
    else if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13)
        return 10
    return randomNumber
}

let cards = []
let blackjack = false
let alive = false
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let startGame = () => {
    alive = true
    let first = getRandomCard()
    let second = getRandomCard()
    cards = [first, second]
    sum = first + second
    renderGame()
}

let renderGame = () => {
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += `${cards[i]} `
    }
    if(sum <= 20)
    {
        message = "Want to draw another card?"
    }
    else if(sum === 21){
        message = "WOO! YOU WON! BLACKJACK!"
        blackjack = true
    }
    else {
        message = "Sorry, you lost!"
        alive = false
    }
    messageEl.textContent = message
    sumEl.textContent = `Sum: ${sum}`
}

let newCard = () => {
    if(alive === true && blackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
} 
