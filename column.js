

export class Column {
  constructor() {
    this.tokens = ["", "", "", "", "", ""];
  }
  add(player) {
    for (let tokenSpot in this.tokens) { // loop token spaces
      tokenSpot = Number(tokenSpot); // return if full
      if (this.tokens[0]) {
        return;
      }
      if (this.tokens[tokenSpot + 1] || (tokenSpot == 5 && !this.tokens[5])) { // Check if the next space down is occupied. If so, fill the current space. Also check if it's the very last space.
        this.tokens[tokenSpot] = player;
        return;
      }
    }
  }
  getTokenAt(rowNum) {
    // 
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


// win inspection class - matching rows of things.
// horizontal, vertical, diagonal
// flexible - choose the row length

// handle input
// update state
// render view

// Tracks all kinds of user verbs. new game, names, click turn, disabling unviable clicks.

// Changes actual state of game logic or game.

// UI class - visuals, screen. Does NOT change state in any way. Is FED a state and performs rendering-related behavior as the result for each interaction.




export class ColumnWinInspector {
  constructor(column) { // Column instance
    this.column = column;
  }
  // Loop through tokens, keep count of consecutive-matches, returns winner if 4-in-a-row.
  inspect() { // TESTED
    let count = 1;
    for (let i = 0; i < 6; i++) {
      if (this.column.getTokenAt(i) === this.column.getTokenAt(i + 1)) {
        count++;
        if (count === 4) {
          return this.column.getTokenAt(i);
        }
      } else {
        count = 1;
      }
    }
  }
}

export class RowWinInspector {
  constructor(fourColumns) {
    this.fourColumns = fourColumns;
  }
  inspect() { // TODO this works, but it's disgusting
    for (let i = 0; i < 6; i++) {
      if (this.fourColumns[0].getTokenAt(i) && (this.fourColumns[0].getTokenAt(i) === this.fourColumns[1].getTokenAt(i) && this.fourColumns[1].getTokenAt(i) === this.fourColumns[2].getTokenAt(i) && this.fourColumns[2].getTokenAt(i) === this.fourColumns[3].getTokenAt(i))) {
        return this.fourColumns[0].getTokenAt(i);
      }
    }
  }
}

// export class DiagWinInspector {
//   constructor(four

// }