const gameBoard = document.querySelector(".gameBoard");
const gameBox = document.querySelectorAll(".gameBox");


let word = ""

const maxLength = 5;


function board(){
    console.log(gameBox.length);
}

// function enterLetter(value){
//     for(let i=0; i < value.length; i++){
//         if(value.innerHTML ===""){
//             document.addEventListener("keydown", (event)=>{
//                 console.log(event)

//             })
         
//         }

//     }
// }


function isLetter(letter){
    return /^[a-zA-Z]$/.test(letter);
}



function enterKeys(){
    document.addEventListener("keydown", (event)=>{
        if(isLetter(event.key)){
            gameBox.forEach(box=>{
                console.log(checkDiv(box));
                word += event.key;
                box.innerHTML = word;
            });
        };
    });
};


function checkDiv(div){
    if(div.innerHTML ===""){
        return true
    }else{
        return false
    }
}


function addingDiv(array){
    array.forEach(div =>{
        // for(i=0; i<div.length; i++){
            if(div.innerHTML === ""){
                console.log("empty div")
            }
          
    })
}

addingDiv(gameBox)

enterKeys();
board();





