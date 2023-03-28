const maxOfTwoNumbers = function (num1, num2) { // function works by accepting 2 inputs, checking if num1 or num2 is higher, returning the highest number. If they're equal it will return 'equal'

    if (num1 > num2) {

        return num1;

    } else if (num2 > num1) {

        return num2;

    } else {

        return 'equal';
    }
};

const maxOfThreeNumbers = function (num1, num2, num3) { //similar to previus function but compares three number inputs

    if (num1 > num2 && num1 > num3) {

        return num1;

    } else if (num2 > num1 && num2 > num3) {

        return num2;

    } else if (num3 > num1 && num3 > num2) {

        return num3;

    } else {

        return 'equal';
    }
};

console.log(maxOfThreeNumbers(1, 2, 3))
console.log(maxOfThreeNumbers(10, 2, 3))
console.log(maxOfThreeNumbers(1, 20, 3))
console.log(maxOfThreeNumbers(1, 1, 1))

const characterValue = function (str) { // if 'str' is equal to a letter in a 'vowels' then itll output true, otherwise return false.

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) {

        if (str === vowels[i]) {

            return 'true';
        }
    }
    return 'false';
};

console.log(characterValue('a'))
console.log(characterValue('b'))
console.log(characterValue('e'))
console.log(characterValue('i'))
console.log(characterValue('o'))
console.log(characterValue('u'))
console.log(characterValue('z'))

let sumSubArray = [1, 2, 3, 4];

const sumArray = function (sumSubArray) { // this takes every value in the 'sumSubArray' and adds them together using a loop.

    let arrayNum = 0;

    for (let i = 0; i < sumSubArray.length; i++) {

        arrayNum = sumSubArray[i] + arrayNum;
    }
    return arrayNum;
};

console.log(sumArray(sumSubArray));


let subArray = [1, 2, 3, 4];

const multiplyArray = function (subArray) { // this works similarly to the sumArray function but instead multiplies values together.

    let arrayNum = 1;
    for (let i = 0; i < subArray.length; i++) {

        arrayNum = subArray[i] * arrayNum;
    }
    return arrayNum;
};

console.log(multiplyArray(subArray));


const reverseString = function (str) { // this will start with the last array in 'str' and loop until all letters are returned written backwards.

    let reverseStr = '';

    for (let a = (str.length - 1); a >= 0; a -= 1) {

        reverseStr = reverseStr + str[a];
    }
    return reverseStr;
};

console.log(reverseString('wassup')); // expected output pussaw


let wordArray = ['Hey', 'Hello', 'Greetings', 'Nice to meet you']

const findLongestWord = function (wordArray) { // for each array in wordArray this function will compare the words with one another using a loop to see if the array is smaller or larger, outputing the largest one.

    let longestWord = 0;

    for (let w = 0; w < wordArray.length; w++) {

        const word = wordArray[w];
        const wordLength = word.length;

        if (wordLength > longestWord) {

            longestWord = wordLength;
        }
    }

    return longestWord;

};

console.log(findLongestWord(wordArray));


const filterLongestWord = function (wordArray, j) { //function works by using input value to check length of all words in array and outputting any words with more characters than 'j'

    let longestWord = '';

    for (let w = 0; w < wordArray.length; w++) {

        const word = wordArray[w];
        const wordLength = word.length;

        if (wordLength > j) {

            longestWord = longestWord + word + ', ';
        }
    }
    return longestWord;
};

console.log(filterLongestWord(wordArray, 6));