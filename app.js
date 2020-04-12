document.addEventListener('DOMContentLoaded', () => {
    //card options:
    const cardArr = [
        {
            name: 'fries',
            img:'images/fries.png'
        },
        {
            name: 'fries',
            img:'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img:'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img:'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img:'images/pizza.png'
        },
        {
            name: 'pizza',
            img:'images/pizza.png'
        },
        {
            name: 'milkshake',
            img:'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img:'images/milkshake.png'
        }
    ]

    cardArr.sort(() => 0.5 -Math.random())

    const grid = document.querySelector('.grid')
    const displayResult = document.querySelector('#result')
    var cardChosenArr = []
    var cardChosenId = []
    var cardsWon = []

    // Creating a game board
    function createGameBoard(){
        for(let i=0; i < cardArr.length; i++ ){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }




    // check for matches found
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const firstId = cardChosenId[0]
        const secondId = cardChosenId[1]
        if (cardChosenArr[0] === cardChosenArr[1]){
            
            cards[firstId].setAttribute('src','images/white.png')
            
            cards[secondId].setAttribute('src','images/white.png')
            
            cardsWon.push(cardChosenArr)
            
            
        }
        else{
            cards[firstId].setAttribute('src','images/blank.png')
            cards[secondId].setAttribute('src','images/blank.png')
            
        }
        cardChosenArr = []
        cardChosenId = []
        displayResult.textContent = cardsWon.length
        if(cardsWon.length === (cardArr.length)/2){
                document.getElementsByTagName('h3')[0].textContent = 'Congratulations'
                alert('Game Over, You won! Sharp Memory!')

        }

    }

    // onClick function for flipping card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardChosenArr.push(cardArr[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArr[cardId].img)
        if (cardChosenArr.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


    createGameBoard()






})