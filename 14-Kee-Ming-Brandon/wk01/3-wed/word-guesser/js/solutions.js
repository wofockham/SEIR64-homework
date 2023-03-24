// # Homework: The Word Guesser (include bonus: award and limited try without hangman graphic)
console.log( "Let's play the Word Guesser! Type guessLetter('put your guess letter in CAPITAL here'). Only 6 wrong letters are allowed, else you lost!");

const letterOfWords = [ "C", "A", "M", "E", "R", "A" ];
const guessedLetter = [ "_", "_", "_", "_", "_", "_" ];
let reward = 0;
let chance = 6;

const randomAmount = function() {
    return Math.floor( Math.random() * ( 100 - 50 ) + 1 );
}

// Write a function called guessLetter that will:
const guessLetter = function( newLetter ) {
    const amountForRound = randomAmount ();
    if ( guessedLetter.includes( newLetter ) ) {
        console.log( `${ newLetter } was guessed in the word previously, try a new letter.`);
    } else if  ( letterOfWords.includes( newLetter ) ) {
        for ( i = 0; i < guessedLetter.length; i++ ) {
            if ( letterOfWords[ i ] === newLetter ) {
                guessedLetter[ i ] = newLetter;
                reward = reward + amountForRound;
            }
        }
    } else {
        reward = reward - amountForRound;
        chance--;
        if ( reward < 0 ) {
            reward = 0;
        }
        if ( chance === 0 ) {
            console.log( `Unfortunately, ${ newLetter } is not part of the word and you have just lost the game as you had 6 wrong letters. You do not get any reward =.(` );
            return;
        } else {
            console.log( `Ops, ${ newLetter } is not part of the word. $${ amountForRound } was deducted from your reward. Your reward is now $${ reward }.` );
            return;
        }
    }

    const printWord = guessedLetter.join( "" );
    if ( printWord.includes( "_" ) ) {
        console.log( `Congratulation! You found a new letter. This is what you got so far ${ printWord }. $${ amountForRound } was added to your reward for each ${ newLetter } you guessed in the word. Your reward is now $${ reward }.` );
    } else {
        console.log( `Congratulation! You won $${ reward }. The word is ${ printWord }.  Well done!` );
    }
}


guessLetter("I");
guessLetter("A");
guessLetter("E");
guessLetter("S");
guessLetter("R");
guessLetter("A");
guessLetter("T");
guessLetter("C");
guessLetter("M");
// lost version below
// guessLetter("P");
// guessLetter("U");
// guessLetter("E");
// guessLetter("K");
// guessLetter("A");
// guessLetter("G");
// guessLetter("X");
// guessLetter("W");



// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.