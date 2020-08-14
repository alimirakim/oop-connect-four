
export class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }
  inspect() { // check for 4-token match same player, column
    // this.column.columnTokens[i]
      // some kind of for loop, a counter, through the column squares.
      // what token, count- track matching tokens, return token value
    let count = 1;  
    for(let i = 0; i < this.column.columnTokens.length; i++){
      let value = this.column.columnTokens;
      // console.log(value, "value");
      if ((value[i] !== '') && (value[i] === value[i+1])){
        // console.log(value[i], "under line 14, inspector method")
        count++
        // console.log(count, "counter inside inspector method")
        if (count === 3) {
          console.log(value[i], "winner inside inspector method", count);
          
          return value[i];
        } 
      } else {
        count = 0;
      }
      
    }
    return 0;
  }
}