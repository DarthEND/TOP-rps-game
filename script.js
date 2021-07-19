const scoreEl = document.querySelector('.scoreNum');
const buttons = document.querySelectorAll('.pick');
const game = document.getElementById('game');
const finalGame = document.getElementById('finalGame');
const reset = document.getElementById('reset');
const userChoice = document.getElementById('userChoice');
const computerChoice = document.getElementById('computerChoice');
const result = document.getElementById('result');
const rules = document.getElementById('rules');
const open = document.getElementById('open');
const close = document.getElementById('close');

let score = 0;
let playerSelection = undefined;

open.addEventListener('click', () => {
  rules.style.display = 'flex';
});

close.addEventListener('click', () => {
  rules.style.display = 'none';
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playerSelection = button.getAttribute('data-choice');
    playRound();
  })
});

reset.addEventListener('click', () => {
  game.style.display = 'grid';
  finalGame.style.display = 'none';
});

function computerPlay(){
  const choice = ['rock', 'paper', 'scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
};

function updateScore(){
  score += 1;
  scoreEl.innerText = score;
};

function playRound(){
  const computerSelection = computerPlay();
  updateSelection(userChoice, playerSelection);
  updateSelection(computerChoice, computerSelection);
  if(playerSelection === computerSelection){
    result.innerText = 'draw';
    computerChoice.classList.remove('winner');
    userChoice.classList.remove('winner');
  }else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
  playerSelection === 'scissors' && computerSelection === 'paper' ||
  playerSelection === 'paper' && computerSelection === 'rock'){
    result.innerText = 'win';
    userChoice.classList.add('winner');
    computerChoice.classList.remove('winner');
    updateScore();
  }else{
    computerChoice.classList.add('winner');
    userChoice.classList.remove('winner');
    result.innerText = 'lost';
  }
  game.style.display = 'none';
  finalGame.style.display = 'grid';
};

function updateSelection(selectionEl, choice){
  selectionEl.classList.remove('rock');
  selectionEl.classList.remove('paper');
  selectionEl.classList.remove('scissors');

  selectionEl.classList.add(`${choice}`);
  selectionEl.querySelector('img').src = 'images/icon-' + choice + '.svg';
  selectionEl.querySelector('img').alt = choice;
};