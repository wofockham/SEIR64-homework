// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

//Q1

const maxOfTwoNumbers = function (n1, n2) {
        if (n1 > n2) {
        console.log(n1);
        return n1
    } else {
        console.log(n2);
        return n2;
    }
}

maxOfTwoNumbers(5,55);

// Q2

const maxOfThree = function (n1, n2, n3) {
    const max = Math.max(n1, n2, n3);
    console.log(max);
    return max;
}

maxOfThree(11, 22, 33);

//Q3

const checkVowel = function (letter) {
    if (letter === ['a', 'e', 'i', 'o', 'u']) {
    return true
} else {
    return false
}
}

if (checkVowel() === true) {
    console.log(`function is true`);
} else {
    console.log(`function is NOT true`);
}


checkVowel('a');
checkVowel('e'); //this one is a bit broken - doesn't seem to work

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

//sumArray

const sumArray = function (numbers) {

    let summedValue = 0
    for (let i = 0; i < numbers.length; i++ ){
        summedValue += numbers[i]
        
    }
    return summedValue;
 }
console.log(sumArray([1, 4, 5, 8]));

//multiplyArray

const multiplyArray = function (numbers) {

    let multipliedValue = 1
    for (let i = 0; i < numbers.length; i++) {
        multipliedValue *= numbers[i];
    }
    return multipliedValue;
}

    console.log(multiplyArray([1, 2, 3, 4]));

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (word) {
    let newString = "";
    for (var i = word.length - 1; i >=0; i--) {
        newString += word[i];

    }
    return newString;
}

console.log(reverseString('hello')); //to check console, success but still don't understand?????


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (wordArray) {
    let longestWordLength = 0;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWordLength) {
            longestWordLength = wordArray[i].length
        } 
    }
    return longestWordLength;
}

//Q6 Alternate answer

const findLongestWord2 = function (wordArray) {
    let longestWord = "";
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > longestWord.length) {
            longestWord = wordArray[i]
        } 
    }
    return longestWord.length;
}


console.log(findLongestWord(['Long', 'Longer', 'Longest']));

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

// const filterLongWords = function (wordArray) {
//     let longestWordLength = "";
//     for (let i = 5; i >  )
// }

//if wordLength > i , store it into temp variable and continue looping, else abort and keep current variable

//console.log(filterLongestWords(['Long', 'Longer', 'Longest', 5))