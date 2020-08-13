


export class Game {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name.value;
    this.player2Name = player2Name.value;
    this.currentPlayer = 1;
  }
  getName(){
    return `${this.player1Name} vs ${this.player2Name}`;
  }
  playInColumn() {
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }
}
