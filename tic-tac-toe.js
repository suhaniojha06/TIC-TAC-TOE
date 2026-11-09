let boxes=document.querySelectorAll('.box');
let turn="player1";
const moves=["X","O"]
let isGameOver=false; //Flag to track if the game is over

//M-2
// let winningPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 //const checkWinner=()=>{ 
//   for(let pattern of winningPatterns){
//   if(boxes[pattern[0]].innerText!="" && boxes[pattern[0]].innerText==boxes[pattern[1]].innerText && boxes[pattern[1]].innerText==boxes[pattern[2]].innerText){
//     return true;
//   }
// }


// for(box of boxes)
// {
//     box.addEventListener("click",()=>{
//         console.log('cross');
        
//     })
// }
let result=()=>{
     let isWon=0;
moves.forEach((move)=>{
//Check Rows
    for(i=0;i<=6;i=i+3){
        if(boxes[i].innerText==move && boxes[i+1].innerText==move && boxes[i+2].innerText==move){
        isWon=true;
    }
}

//check Columns
   for(i=0;i<=2;i++){
   if(boxes[i].innerText==move && boxes[i+3].innerText==move && boxes[i+6].innerText==move){
        isWon=true;
    }
   }
 //Check Diagonals
 if  ((boxes[0].innerText === move && boxes[4].innerText === move && boxes[8].innerText === move) ||
            (boxes[2].innerText === move && boxes[4].innerText === move && boxes[6].innerText === move)
        ) {
            isWon=true;
        }
 
});
 return isWon;
};

//reset function to clear the board and reset the game state
  let reset=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.classList.remove("cross","circle");
    
    });
        document.querySelector('.winner').style.display = 'none';
        document.querySelector('.newgame-btn').style.display = 'none';

        turn="player1"; //Reset the turn to player1 for the new game
        isGameOver=false; //Reset the game over flag for the new game
};

//checking Draw
let checkDraw=()=>{
    
    for(let box of boxes){
        if(box.innerText===""){
            return false;
        }
    }
        return true;
    // M-2 if (count === 9 && !isWinner) {
    //   gameDraw();
    // }
    };


//turnwise
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(isGameOver || box.innerText!=""){    //prevent Overwriting the box if it is already filled
            return ;
        }


        if(turn==="player1"){    //choosing a player and assigning the next turn 
        box.innerText="X";
        box.classList.add("cross");
        turn="player2"; 
}   
    else{
        box.innerText="O";
        box.classList.add("circle");
        turn="player1";
    }  
    if(result()){
        console.log(`${box.innerText} WON`);
        document.querySelector('.winner').style.display = 'block';
        document.querySelector('.newgame-btn').style.display = 'block';
       document.querySelector('.winner').innerHTML = `CONGRATULATIONS!! 
            🎉🎉🎉🎊🎊🎊<br> Player ${box.innerText==="X"?"1":"2"} <br> ${box.innerText} WINS`;
       isGameOver=true; //Set the game over flag to true when a player wins
        setTimeout(()=>alert("MATCH OVER"),50) //Display after 50ms to avoid the alert being displayed before the last move is rendered on the screen
    }
    else if(checkDraw()){
        isGameOver=true;
        document.querySelector('.winner').innerHTML =`IT'S A DRAW! 🤝<br> No Winner`;
        document.querySelector('.winner').style.display = 'block';
        document.querySelector('.newgame-btn').style.display = 'block';
         isGameOver=true; 
        setTimeout(()=>alert("MATCH OVER"),50)
     }
    }
)
})
 

//RESET BUTTON
document.querySelector('.reset').addEventListener('click',reset);


//NEW GAME BUTTON
document.querySelector('.newgame-btn').addEventListener('click',reset);
  

//in button use button.disabled=true; to disable the button and button.disabled=false; to enable it again.