const gameBoard = document.querySelector(".gameBoard");
const gameBox = document.querySelectorAll(".gameBox");

const word_URL = "https://words.dev-apis.com/word-of-the-day"


let word = ""
let winningWord = ""
const maxLength = 5;
let currentLetter = "";



// Function to get the daily word from API
async function getWord(){
    const promise = await fetch(word_URL);
    const processedResponse = await promise.json();
    console.log(processedResponse);
    return processedResponse.word;
}

getWord().then(result =>{
    winningWord = result;
})

function compareWords(string, array){
    for(let i=0; i<5; i++){
        console.log(array[i].innerHTML, string[i]);
        if(array[i].innerHTML === string[i]){
            console.log("match");
            array[i].classList.add("winningBox");

        }
    }
}




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

function handleEnter(array){
    document.addEventListener("keydown", (event)=>{
        if(event.key =="Enter" && word.length == maxLength){
            compareWords(winningWord, array);
            for(let i=0; i< array.length; i++){
                if(array[i].innerHTML !=""){
                    array[i].classList.remove("gameBox")
                    // console.log(array[i].classList);
                    if(word === winningWord){
                        alert("you Won")
                    }
                    word = ""
                }
            }
            
        }
    })
}

function removeLetter(array){
    document.addEventListener("keydown",(event)=>{
        if(event.key == "Backspace"){
            for(let i=array.length -1; i>-1; i--){
                if(array[i].innerHTML !="" && array[i].classList =="gameBox box"){
                    array[i].innerHTML = "";
                    word = word.slice(0,-1);
                    break;
                }
            }
        }
    })
}





enterKeys(gameBox);
handleEnter(gameBox);

removeLetter(gameBox);






