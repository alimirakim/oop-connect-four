import { Game } from "./game.js";



let dummyPlayerClick = "div click target";
let currentPlayer = "red";
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

  let clickTarget = document.getElementById("click-targets");
  clickTarget.addEventListener("click", ev => {
    if (!ev.target.id.includes("column") || !game) {
      return;
    };
    game.playInColumn();
    updateUI();
    // if (checkColumnFull()) {
      // putToken(currentPlayer, ev);
    // } 
  });



  newGame.addEventListener("click", ev => { //
    game = new Game(player1Name, player2Name);
    player1Name.value = "";
    player2Name.value = "";
    newGame.disabled = "true";
    updateUI();
  });
});



function updateUI(){ // TESTED
  if (game === undefined){
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
    console.log(game.currentPlayer);
  }
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




// false = not full, so player can play
function checkColumnFull(columnDiv, columnSquares){ // CHANGE this function, obsolete. use class instead.
  for(let i = 0; i < columnSquares.length; i++){
    if(!columnSquares[i].classList.includes("filled")){
      return false;
    }
  }
  columnDiv.classList.add("full")
  return true
}


    // if (divColumn.classList.includes("full")){
    //     return false;
    // } else if ()
