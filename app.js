const playerSelection = prompt('Chose: rock, paper, scissors').toLowerCase();

function playRound(){
  const computerSelection = computerPlay();
  if(playerSelection === computerSelection){
    console.log(`You Chose = ${playerSelection}; \nComputer chose = ${computerSelection}; %c\nDraw`, 'font-size: 14px;');
  }else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
  playerSelection === 'scissors' && computerSelection === 'paper' ||
  playerSelection === 'paper' && computerSelection === 'rock'){
    console.log(`You Chose = ${playerSelection}; \nComputer chose = ${computerSelection}; %c\nYou Win!`, 'font-size: 14px; color: green;');
  }else{
    console.log(`You Chose = ${playerSelection}; \nComputer chose = ${computerSelection}; %c\nYou Lose!`, 'font-size: 14px; color: red;');
  }
}

function computerPlay(){
  const choice = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choice[randomNum];
}

playRound();