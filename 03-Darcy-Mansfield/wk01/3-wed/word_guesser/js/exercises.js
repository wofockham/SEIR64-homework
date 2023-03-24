
// Word Guesser

let word = ['d', 'o', 'g', 's'];
let guess = ['_','_','_','_'];

const guessLetter = function(letter) {
    let numBlank = 0;
    for (i=0; i<word.length; i++) {
        if (word[i] === letter) {
            guess[i] = letter;
            console.log(`Congrats on finding a new letter. You're one step closer to discovering the greatest pet ever.`);
        }
        if (guess[i] === '_') {
            numBlank++;
        }
    }
    if (numBlank === 0) {
        console.log('Congrats on winning the game. You are blessed with knowledge!')
    }
    console.log(guess);
}


// Wheel of Fortune

let amount = 0;

const wheelFortune = function(letter) {
    let numBlank = 0;
    let winMoney = Math.round(Math.random()*1000);
    console.log(`The money at stake for this round is $${winMoney}!`);
    let correctGuess = 0;
    for (i=0; i<word.length; i++) {
        if (word[i] === letter && guess[i] === '_') {
            guess[i] = letter;
            correctGuess++
            console.log(`Congrats on finding a new letter. You're one step closer to discovering the greatest pet ever.`);
            if (amount > 0) {
                amount += winMoney;
            } else {
                amount = winMoney;
            }
        }
        if (guess[i] === '_') {
            numBlank++;
        }
    }
    if (correctGuess === 0) {
        console.log(`Bad luck, try again!`);
        amount -= winMoney;
        if (amount < 0) {
            amount = 0;
        }
    }
    if (numBlank === 0) {
        console.log('Congrats on winning the game. You are blessed with knowledge!')
    }
    console.log(`You're current prize money is at $${amount}!`)
    console.log(guess);
}