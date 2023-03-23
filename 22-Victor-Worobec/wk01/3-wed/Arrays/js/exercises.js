const cLog = function (textToLog) {
    console.log(`${ textToLog }`);
}

// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

cLog(`The max of the two numbers is ${ maxOfTwoNumbers(20, 14) }`);

const maxOfThree = function (num1, num2, num3) {
    if (num1 > num2 && num3) {
        return num1;
    }
    else if (num2 > num1 && num3) {
        return num2;
    }
    else return num3;
}

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

cLog(`The max of the the three numbers is ${ maxOfThree(2, 14, 1) }`);

const isVowel = function (character) {
    if (character === `a` || character === `e` || character === `i` || character === `o` || character === `u`) {
        return true;
    }
    else return false;
}

cLog(`Is vowel = ${ isVowel(`t`) }`);
cLog(`Is vowel = ${ isVowel(`i`) }`);
cLog(`Is vowel = ${ isVowel(`o`) }`);
cLog(`Is vowel = ${ isVowel(`u`) }`);

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

cLog(`The sum of the given array is ${ sumArray([2, 3, 5, 10]) }`);

const multiplyArray = function (numbers) {
    let total = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        total = total * numbers[i];
    }
    return total;
}

cLog(`The total of the array multiplied is ${ multiplyArray([2, 6, 7, 1]) }`);

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string) {
    const output = [];
    
    for (let i = string.length - 1; i >= 0; i--) {
        output.push(string[i]);
    }
    return output;
}

cLog(`The reverse of the parsed string is ${ reverseString(`function`) }`);

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (arrayOfStrings) {
    let longestWord = arrayOfStrings[0];

    for (let i = 0; i < arrayOfStrings.length; i++)
    {
        if (arrayOfStrings[i].length > longestWord.length) {
            longestWord = arrayOfStrings[i];
        }
    }
    return longestWord;
}

const stringsArray = [`Bob`, `Marley`, `Frank`, `Sinatra`];
cLog(`The longest word in the array is ${ findLongestWord(stringsArray) }`);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (arrayOfStrings, stringLength) {
    const outputArray = [];

    for (let i = 0; i < stringsArray.length; i++) {
        if (stringsArray[i].length >= stringLength) {
            outputArray.push(stringsArray[i]);
        }
    }

    return outputArray;
}

const testStringLength = 5;
cLog(`The strings with a minimum length of ${ testStringLength } are ${ filterLongWords(stringsArray, testStringLength ).join(", ") }`);


// ## Bonus

cLog(`\n*****BONUS MATERIAL*****`);

// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const lettersOfWord = [`H`, `A`, `N`, `G`, `M`, `A`, `N`];
const guessedLetters = [];

// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const guessLetter = function (guessedLetter) {
    for (let i = 0; i < lettersOfWord.length; i++) {

        if (guessedLetter === lettersOfWord[i]) {
            guessedLetters[i] = lettersOfWord[i];
            cLog(`Congratulations! You found a matching letter!`);
        }
        if (guessedLetters[i] === undefined) { //if element is empty, replace with `*` to be show in full string
            guessedLetters[i] = `*`;
            cLog(`No matching letters...`);
        }
    }
    cLog(guessedLetters.join(`, `)); 

    if (guessedLetters.join(``) === lettersOfWord.join(``)) {
        cLog(`You win!`);
    }
}

guessLetter(`A`);
guessLetter(`H`);
guessLetter(`P`);
guessLetter(`N`);
guessLetter(`G`);
guessLetter(`M`);

cLog(`\n***WHEEL OF FORTUNE***`);

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

const lettersOfWOF = [`H`, `A`, `N`, `G`, `M`, `A`, `N`];
const guessedLettersWOF = [];
let rewardAmount = 0;
let currentRandom = 0;

const wheelOfFortune = function (guessedLetter) {
    cLog(`\n\nYou guessed ${ guessedLetter }!`);
    let amountOfMatches = 0;

    for (let i = 0; i < lettersOfWOF.length; i++) {
        //cLog(`Element ${ i } is current being checked`); //for testing
        currentRandom = Math.ceil(Math.random() * 10); //generates a random integer 1-10; ceil() rounds float upwards

        if (guessedLetter === lettersOfWOF[i]) { //does the guessed character = the first element of the word to be guessed?
            guessedLettersWOF[i] = lettersOfWOF[i]; //if so, store 
            rewardAmount += currentRandom;
            amountOfMatches++;

            if (amountOfMatches > 1) {
                cLog(`Congratulations! You found another matching letter and gain ${ currentRandom * amountOfMatches } points!`);
            }
            else if (amountOfMatches > 0) {
                cLog(`Congratulations! You found a matching letter and gain ${ currentRandom } points!`);
            }
            else { //if element is empty, replace with `*` to be show in full string
                guessedLettersWOF[i] = `*`;
                cLog(`No match found... you lost ${ currentRandom } point.`);
            }
        }

        if (guessedLettersWOF[i] === undefined) { //if element is empty, replace with `*` to be show in full string
            guessedLettersWOF[i] = `*`;
            cLog(`No match found...`);
        }
    }
    cLog(guessedLettersWOF.join(`, `));
    cLog(`Points: ${ rewardAmount }`);

    if (guessedLettersWOF.join(``) === lettersOfWOF.join(``)) {
        cLog(`You win with a total of ${ rewardAmount } points!`);
    }
}

wheelOfFortune(`H`); //WHY DOES H RETURN NO MATCH FOUND AS WELL AS MATCH FOUND? 
wheelOfFortune(`G`);
wheelOfFortune(`O`); //DOESNT PRINT NO MATCH LOG... WHY?
wheelOfFortune(`N`);
wheelOfFortune(`A`);
wheelOfFortune(`U`);
wheelOfFortune(`M`);

//its 3am and my brain feels like homebrand canned spaghetti

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.