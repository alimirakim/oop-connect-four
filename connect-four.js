// Handle input
// Update state
// Render view
// Format Document => SHIFT ALT F

import { Game } from "./game.js";



let game = undefined;
const formHolder = document.getElementById("form-holder"); // div
const player1Name = document.getElementById("player-1-name"); // text input
const player2Name = document.getElementById("player-2-name"); // text input
const newGame = document.getElementById("new-game"); // button
const gameName = document.getElementById("game-name");
const boardHolder = document.getElementById("board-holder"); //
const clickTargets = document.getElementById("click-targets");

function updateBoardPieces() {
  for (let ri = 0; ri <= 5; ri++) { // row index
    for (let ci = 0; ci <= 6; ci++) { // column index
      const square = document.getElementById(`square-${ri}-${ci}`);
      square.innerHTML = "";
      const tokenBeingChecked = game.getTokenAt(ci, ri);
      const placedToken = document.createElement("div");
      placedToken.setAttribute("id", `token-${ri}-${ci}`);
      if (tokenBeingChecked === game.player1Name) {
        placedToken.setAttribute("class", "token-square red");
      } else if (tokenBeingChecked === game.player2Name) {
        placedToken.setAttribute("class", "token-square black");
      } else {
        placedToken.setAttribute("class", "token-square");
      }
      square.appendChild(placedToken);
    }
  }
}

function updateUI(clickedTarget) {
  if (!game) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
    for (let colNum in game.columns) {
      const column = document.getElementById(`column-${colNum}`);
      if (game.isColumnFull(Number(colNum))) {
        column.classList.add("full");
      } else {
        //column.classList.remove("full"); // Q. Why need this?
      }
    }
    game.switchPlayer();
    game.changeColor(clickedTarget);
    updateBoardPieces(); // I'm actually stupid, refactor this monster and below hunks of junks later.

  }
}


// When new-game button is clicked, creates new Game with player names, 
newGame.addEventListener("click", event => {
  game = new Game(player1Name.value, player2Name.value);
  [player1Name.value, player2Name.value] = ["", ""];
  newGame.disabled = true;
  //updateUI();
});
formHolder.addEventListener("keyup", event => {
  if (player1Name.value && player2Name.value) {
    newGame.disabled = false;
  } else {
    newGame.disabled = true;
  }
});


clickTargets.addEventListener("click", event => {
  console.log("target num");
  if (event.target.id.includes("column-")) {
    const colNum = Number.parseInt(event.target.id[7])
    game.playInColumn(colNum);
    updateUI(event.currentTarget);
  };
});
