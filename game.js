// handles state

// on player move click;
//    where should the token fall // col, not row yet;
// use current player state to update ui;

class Column {
  constructor() {
    this.tokens = ["", "", "", "", "", ""];
  }
  add(player) {
    for (let tokenSpot in this.tokens) {
      tokenSpot = Number(tokenSpot);
      if (this.tokens[0]) {
        return;
      }
      if (this.tokens[tokenSpot + 1] || (tokenSpot == 5 && !this.tokens[5])) {
        this.tokens[tokenSpot] = player;
        return;
      }
    }
  }
  getTokenAt(rowNum) {
    // TODO flip numbers to go bottom-up
    if (!this.tokens[rowNum]) {
      return null;
    } else if (this.tokens[rowNum]) {
      return this.tokens[rowNum];
    }
  }
  isFull() { // Q. Another sugar function let getname, or Demeter?
    if (this.tokens[0]) {
      return true;
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
    this.winner = "";
  };
  getName() {
    if (this.winner !== "") {
      return this.winner;
    } else {
      return `${this.player1Name} vs. ${this.player2Name}!!!`;
    }
  }
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
    console.log("switching to ", this.player1Name);
    if (this.currentPlayer === this.player1Name) {
      this.currentPlayer = this.player2Name;
    } else {
      this.currentPlayer = this.player1Name;
    }
  };
  playInColumn(colNum) {
    this.columns[colNum].add(this.currentPlayer);
    // this.switchPlayer(); // Think it's easier to read to call directly
    this.checkForTie();
  }
  getTokenAt(colNum, rowNum) {
    return this.columns[colNum].getTokenAt(rowNum);
  };
  isColumnFull(colNum) {
    return this.columns[colNum].isFull();
  }

  checkForTie() { // check reduce and such later, but do something normal for now.
    const allFull = this.columns.reduce((allFull, column) => {
      if (!column.isFull()) {
        allFull = false;
        return allFull;
      }
    }, true);
    if (allFull) {
      this.winner = "it is a tie"
    }
  }

  //

};
