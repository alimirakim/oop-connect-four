// handles state

// on player move click;
//    where should the token fall // col, not row yet;
// use current player state to update ui;

import { Column, ColumnWinInspector } from "./column.js";

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
  }
  getTokenAt(colNum, rowNum) {
    return this.columns[colNum].getTokenAt(rowNum);
  };
  isColumnFull(colNum) {
    return this.columns[colNum].isFull();
  }

//  METHOD GROUP: Checking for end results.
  checkForTie() { // TESTED
    let full = true;
    this.columns.forEach( column => {
        if (!column.isFull()) {
        full = false;
    }
    });
    if (full) {
      this.winner = "It's a tie!";
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

// check reduce and such later, but do something normal for now.
    // const allFull = this.columns.reduce((allFull, column) => {
    //   if (!column.isFull()) {
    //     allFull = false;
    //     return allFull;
    //   }
    // }, true);
    // if (allFull) {
    //   this.winner = "it is a tie"
    // }

};
