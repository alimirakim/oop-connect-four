// handles state

// on player move click;
//    where should the token fall // col, not row yet;
// use current player state to update ui;

import { Column, ColumnWinInspector, RowWinInspector } from "./column.js";

export class Game {
  constructor(player1Name, player2Name) {
    this.currentPlayer = player1Name;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.gameName = `${this.player1Name} vs. ${this.player2Name}!!!`
    this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()] // 7 columns
    this.winner;
  };
  getName() {
    if (this.winner === "tie") {
      return `It's a tie...`;
    } else if (this.winner) {
      return `Player ${this.winner} wins!!!`;
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
  // Changed hover-color of token-indicator to currentPlayer
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
    this.checkForTie();
    this.checkForColumnWin();
    if (!this.winner) {
      this.checkForRowWin();
    }
    if (!this.winner) {
      this.checkForRowWin();
    }
  }
  getTokenAt(colNum, rowNum) { // return a player-name or null
    return this.columns[colNum].getTokenAt(rowNum);
  };
  isColumnFull(colNum) {
    if (this.winner) { // check for a winner first
      return true;
    } else {
      return this.columns[colNum].isFull();
    }
  }

  //  METHOD GROUP: Checking for end results.
  checkForTie() { // TESTED
    let full = true;
    this.columns.forEach(column => {
      if (!column.isFull()) {
        full = false;
      }
    });
    if (full) {
      this.winner = "tie";
      console.log('winner ', this.winner);
    }
  }
  checkForColumnWin() { // 'first step, this -the- method if there is winner' < where, which, they mean??? here, playInColumn?
    this.columns.forEach(column => {
      let colChecker = new ColumnWinInspector(column);
      let winner = colChecker.inspect();
      // console.log('column winner', winner);
      if (winner) {
        this.winner = winner;
        console.log("checked and found winnner ", this.winner);
      }
    });

  }
  checkForRowWin() {
    for (let i = 0; i < 4; i++) {
      const fourColumns = this.columns.slice(i, i + 4);
      let rowMatch = new RowWinInspector(fourColumns);
      if (rowMatch.inspect()) { // if inspection returns valid winner...
        this.winner = winner;
      }
      // let diagMatch = new DiagWinInspector(fourColumns);
      // if (diagMatch.inspect()) { // is inspection returns valid winner...
      //   this.winner = winner;
      // }
    }
  }
checkForDiagWin() {
  
}

};
