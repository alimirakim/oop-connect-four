import { Game } from "./game.js";


let boardHolder = document.getElementById("board-holder");
let newGame = document.getElementById("new-game");
let gameName = document.getElementById("game-name");
let game = undefined;

window.addEventListener("DOMContentLoaded", ev => {
  let player1Name = document.getElementById("player-1-name");
  let player2Name = document.getElementById("player-2-name");
  player1Name.addEventListener("keyup", ev => { // TESTED
    handlePlayerName(player1Name, player2Name);
  })
  player2Name.addEventListener("keyup", ev => { // TESTED
    handlePlayerName(player1Name, player2Name);
  });
  let clickTargets = document.getElementById("click-targets");

  // START NEW GAME
  newGame.addEventListener("click", ev => { //
    game = new Game(player1Name, player2Name);
    player1Name.value = "";
    player2Name.value = "";
    newGame.disabled = "true";
    updateUI(clickTargets);
  });
});


// PLAYER GAME-CLICK START
clickTargets.addEventListener("click", ev => {
  if (!ev.target.id.includes("column") || !game) {
    return;
  };
  game.playInColumn(); // switches players, then [blank]
  updateUI(clickTargets); // refresh visuals
  // check columns, next todo?
});


// checks if gameboard should be drawn.
// changes color indicator of player-token
function updateUI(clickTargets) { // TESTED
  if (game === undefined) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
  }
  let playerNow, playerOff; // May work best in a function, 52-61. Task - change color of placing-token-indicator (not board tokens)
  if (game.currentPlayer === 1) {
    playerNow = "red";
    playerOff = "black";
  } else {
    playerNow = "black";
    playerOff = "red";
  }
  clickTargets.classList.add(playerNow);
  clickTargets.classList.remove(playerOff);
}

// Check if player name inputs have names
function handlePlayerName(player1Name, player2Name) { // TESTED
  if (player1Name.value !== "" && player2Name.value !== "") {
    newGame.removeAttribute("disabled");
  } else {
    newGame.setAttribute("disabled", "true");
  }
}

// Add 'token red/black' classes to clicked div spot
function putToken(player, ev) { // TESTED
  let square = document.getElementById(ev.target.id);
  let div = document.createElement("div");
  div.classList.add(`token`, `${player}`);
  square.appendChild(div);
}

// GUIDELINES have specific walkthrough later, toss this
function checkColumnFull(columnDiv, columnSquares) { // CHANGE this function, obsolete. use class instead.
  for (let i = 0; i < columnSquares.length; i++) {
    if (!columnSquares[i].classList.includes("filled")) {
      return false;
    }
  }
  columnDiv.classList.add("full")
  return true
}
