// handles state

// on player move click;
//    where should the token fall // col, not row yet;
// use current player state to update ui;

import { Column, ColumnWinInspector, RowWinInspector } from "./column.js";

export class Game {
  constructor(rows, columns) {
    this.columns = this.setBoardSize(rows, columns);
    this.playerRed = "red"
    this.playerBlack = "black"
    this.player = this.playerRed;
    this.winner;
  };
  setBoardSize(rows, columns) {
    let board = [];
    columns.forEach(function () { // TODO Check that no args are allowed
      board.push(new Array(rows))
    })
  }
  playInColumn(colNum) {  // Add player-color to the bottom-most unoccupied square in the column, or bottom-most square if none.
    let column = this.columns[colNum];
    for (let i = 0; i < column.length; i++) {
      if (column[i + 1] || i === this.columns.length) {
        square = this.player; // TODO check that this mutates the column in the board.
        return;
      }
    }
  }
  isColumnFull(colNum) { // If top-most square is occupied, return true.
    if (this.columns[colNum][0]) {
      return true;
    }
  }
  getTokenAt(colNum, rowNum) { // return player-color or null
    return this.columns[colNum][rowNum]; // TODO Check that this works like python to call array within array
  };
  // getName() { // put this shit in UI, then delete here
  //   if (this.winner === "tie") {
  //     return `It's a tie...`;
  //   } else if (this.winner) {
  //     return `Player ${this.winner} wins!!!`;
  //   } else {
  //     return `${this.player1Name} vs. ${this.player2Name}!!!`;
  //   }
  // }
  // getColor() {
  //   if (this.currentPlayer === this.player1Name) {
  //     return "red";
  //   } else {
  //     return "black";
  //   }
  // };
  // // Changed hover-color of token-indicator to currentPlayer
  // changeColor() { // TESTED
  //   if (this.currentPlayer === this.player1Name) {
  //     clickTargets.classList.remove("black");
  //     clickTargets.classList.add("red");
  //   } else {
  //     clickTargets.classList.remove("red");
  //     clickTargets.classList.add("black");
  //   }
  // };

  switchPlayer() {
    if (this.player === this.playerRed) {
      this.player = this.playerBlack;
    } else {
      this.player = this.playerRed;
    }
  };

  checkForWin() {
    this.checkForTie();
    if (!this.winner) {
      this.checkWinColumns();
    }
    if (!this.winner) {
      this.checkWinRows();
    }
    if (!this.winner) {
      this.checkWinDiags();
    }
  }

  //  METHOD GROUP: Checking for end results.
  checkForTie() { // Update this.winner to 'tie' if every column has top-most squares full.
    const isFull = this.columns.every(function (column, i) {
      return this.isColumnFull(i);
    });
    if (isFull) {
      this.winner = "tie";
    }
  }
  checkWinColumns() { // 'first step, this -the- method if there is winner' < where, which, they mean??? here, playInColumn?
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
  checkWinRows() {
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
