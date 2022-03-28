//The game presents 3 choices of “weapons” for the user to play the game:
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let weapons = [rock, paper, scissors];

//The computer randomly choose one option between Rock, Paper, and Scissors;
function computerPlay() {
  let computerWeapon = weapons[parseInt(Math.random() * 3)];
  return computerWeapon;
}

//The user choose one option between Rock, Paper, and Scissors;
function userPlay() {
  let userInput = prompt("Your move: Rock, Paper or Scissors");
  let userWeapom = userInput.toLowerCase();

  if (userWeapom == rock || userWeapom == paper || userWeapom == scissors) {
    return userWeapom;
  } else {
    alert(
      "The only weapons allowed are: Rock, Paper or Scissors, choose one of them! ;)"
    );
  }
}

//Compare the choices made by the user and the computer and display to the user the result of the round;
//Count 1 point for each victory

let computerScore = 0;
let playerScore = 0;

function gameRound(userPlay, computerPlay) {
  console.log(computerPlay);
  console.log(userPlay);
  let computerWin =
    (userPlay == rock && computerPlay == paper) ||
    (userPlay == paper && computerPlay == scissors) ||
    (userPlay == scissors && computerPlay == rock);
  let playerWin =
    (userPlay == rock && computerPlay == scissors) ||
    (userPlay == paper && computerPlay == rock) ||
    (userPlay == scissors && computerPlay == paper);
  let draw = userPlay == computerPlay;
  let result;

  let playerBigLetter = userPlay.charAt(0).toUpperCase() + userPlay.slice(1);
  let computerBigLetter =
    computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);

  if (computerWin) {
    alert("You lose! " + computerBigLetter + " beats " + userPlay + "!");
    computerScore += 1;
  } else if (playerWin) {
    alert("You win! " + playerBigLetter + " beats " + computerPlay + "!");
    playerScore += 1;
  } else if (draw) {
    alert("Draw! Please, be better!");
  }
  console.log(computerScore);
  console.log(playerScore);
}

gameRound(userPlay(), computerPlay());

// the first to reach 5 victories is the Winner!
// If the user reaches 5 wins first, display a message: You won!
// If the computer reaches 5 wins first, display a message: You Lose!

function game() {
  for (let i = 0; computerScore < 5 && playerScore < 5; i++) {
    {
      alert("Human = " + playerScore + " & Machine = " + computerScore);
      gameRound(userPlay(), computerPlay());
    }
  }
  if (computerScore == 5) {
    alert(
      "The machines won! Human = " +
        playerScore +
        " & Machine = " +
        computerScore
    );
  } else if (playerScore == 5)
    alert(
      "The humans won! Human = " + playerScore + " & Machine = " + computerScore
    );
}

game();
