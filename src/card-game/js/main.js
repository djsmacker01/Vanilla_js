let deckId = ' '
 fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckId = data.deck_id
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image

      let player1Val = Number(data.cards[0].value)
      let player2Val = Number(data.cards[0].value)

      if (player1Val > player2Val) {
        document.querySelector('h3').innerHTML = 'Player 1 Wins '
      }
      else if (player1Val < player2Val) { 
        document.querySelector('h3').innerHTML = 'Player 2 Wins '

      }
      else {
        document.querySelector('h3').innerHTML = 'A tie! Get Ready for War!'
        
      }

       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

 
}

function convertToNum(val){
  if (val === 'ACE') {
    return 14
  } else if (val === 'KING') {
    return 13
  }
  else if (val === 'QUEEN') {
    return 12
  }
  else if (val === 'JACK') { 
    return 11
  }
  else {
    return val
  }
}
