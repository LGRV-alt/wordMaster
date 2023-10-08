const gameBoard = document.querySelector(".gameBoard");
const gameBox = document.querySelectorAll(".gameBox");


let word = ""

const maxLength = 5;

let currentLetter = "";


function isLetter(letter){
    return /^[a-zA-Z]$/.test(letter);
}





function enterKeys(array){
    document.addEventListener("keydown", (event)=>{
        if(isLetter(event.key)){
            for(let i=0; i<array.length; i++){
                if(array[i].innerHTML =="" && word.length != maxLength){
                    array[i].innerHTML = event.key;
                    word += event.key;
                    console.log(word)
                    break;
                }
            }
        }
    })
}




function removeLetter(array){
    document.addEventListener("keydown",(event)=>{
        if(event.key == "Backspace"){
            for(let i=array.length -1; i>-1; i--){
                if(array[i].innerHTML !=""){
                    array[i].innerHTML = "";
                    word = word.slice(0,-1);
                    break;
                }
            }
        }
    })
}





enterKeys(gameBox)

removeLetter(gameBox);






