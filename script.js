const playerScore = document.getElementById('playerScore');
const playerChoice = document.getElementById('playerChoice');
const computerScore = document.getElementById('computerScore');
const computerChoice = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeat: 'scissors' },
  paper: { name: 'Paper', defeat: 'rock' },
  scissors: { name: 'Scissors', defeat: 'paper' }
};

let computerSelect = '';
let playerScoreNum = 0;
let computerScoreNum = 0;

// reset icons that was not selected
function resetIcon() {
  allGameIcons.forEach(icon => {
    icon.classList.remove('selected');
  });
}

// random computer selection
function computerRandom() {
  const computerNumber = Math.random();

  if (computerNumber < 0.3) {
    computerSelect = 'rock';
  } else if (computerNumber <= 0.7) {
    computerSelect = 'paper';
  } else {
    computerSelect = 'scissors'
  }
}

// check result and update score
function updateScore(player) {
  if (player === computerSelect) {
    resultText.textContent = "It's a tie"
  } else {
    const choice = choices[player];
    if (choice.defeat.indexOf(computerSelect) > -1) {
      resultText.textContent = 'You Won!';
      playerScoreNum++;
      playerScore.textContent = playerScoreNum;
    } else {
      resultText.textContent = 'You Lost!';
      computerScoreNum++;
      computerScore.textContent = computerScoreNum;
    }
  }
}

// process player turn
function checkResult(player) {
  resetIcon();
  computerRandom();
  ComputerDisplay();
  updateScore(player);
}

// passing player slected values
function select(player) {
  checkResult(player);

  switch (player) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoice.textContent = ' -- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoice.textContent = ' -- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoice.textContent = ' -- Scissors';
      break;
    default:
      break;
  }
}

// add computer choice
function ComputerDisplay() {
  switch (computerSelect) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoice.textContent = ' -- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoice.textContent = ' -- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoice.textContent = ' -- Scissors';
      break;
    default:
      break;
  }
}

// reset all
function resetAll() {
  resetIcon();
  playerScoreNum = 0;
  computerScoreNum = 0;
  playerScore.textContent = playerScoreNum;
  computerScore.textContent = computerScoreNum;
  resultText.textContent = '';
  playerChoice.textContent = '';
  computerChoice.textContent = '';
}

// on load
resetAll();