



// win inspection class - matching rows of things.
// horizontal, vertical, diagonal
// flexible - choose the row length

// handle input
// update state
// render view

// Tracks all kinds of user verbs. new game, names, click turn, disabling unviable clicks.

// Changes actual state of game logic or game.

// UI class - visuals, screen. Does NOT change state in any way. Is FED a state and performs rendering-related behavior as the result for each interaction.


// 
export class MatchInspector {
  constructor(board) {
    this.board = board;
  }
  checkAllMatching(list) {
  return list.every(function(item, i) {
    return (item === list[i+1]) || (item === list[list.length-1]);
  });
  };
  checkRow(row, targetMatchLength) { // Check if a match of x length is found
    for (let i = 0; i < row.length; i++) { // try .find
      let checkingSection = row.slice(i, i+targetMatchLength);
      return this.checkAllMatching(checkingSection), checkingSection[i];
  }
  checkOther()

// ["", "", ""]
// ["", "", "", "red", ""]
// ["", "", ""]




columnIndex = 1;
for row in rows
checkingSection.push(row[columnIndex]);

let column = [];
for (let i = 0; i < rows.length; i++) {
  column.push(rows[i]);
}




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