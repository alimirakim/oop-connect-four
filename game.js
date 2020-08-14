// handles state

// on player move click;
//    where should the token fall // col, not row yet;
// use current player state to update ui;

class Column {
  constructor() {
    this.tokens = []; // 6th row, 5th row, etc.
  }
  add(player) {
    this.tokens.push(player);
  }
  getTokenAt(rowNum) {
    // TODO flip numbers to go bottom-up
    if (!this.tokens[rowNum]) {
      return null;
    } else if (this.tokens[rowNum]) {
      return this.tokens[rowNum];
    }
  }
}

export class Game {
  constructor(player1Name, player2Name) {
    this.currentPlayer = player1Name;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.gameName = `${this.player1Name} vs. ${this.player2Name}!!!`
    this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()] // 7 columns
  };
  getColor() {
    if (this.currentPlayer === this.player1Name) {
      return "red";
    } else {
      return "black";
    }
  };
  changeColor(clickedTarget) { // TESTED
    if (this.currentPlayer === this.player1Name) {
      clickedTarget.classList.remove("black");
      clickedTarget.classList.add("red");
    } else {
      clickedTarget.classList.remove("red");
      clickedTarget.classList.add("black");
    }
  };
  switchPlayer() { // TESTED
    if (this.currentPlayer === this.player1Name) {
      this.currentPlayer = this.player2Name;
    } else {
      this.currentPlayer = this.player1Name;
    }
  };
  playInColumn(colNum) {
    this.columns[colNum].add(this.currentPlayer);
    // this.switchPlayer(); // Think it's easier to read to call directly
  }
  getTokenAt(colNum, rowNum) {
    return this.columns[colNum].getTokenAt(rowNum);
  };


  // checkColumn() { // my version, compare later
  //   let colNum = event.target.id[7];
  //   let rowNum = 5;// loop squares, check class for red/black/filled
  //   let bottomSquare = document.getElementById("square-" + rowNum + "-" + colNum);
  //   bottomSquare.classList.add(game.getColor());
  // };

  
};
