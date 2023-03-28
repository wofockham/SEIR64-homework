// 1
const maxOfTwoNumbers = (numOne, numTwo) => {
    if ( numOne > numTwo ) {
        return numOne;
    }
    return numTwo;
}

console.log(maxOfTwoNumbers(2,4));

// 2
const maxOfThree = (a, b, c) => {
    if ( a > b && a > c) {
        return a;
    }
    if ( b > c ) {
        return b;
    }
    return c;
}

console.log(maxOfThree(2,6,1));
console.log(maxOfThree(1,1,1));

// 3
const vowelCheck = (char) => {
    vowels = "AEIOUaeiou";

    for ( let i = 0; i < vowels.length; i ++ ) {
        if ( vowels[i] === char) {
            return true;
        }
    }

    return false;

}

console.log(`is A a vowel? ${vowelCheck("A")} `);
console.log(`is A a vowel? ${vowelCheck("b")} `);

// 4
const sumArray = (arr) => {
    let answer = 1;
    for ( let i = 0; i < arr.length; i ++ ) {
        answer += arr[i];
    }
    return answer;
}

console.log(sumArray([1,2,3,4,5]));

const multiplyArray = (arr) => {
    let answer = 1;
    for ( let i = 0; i < arr.length; i ++ ) {
        answer *= arr[i];
    }
    return answer;
}

console.log(multiplyArray([1,2,3,4,5]));

// 5
const reverseString = (str) => {
    answer = "";
    for ( let i = str.length-1; i >= 0; i-- ) {
        answer += str[i];
    }
    return answer;
}

console.log(reverseString("hello there"));

// 6
const findLongestWord = (wordArr) => {
    let longestLength = 0;
    let longestIndex = 0;

    for ( let i = 0; i < wordArr.length; i++ ) {
        if( wordArr[i].length > longestLength ) {
            longestLength = wordArr[i].length;
            longestIndex = i;
        }
    }
    return wordArr[longestIndex];
}

console.log(findLongestWord(["hello", "there"]));
console.log(findLongestWord(["hell", "there", "pineapple"]));

// 7 
const filterLongWords = (arr, num) => {
    const result = [];
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i].length > num ) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(filterLongWords(["hello", "jeff", "bro", "watch"], 4));

//Word Guesser

const correctWord = ["F", "O", "X"];
const guessedLetters = ["_", "_", "_"];

let reward = 0;

const guessLetter = (guess) => {
    let guessed = false;
    let wrong = true;
    
    for ( let i = 0; i < correctWord.length; i++ ) {
        if ( correctWord[i] === guess && guessedLetters[i] === "_") {
            guessedLetters[i] = guess;
            reward += (Math.random() * 100);
            wrong = false; 
            guessed = true;
        }

        console.log(guessedLetters[i]);
    }

    if ( wrong ) {
        reward -= (Math.random() * 100);
        console.log("WRONG");
    }

    if ( guessed ) {
        console.log(`$${reward.toFixed(2)}`);
        return "congrats you won";
    }

}


console.log(guessLetter("F"));
console.log(guessLetter("O"));
console.log(guessLetter("Z"));
console.log(guessLetter("X"));





