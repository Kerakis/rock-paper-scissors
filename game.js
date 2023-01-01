let playerScore = 0;
let computerScore = 0;

function getComputerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerSelection = choices[randomIndex];
  return computerSelection;
}

function getPlayerSelection() {
  const playerChoice = prompt('What is your move?');

  if (
    playerChoice === null ||
    playerChoice === '' ||
    playerChoice === undefined
  ) {
    console.log('You must make a move.');
    getPlayerSelection();
  } else if (playerChoice.toLocaleLowerCase() === 'rock') {
    console.log('You chose Rock.');
    return playerChoice.toLocaleLowerCase();
  } else if (playerChoice.toLocaleLowerCase() === 'paper') {
    console.log('You chose Paper.');
    return playerChoice.toLocaleLowerCase();
  } else if (playerChoice.toLocaleLowerCase() === 'scissors') {
    console.log('You chose Scissors.');
    return playerChoice.toLocaleLowerCase();
  } else {
    console.log('You must choose either Rock, Paper, or Scissors.');
    getPlayerSelection();
  }
}

function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerSelection();
  playerSelection = getPlayerSelection();
  console.log(`The Computer chose ${computerSelection}`);

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('Rock breaks Scissors. The Player wins the round!!');
    playerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('Paper covers Rock. The Computer wins the round!!');
    computerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('Scissors cut Paper. The Player wins the round!!');
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('Rock breaks Scissors. The Computer wins the round!!');
    computerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('Paper covers Rock. The Player wins the round!!');
    playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('Scissors cuts Paper. The Computer wins the round!!');
    computerScore++;
  } else if (playerSelection === computerSelection) {
    console.log('Tie! Next round!');
    playRound();
  } else if (
    playerSelection === undefined ||
    playerSelection === null ||
    playerSelection === ''
  ) {
    console.log('Game canceled.');
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Player: ${playerScore} | Computer ${computerScore}`);
    if (i === 4 && computerScore > playerScore) {
      console.log('The Computer wins the game');
    }
    if (i === 4 && playerScore > computerScore) {
      console.log('The Player wins the game');
    }
  }
}
