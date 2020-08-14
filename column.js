export class Column {
    constructor(){
        this.columnTokens = [];
    }
    add(currentPlayer){
        this.columnTokens.push(currentPlayer);
    }


    getTokenAt(rowNum) {
    return this.columnTokens[rowNum];
    };

}



// Look at later, it was at the top
// On board refresh, pass in the row and column to the getTokenAt method. That method will return null if the square is empty, 1 if player one's token is there, or 2 if player two's token is there.