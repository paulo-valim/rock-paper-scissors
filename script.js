let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let weapons = [rock, paper, scissors];

function computerPlay() {
  let computerWeapon;
  return (computerWeapon = weapons[parseInt(Math.random() * 3)]);
}

let weapon = document.querySelectorAll(".weaponbtn");
weapon.forEach((weaponbtn) => {
  weaponbtn.addEventListener("click", userWeapon);
});

function userWeapon(e) {
  let userPlay;
  userPlay = e.target.getAttribute("data-weapon");
  e.target.classList.add("playing");
  gameRound(userPlay, computerPlay());
}

let turnOff = document.querySelectorAll(".weaponbtn");
turnOff.forEach((weaponbtn) =>
  weaponbtn.addEventListener("transitionend", removeTransition)
);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

let computerScore = 0;
let playerScore = 0;

function gameRound(userPlay, computerPlay) {
  printWeaponChoices(userPlay, computerPlay);
  let result;
  if (
    (userPlay == rock && computerPlay == paper) ||
    (userPlay == paper && computerPlay == scissors) ||
    (userPlay == scissors && computerPlay == rock)
  ) {
    result = "computerWin";
  } else if (
    (userPlay == rock && computerPlay == scissors) ||
    (userPlay == paper && computerPlay == rock) ||
    (userPlay == scissors && computerPlay == paper)
  ) {
    result = "playerWin";
  } else if (userPlay == computerPlay) {
    result = "draw";
  }
  gameRoundResult(result, userPlay, computerPlay);
}

function gameRoundResult(gameRound, userPlay, computerPlay) {
  let playerBigLetter = userPlay.charAt(0).toUpperCase() + userPlay.slice(1);
  let computerBigLetter =
    computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);

  let printMatchResult = document.querySelector(".match-result");
  let printMatchComment = document.querySelector(".match-comment");

  if (gameRound === "computerWin") {
    printMatchResult.textContent = "You Lost!";
    printMatchComment.textContent =
      computerBigLetter + " beats " + userPlay + "!";
    computerScore += 1;
  } else if (gameRound === "playerWin") {
    printMatchResult.textContent = "You Won!";
    printMatchComment.textContent =
      playerBigLetter + " beats " + computerPlay + "!";
    playerScore += 1;
  } else if (gameRound === "draw") {
    printMatchResult.textContent = "It's a Draw!";
    printMatchComment.textContent =
      playerBigLetter + " ties with " + computerPlay + "!";
  }

  printMatchScore(playerScore, computerScore);
  gameScore(playerScore, computerScore);
}

function printWeaponChoices(userPlay, computerPlay) {
  let printUserPlay = document.querySelector(".user-play");
  if (userPlay === "rock") {
    printUserPlay.textContent = "👊";
  } else if (userPlay === "paper") {
    printUserPlay.textContent = "🤚";
  } else if (userPlay === "scissors") {
    printUserPlay.textContent = "🖖";
  }
  let printComputerPlay = document.querySelector(".computer-play");
  if (computerPlay === "rock") {
    printComputerPlay.textContent = "👊";
  } else if (computerPlay === "paper") {
    printComputerPlay.textContent = "🤚";
  } else if (computerPlay === "scissors") {
    printComputerPlay.textContent = "🖖";
  }
  console.log(computerPlay);
  console.log(userPlay);
}

function printMatchScore(playerScore, computerScore) {
  let printUserScore = document.querySelector(".user-score");
  printUserScore.textContent = " " + playerScore;
  let printComputerScore = document.querySelector(".computer-score");
  printComputerScore.textContent = " " + computerScore;
  console.log(computerScore);
  console.log(playerScore);
}

function gameScore(playerScore, computerScore) {
  let modal = document.querySelector(".modal");
  let score = document.querySelector(".modal-title");
  let overlay = document.querySelector(".overlay");
  if (computerScore === 5) {
    score.innerHTML =
      "You lost! <br/> You: " + playerScore + " x Computer: " + computerScore;
    modal.style.display = "flex";
    overlay.style.display = "block";
  } else if (playerScore === 5) {
    score.innerHTML =
      "You won! <br/> You: " + playerScore + " x Machine: " + computerScore;
    modal.style.display = "flex";
    overlay.style.display = "block";
  }
}

let restart = document.querySelector(".btn-restart");
restart.addEventListener("click", restartGame);

function restartGame() {
  let modal = document.querySelector(".modal");
  let overlay = document.querySelector(".overlay");
  let restartTitle = document.querySelector(".match-result");
  let restartInstruction = document.querySelector(".match-comment");
  let restartUserScore = document.querySelector(".user-score");
  let restartComputerScore = document.querySelector(".computer-score");
  let restartUserPlay = document.querySelector(".user-play");
  let restartComputerPlay = document.querySelector(".computer-play");
  modal.style.display = "none";
  overlay.style.display = "none";
  restartTitle.textContent = "Choose your weapon:";
  restartInstruction.textContent = "First to score 5 points wins the game!";
  playerScore = 0;
  computerScore = 0;
  restartUserScore.textContent = " 0";
  restartComputerScore.textContent = " 0";
  restartUserPlay.textContent = "?";
  restartComputerPlay.textContent = "?";
}
