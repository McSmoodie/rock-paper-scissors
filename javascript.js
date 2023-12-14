function getComputerChoice () {
  array = ["Rock", "Paper", "Scissors"]
  return array[Math.floor(Math.random() * array.length)];
}

function playRound (playerSelection, computerSelection) {
 playerSelection = playerSelection.toUpperCase();
 computerSelection = computerSelection.toUpperCase();

 if (playerSelection === computerSelection) {
  return "Tie!";
 }
 
 if (playerSelection === "ROCK") {
  if (computerSelection === "PAPER") {
    return "You Lose! Paper beats Rock";
  } else if (computerSelection === "SCISSORS") {
    return "You Win! Rock beats Scissors";
  };
 }
 else if (playerSelection === "PAPER") {
  if (computerSelection === "ROCK") {
    return "You Win! Paper beats Rock";
  } else if (computerSelection === "SCISSORS") {
    return "You Lose! Scissors beats Paper";
  }
 }
 else if (playerSelection === "SCISSORS") {
  if (computerSelection === "ROCK") {
    return "You Lose! Rock beats Scissors";
  } else if (computerSelection === "PAPER") {
    return "You Win! Scissors beats Paper"
  }
 }
}

function game () {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your move!");
    let computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result === "Tie!") {
      i--;
    } else if (result.includes("You Win!")) {
      playerScore++;
    } else if (result.includes("You Lose!")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("You Win! Congrats")
  } else {
    console.log("You Lose! Better luck next time");
  }
}

game();