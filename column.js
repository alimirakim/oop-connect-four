

export class Column {
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


//
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
