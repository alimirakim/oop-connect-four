export class Column {
    constructor(){
        this.columnTokens = []
    }
    add(currentPlayer){
        this.columnTokens.push(currentPlayer);
    }
}