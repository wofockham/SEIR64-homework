// Array and Functions

/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

*/

//Part 1 maxOfTwoNumbers

const maxOfTwoNumbers = function(a, b) {
    if (a > b) {
    return a;
    }   
else if (a < b) {
    return b;
    }
    }
    console.log(maxOfTwoNumbers(1, 2));

//Part 2 maxOfThree

const maxOfThree = function(a, b, c) {
    if (a > b && a > c) {
    return a;
    }
else if (b > a && b > c) {
    return b;
    }
else if (c > a && c > b) {
    return c;
    }
    }
console.log(maxOfThree(1,2,3));

//Part 3 vowelChecker

const vowelChecker = function(a) {
    const vowels = ['a', 'e', 'o', 'u'];
    for (i = 0; i < vowels.length; i++) {
    if (a === vowels[0]) {
    return true;
    }
    if (a === vowels[1]) {
    return true;
    }
    if (a === vowels[2]) {
    return true;
    }
    if (a === vowels[3]) {
    return true;
    }
    else {
    return false;
    }
    }
    }
    console.log(vowelChecker('a'));
    console.log(vowelChecker('e'));
    console.log(vowelChecker('o'));
    console.log(vowelChecker('u'));
    console.log(vowelChecker('b'));

    //Part 4 sumArray

    const sumArray = function(input) {
        let x = null;
        for (i = 0; i < input.length; i++) {
            x += input[i];
        }
        return x;
    }
    console.log(sumArray([1,2,3,4]));
    
    const multiplyArray = function(input) {
        let x = 1;
        for (i = 0; i < input.length; i++) {
            x *= input[i];
        }
        return x;
    }
    console.log(multiplyArray([1,2,3,4]));

    //Bonus

    /*
    Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
    Write a function findLongestWord that takes an array of words and returns the length of the longest one.
    Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
    */

    //Part 1 reverseString
    /*
    const reverseString = function(input) {
        const reversedArray = []; reversedArray.length = input.length;
        for (i = input.length; j = 0; i <= input.length; j < input.length; i--; j++) {
        
        }

    }
    */

    //Part 2 findLongestWord

    const findLongestWord = function(input) {
        let maxString = input[0].length;
        let result = input[0];
        for (i = 1; i <input.length; i++) {
        let maximum = input[i].length;
        if (maximum > maxString) {
            result = input[i];
            maxString = maximum;
        }
        }    
        return result;
        }
        console.log(findLongestWord(["mothers", "are", "the", "best"]));

        //Homework: The Word Guesser

        /*
        You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
        Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
        Write a function called guessLetter that will:
        Take one argument, the guessed letter.
        Iterate through the word letters and see if the guessed letter is in there.
        If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
        When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
        It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
        Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
        */

        //Part 1

            const letters = ['F','I','R','E','F','O','X'];
            const guessedWords = [' ',' ',' ',' ','F','O','X'];
            const guessLetter = function(guess) {
            for (i = 0; i < letters.length; i++) {
                if (guess === letters[0]) {
                    guessedWords[0] = letters[0];
                }
                if (guess === letters[1]) {
                    guessedWords[1] = letters[1];
                }
                if (guess === letters[2]) {
                    guessedWords[2] = letters[2];
                }
                if (guess === letters[3]) {
                    guessedWords[3] = letters[3];
                }
                return guessedWords;
                }
                }
                console.log(guessLetter('F'));
                console.log(guessLetter('I'));
                console.log(guessLetter('R'));
                console.log(guessLetter('E'));

            //Bonus: 

            /*
            Start with a reward amount of $0
            Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
            When they guess the word, log their final reward amount.
            */
            
            //Part 2
           
            /*
            const words = ['F','I','R','E','F','O','X'];
            const guessedWords = [' ',' ',' ',' ','F','O','X'];
            let rewardAmount = Math.floor(Math.random() * 10);
            const guessLetter = function(guess) {
                for (i = 0; i < words.length; i++) {
                    if (guess === words[0]) {
                        guessedWords[0] = words[0];
                    }
                    if (guess === words[1]) {
                    guessedWords[1] = words[1];
                    }
                    if (guess === words[2]) {
                    guessedWords[2] = words[2];
                    }
                    if (guess === words[3]) {
                    guessedWords[3] = words[3];
                    }
                    return guessedWords;
                    }
                    }
            console.log(guessLetter('F'));
            console.log(guessLetter('I'));
            console.log(guessLetter('R'));
            console.log(guessLetter('E'));
           
            */

            //Make it more like Wheel of Fortune

            //Make it like Hangman

            /*
            Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
            Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
            Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
            */



