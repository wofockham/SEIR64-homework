// The following code is just the images for Hangman

const rawString = String.raw`\ `

hangManOne = "\n" +
"  +---+ \n" +
"  |   | \n" +
"      | \n" +
"      | \n" +
"      | \n" +
"      | \n" +
"========= \n"
hangManTwo = "\n" +
"  +---+ \n" +
"  |   | \n" +
"  0   | \n" +
"      | \n" +
"      | \n" +
"      | \n" +
"========= \n"
hangManOThree = "\n" +
"  +---+ \n" +
"  |   | \n" +
"  0   | \n" +
"  |   | \n" +
"      | \n" +
"      | \n" +
"========= \n"
hangManFour = "\n" +
"  +---+ \n" +
"  |   | \n" +
"  0   | \n" +
" /|   | \n" +
"      | \n" +
"      | \n" +
"========= \n"
hangManFive = "\n" +
"  +---+ \n" +
"  |   | \n" +
"  0   | \n" +
" /|" + rawString +  " | \n" +
"      | \n" +
"      | \n" +
"========= \n"
hangManSix = "\n" +
"  +---+ \n" +
"  |   | \n" +
"  0   | \n" +
" /|" + rawString +  " | \n" +
" /    | \n" +
"      | \n" +
"========= \n"
hangManSeven = "\n" +
"  +---+ \n" +
"  |   | \n" +
"  0   | \n" +
" /|" + rawString +  " | \n" +
" / " + rawString +  " | \n" +
"      | \n" +
"========="

//

// Below is all the arrays neccessary to cross check the hidden word 'c' with the 'emptWord' which the user is changing using function input, and the 'alphabet to give all the letters a value.

let c = ['U', 'B', 'U', 'N', 'T', 'U'];
let emptWord = ['_', '_', '_', '_', '_', '_', '_'];
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//

let num = 0;
let wrg = (function(num) { // This function allows the variable 'num' to increase by 1 everytime the function is activated.
    return function() {
        num += 1;
        return num;
    }
}(0));

//

const guessLetter = function (letter) { // the function where all the magic happens (depending on who you ask)

    // I apologise in advance for all the mess that follows

    const alphNum = alphabet.indexOf(letter); // assigning 'alphNum' to the index of the letter provided. Essentially giving a value of 0 - 25 (26 total variables for each letter of alphabet).
    const letnum = c.indexOf(letter); // same thing as 'alphNum; but checking the value across 'c'
    const alpha = (alphNum === alphabet.indexOf(c[letnum])); // 'alpha' is = to the statement: the 'letter' provided is fully equal to a letter in 'c'
    const firstSplice = emptWord.splice(letnum, 1, c[letnum]); // 'firstSplice' is = to the statement: remove the '_' from the array in 'c' and replace it with 'letter'
    let secondSplice = c.indexOf(letter, letnum + 1); // 'secondSplice' will check if there is another copy of the same letter in the array 'c' and replace that as well with 'letter'
    let thirdSplice = c.indexOf(letter, c.indexOf(letter, letnum + 1) + 1); // 'thirdSplice' will repeat this process allowing words with letters that repeat up to 3 times.
    let wordString = `${emptWord[0]} ${emptWord[1]} ${emptWord[2]} ${emptWord[3]} ${emptWord[4]} ${emptWord[5]}`; // 'wordString' combines all the letters from the emptWord array and puts it in a single string.


    for (let k = 0; k < alphabet.length; k++) { // this will run the loop for all values 0-25

        if (c[0] === emptWord[0] && c[1] === emptWord[1] && c[2] === emptWord[2] && c[3] === emptWord[3] && c[4] === emptWord[4] && c[5] === emptWord[5]) { // this checks to see if 'c' matches 'emptWord'

            if (wrg() > 6) {

                console.log('Too late. You have already died! \n' + 'start again by refreshing the page');
                return wordString; // this will show up if you tried to solve it after dying.

            } else {

                console.log('Well done! You have figured out the word without dying.')
                return wordString; // this will show up if 'c' = 'emptWord' and you haven't died yet.
            }

        } else {

            if (alpha) { // if 'letter' is equal to a letter in 'c'
                firstSplice;

                for (l = -1; l < c.length; l++) { // will run loop for all 6 letters
                    
                    if (secondSplice > 0) { // if there is two matching letters in 'c'
                        emptWord.splice(secondSplice, 1, c[secondSplice]); // this will remove 2 '_'s in 'emptWord' that match with the letters in 'c'

                        for (l = -1; l < c.length; l++) { // same loop repeated to check for 3 matching letters

                            if (thirdSplice > 0) { // if there is 3 matching letters in 'c'
                                emptWord.splice(thirdSplice, 1, c[thirdSplice]); // this will remove 3 '_'s in 'emptWord' that match with the letters in 'c'
                                return `${emptWord[0]} ${emptWord[1]} ${emptWord[2]} ${emptWord[3]} ${emptWord[4]} ${emptWord[5]}`;
                                
                            } else {
                                return wordString; // will return the 2 letters that were matched in the previous if statement
                            }
                        }

                    } else {

                        return wordString; // will return the single letter that matched 'c'
                    }
                }

            } else { // else, the 'letter' is not equal to any letter in array 'c'

                let thisVar = wrg() // will add 1 to the list of mistakes.

                // all if statements below will check give a console.log of you failing, how many mistakes you've made, and a matching image displaying hangman which is my favourite part of this function

                if (thisVar === 1) {

                    console.log(`false, you have gussed wrong ${thisVar} time ${hangManOne}`);
                    return wordString;
                
                } if (thisVar === 2) {

                    console.log(`false, you have guessed wrong ${thisVar} times ${hangManTwo}`);
                    return wordString;

                } if (thisVar === 3) {

                    console.log(`false, you have guessed wrong ${thisVar} times ${hangManOThree}`);
                    return wordString;

                } if (thisVar === 4) {

                    console.log(`false, you have guessed wrong ${thisVar} times ${hangManFour}`);
                    return wordString;

                } if (thisVar === 5) {

                    console.log(`false, you have guessed wrong ${thisVar} times ${hangManFive}`);
                    return wordString;

                } if (thisVar === 6) {
                    
                    console.log(`false, you have guessed wrong ${thisVar} times ${hangManSix}`);
                    return wordString;

                } else {

                    console.log('you have gussed wrong too many times and lost' + hangManSeven) // 
                    return '_ _ _ _ _ _'; // if you have failed 7 times, all attemtpts afterwards that are wrong will console.log the dead hangman and saying you lost

                }
            }
        }
    }
};