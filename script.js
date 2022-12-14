const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer === 0 ? 1: 0;
        currentScore=0;

        player0El.classList.toggle('player--active0')
        player1El.classList.toggle('player--active1')
    }
    
    // condition 
    
    score0El.textContent=0;
    score1El.textContent=0;
    diceEl.classList.add('hidden');
    
    let currentScore=0;
    let activePlayer=0;
    let playing = true;
    btnRoll.addEventListener('click' , function(){
       if(playing){
        const randomDice = (Math.trunc(Math.random() * 6)+1);
        console.log(randomDice);
        
        diceEl.classList.remove('hidden');
        
        diceEl.src = `png.${randomDice}.png`
        if(randomDice !== 1){
            
            currentScore +=randomDice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }else{
            switchPlayer()
        }
       }
    })
    
    
    const score=[0,0];

btnHold.addEventListener('click' , function(){
   if(playing){
    score[activePlayer]+=currentScore;
console.log(score[activePlayer]);
   document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
   
   if(score[activePlayer] >= 50){
       playing= false;
       diceEl.classList.add('hidden');
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       

       document.querySelector(`.player--${activePlayer}`).classList.add('player--active');


    }else{
        switchPlayer();
    }
    
   }
})



