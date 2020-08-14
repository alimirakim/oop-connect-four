

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



export class ColumnWinInspector {
  constructor(column) { // Column instance
    this.column = column;
  }
  // Looops through rows, keeps count of consecutive-match-tokens, and returns winner if 4-in-a-row.
  inspect() {
    let count = 1;
    for (let i = 0; i <= 6; i++) {
      // console.log('token', this.column.tokens[i]);
      if (this.column.tokens[i] && (this.column.tokens[i] === this.column.tokens[i -1])) { // not counting beyond 2
        count++;
        console.log('count', count);
        if (count === 3) {
          console.log('inspector winner', this.column.tokens[i]);
          return this.column.tokens[i]; // Returns the player name
        } else {
          count = 1;
        }
      }
    }
    return null;
  }
}