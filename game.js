import { Column } from "./column.js";
import {ColumnWinInspector } from "./columnWinInspector.js";



export class Game {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name.value;
    this.player2Name = player2Name.value;
    this.currentPlayer = 1;
    this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
    this.winnerNumber = 0;
  }
  getName(){ // returns title string
    return `${this.player1Name} vs ${this.player2Name}`;
  }
  playInColumn(colNum) {
    this.columns[colNum].add(this.currentPlayer);
// Switches player
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }
  getTokenAt(row, column) {
    return this.columns[column].getTokenAt(row);
  }
  isColumnFull(colNum) {
    return this.columns[colNum].isFull();
  }

  checkForColumnWin() { // use the colInspector class here once per column
  this.columns.forEach( column => {
    let columnToInspect = new ColumnWinInspector(column);
    columnToInspect.inspect();
  });
  }

}
