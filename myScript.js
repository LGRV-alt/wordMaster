const gameBoard = document.querySelector(".gameBoard");


function enterLetter(){
    gameBoard.addEventListener("click", function(event){
        console.log(event.target);
        
    });
};

enterLetter();





