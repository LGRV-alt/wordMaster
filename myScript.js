const gameBoard = document.querySelector(".gameBoard");
const gameBox = document.querySelectorAll(".gameBox");


let word = ""

const maxLength = 5;

let currentLetter = "";

function getLetter(){
    document.addEventListener("keydown",(event)=>{
        if(isLetter(event.key)){
            currentLetter = event.key;
            word += event.key;
            console.log(currentLetter, word)
        }
    })
}


function isLetter(letter){
    return /^[a-zA-Z]$/.test(letter);
}

function splitDiv(array){
    array.forEach(div){
        
    }


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




function listen(array){
    array.forEach(div =>{
        if(div.innerHTML == ""){
            document.addEventListener("keydown", (event)=>{
                div.innerHTML = event.key;
            })
        }
    })
}







