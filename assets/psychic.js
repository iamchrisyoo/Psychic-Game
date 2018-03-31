var letterOptions = ["c", "h", "r","i", "s"];
var selectedLetter = "";
var wrongLetters = [];


var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

function startGame () {
    selectedLetter = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    
    guessesLeft = 10;
    wrongLetters = [];

    document.getElementById("remainingGuess").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;
    document.getElementById("guessedLetters").innerHTML = wrongLetters;

    console.log(selectedLetter);
    console.log(wrongLetters);
}

function checkLetter (letter){
    var matchedLetter = false;
    if(selectedLetter == letter) {
        matchedLetter = true;
    }
    else{
        wrongLetters.push(letter);
        guessesLeft--
    }
}

function roundComplete(){
    console.log("Win Count: " + winCount + "|Loss Count: " + lossCount + "| Guesses Left:" + guessesLeft);
    document.getElementById("remainingGuess").innerHTML = guessesLeft;
    document.getElementById("guessedLetters").innerHTML = wrongLetters;
    if (selectedLetter == event.keyCode){
        winCount++;
        alert("You Won!");
    document.getElementById("winCount").innerHTML = winCount;
    startGame();
    }
    else if (guessesLeft == 0){
        lossCount++;
        alert("You Lost!");
        document.getElementById("lossCount").innerHTML = lossCount;
    startGame();
    }

}


startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterGuessed);
    roundComplete(); 
    console.log(letterGuessed);
}