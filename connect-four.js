let dummyPlayerClick = "div click target";
let currentPlayer = "red";
let boardHolder = document.getElementById("board-holder");
let newGame = document.getElementById("new-game");
let gameName = document.getElementById("game-name");
let game = undefined;

function updateUI(){
    if (game === undefined){
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }


}
class Game {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name.value;
    this.player2Name = player2Name.value;
  }
getName(){
    return `${this.player1Name} vs ${this.player2Name}`;
}


}


window.addEventListener("DOMContentLoaded", ev => {
  let player1Name = document.getElementById("player-1-name");
  let player2Name = document.getElementById("player-2-name");


  player1Name.addEventListener("keyup", ev => {
    handlePlayerName(player1Name, player2Name);
  })
  player2Name.addEventListener("keyup", ev => {
    handlePlayerName(player1Name, player2Name);
  });

  newGame.addEventListener("click", ev => {
    game = new Game(player1Name, player2Name);
    player1Name.value = "";
    player2Name.value = "";
    newGame.disabled = "true";
    updateUI();
  });






});





// Check if player name inputs have names
function handlePlayerName(player1Name, player2Name) {
    if (player1Name.value !== "" && player2Name.value !== "") {
      newGame.setAttribute("disabled", "false");
    } else {
      newGame.setAttribute("disabled", "true");
    }
}


// Add 'token red/black' classes to clicked div spot
function putToken(player, ev) {
  let square = document.getElementById(ev.target.id);
  let div = document.createElement("div");
  div.classList.add(`token ${player}`);
  square.appendChild(div);
}



// false = not full, so player can play
function checkColumnFull(columnDiv, columnSquares){
    for(let i = 0; i < columnSquares.length; i++){
        if(!columnSquares[i].classList.includes("filled")){
            return false
        }
        columnDiv.classList.add("full")
        return true
    }
}
    // if (divColumn.classList.includes("full")){
    //     return false;
    // } else if ()
