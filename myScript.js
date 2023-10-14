const gameBoard = document.querySelector(".gameBoard");
const gameBox = document.querySelectorAll(".gameBox");

const word_URL = "https://words.dev-apis.com/word-of-the-day"


let word = ""
let winningWord = ""
const maxLength = 5;
let currentGuess =1 
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

const asyncPostCall = async (str) => {
    try {
        const response = await fetch('https://words.dev-apis.com/validate-word', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
           },
           body: JSON.stringify({
   
             word: str,
            })
         });
         const data = await response.json();
      
         console.log(data.validWord);
         return data.validWord;
       } catch(error) {

          console.log(error)
         } 
    }

  



// Working on this section -----------------------------

function handleEnter(array){
    let newArr =[]
    for(let i=0; i<array.length; i++){
        if(array[i].classList.contains("gameBox") && array[i].innerHTML !=""){
            newArr.push(array[i]);
            array[i].classList.remove("gameBox")
        }
        word=""
    }
    compareWords(winningWord, newArr);
}

function winningAnswer(str1, str2){
    if(str1 == str2){
        alert("winner")
    }
}

function compareWords(string, array){
    let lettersLeft = string;

    for(let i=0; i<5; i++){
        if(array[i].innerHTML === string[i]){
            lettersLeft = lettersLeft.replace(array[i].innerHTML, "");
            console.log(lettersLeft)
            array[i].classList.add("winningBox");
        }else{
            if(!string.includes(array[i])){
                array[i].classList.add("greyBox");
        }
        }
    }
    for(let i=0; i<5; i++){
        if(lettersLeft.includes(array[i].innerHTML)){
            lettersLeft = lettersLeft.replace(array[i].innerHTML, "");
            array[i].classList.remove("greyBox");
            array[i].classList.add("orangeBox")
        }else{
        }
    } 
    }

// ----------------------------------------------------



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



function restart(num){
    if(num == 7){
        alert( `you lose the word of the day is ${winningWord}`)
        location.reload();
    }
}


function enter(){
    document.addEventListener("keydown", (event)=>{
        if(event.key =="Enter" && word.length == maxLength){
            validWord();
        }
    })
}

function validWord(){
    asyncPostCall(word).then(result =>{
        if(result){
            currentGuess += 1;
            restart(currentGuess);
            winningAnswer(word, winningWord)
            handleEnter(gameBox);
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
enter();



removeLetter(gameBox);






