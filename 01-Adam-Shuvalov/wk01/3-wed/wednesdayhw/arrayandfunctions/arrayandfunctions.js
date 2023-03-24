console.log('Wednesday Homework')

//1. maxOfTwoNumbers

console.log('1.maxOfTwoNumbers');

const maxOfTwoNumbers = function (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log(maxOfTwoNumbers(10,15))

// 2.maxOfThree

console.log('2.maxOfThree');

const maxOfThree = function (a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}

console.log(maxOfThree(10,15,20))
console.log(maxOfThree(20,15,10))
console.log(maxOfThree(10,20,15))

// 3. vowelCheck

console.log('3.vowelCheck');

const vowelCheck = function (a) {
    if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u') {
        return true
    } else {
        return false
    }
}

console.log(vowelCheck('a'))
console.log(vowelCheck('b'))
console.log(vowelCheck('i'))
console.log(vowelCheck('o'))
console.log(vowelCheck('u'))
console.log(vowelCheck('z'))

// 4. arrays

console.log('4. arrays');


const allTheNumbers = [ 1, 2, 3, 4, 5, 6, 7 ];

const sumArray = function (array) {
    let total = 0;
    for (let i = 0; i < array.length; i ++) {
        total = total + array[i];
    }
    return total
};

console.log(sumArray(allTheNumbers))

const multiplyArray = function (array) {
    let total = 1;
    for (let i = 0; i < array.length; i ++) {
        total = total * array[i]
    }
    return total;
};

console.log(multiplyArray(allTheNumbers));




// 5. Define a function `reverseString`

console.log('5. reverseString');

const reverseString = function (string) {
    let newWord = '';
    for (let i = string.length - 1; i >= 0; i --) {
        newWord += string[i]
    };
    return newWord
};

console.log(reverseString('Hello good sir'));
console.log(reverseString('desrever si sihT'));

// 6. findLongestWord

console.log('6. findLongestWord');

const arrayOfMyBigWords1 = ['word', 'bigword', 'biggerword', 'onomatopoeia'];
const arrayOfMyBigWords2 = ['cat', 'bat', 'onomatopoeia', 'house'];


const findLongestWord = function (arrayOfWords) {
    let longestWord = '';
    for (let i = 0; i < arrayOfWords.length; i++) {
            if (arrayOfWords[i].length > longestWord.length) {
                longestWord = arrayOfWords[i];
            } 
        }
    return longestWord.length;
}

console.log(findLongestWord(arrayOfMyBigWords1))
console.log(findLongestWord(arrayOfMyBigWords2))

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

// 7. filterLongWords

console.log('7, filterLongWords');

const filterLongWords = function (array, i) {
    let newArray = [];
    for (let j = 0; j < array.length; j++) {
        if (array[j].length > i) {
            newArray.push(array[j]);
        }
    } return newArray
}

console.log(filterLongWords(arrayOfMyBigWords1, 4))
console.log(filterLongWords(arrayOfMyBigWords2, 3))

// # Homework: The Word Guesser

console.log('Homework: The Word Guesser and Wheel of Fortune');

const letterArray = ['f', 'r', 'i', 'e', 'n', 'd', 's'];
const guessArray = [];
const allGuessesArray = []

const guessLetter = function (guess) {
    let reward = 0;
    for (let i = 0; i < letterArray.length; i++) {
        if (guess === letterArray[i]) {
            guessArray.push(letterArray[i]);
            reward = reward + Math.floor(Math.random() * 101) * guessArray.length;
            console.log(`You found a new letter: ${guess}.\nCurrently you have found the following letters: ${guessArray}`);
            if (letterArray.length === guessArray.length) {
                console.log(`You got all the letters! You get a $${reward} prize!`);
            } 
        } else {
            reward = reward - Math.floor(Math.random() * 101);
        }
    
    } 
};

guessLetter('s');
guessLetter('i');
guessLetter('e');
guessLetter('n');
guessLetter('d');
guessLetter('t');
guessLetter('r');
guessLetter('t');
guessLetter('f');


