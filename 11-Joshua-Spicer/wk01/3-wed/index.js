// Variables
const word = ['F', 'O', 'X'];
let guessedLetters = ['_', '_', '_'];

// Function to chek the letters in the above word
function guessLetter(letter) {
  let foundLetter = false;
  for (let i = 0; i < word.length; i++) {
    if (letter.toUpperCase() === word[i]) {
      guessedLetters[i] = letter.toUpperCase();
      foundLetter = true;
    }
  }
  console.log(`Current guessed letters: ${guessedLetters.join(' ')}`);
  if (foundLetter) {
    console.log(`Congratulations! You found the letter ${letter.toUpperCase()}!`);
  } else {
    console.log(`Sorry, the letter ${letter.toUpperCase()} is not in the word. Try again and see if you can crack the code!!`);
  }
  if (!guessedLetters.includes('_')) {
    console.log(`Congratulations! You are a word wizard! The word was ${word.join('')}.`);
  }
}

// Testing the function
guessLetter('F');
guessLetter('O');
guessLetter('A');
guessLetter('X');
guessLetter('Z');
