
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(maxOfTwoNumbers(10,2));
console.log(maxOfTwoNumbers(4,8));




// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
    if (a > b && a > c) {
        return a;
    } if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(5, 6, 1));




// 3. Write a function that takes a character (i.e. a string of length  str.length(1) and returns true if it is a vowel, false otherwise.

const isVowel = function (char) {
    if (char === ('a' || 'e' || 'i' || 'o' || 'u')) {
        return 'true';
    } else {
        return 'false';
    }
}
console.log(isVowel("a"));
console.log(isVowel("u"));



// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

// // how to write it like ?? -> const sumArray = function [1, 2, 3, 4]
// The way we are taught?
const sumArray = [1, 2, 3, 4];  // array declared

    let sum = 0; // start counting at 0 

    for (let i = 0; i < sumArray.length; i++) { // declare each value in array 

    sum += sumArray[i]; // += addition assignment, adding the value of sumArrays to sum 
};

console.log(sum);



// how to write it like ?? -> const multiplyArray = function [1, 2, 3, 4]
// The way we are taught?
const multiplyArray = [1, 2, 3, 4] 

    let result = 1; // multiply by 1. If 0, result = 0

    for (let i = 0; i < multiplyArray.length; i++ ) {
        result *= multiplyArray[i];
    };

console.log(result);


// Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj". 

const reverseString = function (a) {
    const splitString = a.split(''); // split values, '' for 2 words
 
    const reverseArray = splitString.reverse(); // reverse the split values
 
    const joinArray = reverseArray.join(''); // join split values, '' split into 2 words
    
    return joinArray; // return result
}
 
console.log(reverseString("jag tester"));



// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one. 

const longestWord = ['Pineapple', 'Apple', 'Pear', 'Lychee'];
    
    longestWord.sort(); // sort from ascending order
    
    let lastElement = longestWord[longestWord.length - 1]; // find the last value in array. -1 as array starts on 0, whereas length starts from 1, therefore we -1
   
console.log(lastElement); // print last 



// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i. 

// unsure if correct method to use

const longWords = ['Pineapple', 'Apple', 'Pear', 'Lychee']; // array
    
    result = longWords.filter(longWords => longWords.length > 5); // filters characters, if equal or more than 5, return word
    
console.log(result); 



