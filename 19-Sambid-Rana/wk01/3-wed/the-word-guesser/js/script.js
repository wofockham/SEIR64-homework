// The Word Guesser

const word = ["F", "O", "X"];
const guessResult = ['_', '_', '_'];
const randomNo = Math.floor(Math.random() * 100 )

const guessedLetter = function (guessLet) {
    let correctGuess = false;
    let continueGuessing = false;
    let rewardAmount = 0;
    
    for (let i = 0; i < word.length; i++) {

        if (guessLet === word[i]) { // statement for when the guess letter is correct

            guessResult[i] = guessLet;
            correctGuess = true;
            
        }
        if (guessResult[i] !== word[i]) { // to figure out if there are any more letters

            continueGuessing = true;

        }
    }
    if (correctGuess) {
        rewardAmount = rewardAmount + randomNo; // Fix issue
        console.log(`$${rewardAmount}`)
        console.log(`Congratulations, you guessed the letter ${guessLet} correctly: ${guessResult}`);
     
    } else {
       
        console.log(`Wrong guess! Keep trying.`)
    }
    if (continueGuessing === false) {
            
        console.log(`You are the winner, the word was ${guessResult}`)
    }

}


guessedLetter("A")
guessedLetter("X")
guessedLetter("O")
guessedLetter("R")
guessedLetter("T")
guessedLetter("Y")
guessedLetter("F")
