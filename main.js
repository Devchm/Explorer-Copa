function createGame(player1, hour, player2) {
  return `
              <li>
              <img src="./assets/${player1}-icon.svg" alt="${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/${player2}-icon.svg" alt="${player2}" />
            </li>
            

  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3
   return `
   <div class="card" style="animation-delay:${delay}s">
          <h2>${date} <span>${day}/span></h2>
          <ul>
            ${games}
          </ul>
        </div>
        `
}


document.querySelector('#cards').innerHTML = 
        
         createCard('24/11', 'quinta', createGame('brazil', '08:00', 'cameroon')
         +
         createGame('colombia', '14:00', 'hungary') 
         +
         createGame('argentina', '17:00', 'japan')
         ) +

         createCard('28/11', 'segunda', createGame('cameroon', '9:00', 'japan') 
          +
          createGame('serbia', '12:00', 'portugal')
          +
         createGame('brazil', '19:00', 'hungary'))
         +
         createCard('02/12', 'sexta', createGame('japan', '8:00', 'hungary') +
          createGame('portugal', '12:00', 'argentina')
          +
         createGame('colombia', '20:00', 'serbia'))
         
         
     

/*
document.querySelector('#cards').innerHTML = `
        
         ${createCard('24/11', 'quinta', createGame('brazil', '16:00', 'cameroon')
         +
         createGame('colombia', '15:00', 'japan')
         )}
         ${createCard('28/11', 'segunda', createGame()
         )}
         ${createCard('02/12', 'sexta', createGame())}
     
`     
*/