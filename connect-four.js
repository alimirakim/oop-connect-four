let dummyPlayerClick = "div click target";
let currentPlayer = "red";
let droppable = true;
if (!droppable) {
    let div = document.getElementById("column-4");
    div.classList.add("full");

}

// false = not full so player can play
function checkColumnFull(columnDiv, columnSquares){
    for(let i = 0; i < columnSquares.length; i++){
        if(!columnSquares[i].classList.includes("filled")){
            return false
        }
        columnDiv.classList.add("full")
        return true
    }
}
    // if (divColumn.classList.includes("full")){
    //     return false;
    // } else if ()

