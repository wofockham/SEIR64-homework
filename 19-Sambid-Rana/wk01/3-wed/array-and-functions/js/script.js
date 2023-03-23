// Array and Functions

// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(maxOfTwoNumbers(5, 10))
console.log(maxOfTwoNumbers(15, 10))

// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1, num2, num3) {
    if (maxOfTwoNumbers(num1, num2) < num3) {
        return num3
    } else {
        return maxOfTwoNumbers(num1, num2)
    }

}
console.log(maxOfThree(5, 10, 15))
console.log(maxOfThree(5, 10, 15))
console.log(maxOfThree(60, 50, 70))

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowels = ["a", "e", "i", "o", "u"];

const vowelChecker = function (char) {
    //without loops
    // if (vowels.includes(char)) {
    //     return true
    // } else {
    //     return false
    // }

    // with loops
    for (let i = 0; i < vowels.length; i++) {

        if (vowels[i] === char) {
            return true
        }
    }
    return false
}
console.log(vowelChecker("u"))
console.log(vowelChecker("g"))
console.log(vowelChecker("i"))

// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

// const data = [10, 20, 30, 40, 50]
const data = [1, 2, 3, 4];

const sumArray = function () {
    let sumResult = 0;
    for (let i = 0; i < data.length; i++) {
        sumResult = sumResult + data[i];
    }
    return sumResult
};
console.log(sumArray());

const multiplyArray = function () {
    let multipliyResult = 1;
    for (let i = 0; i < data.length; i++) {
        multipliyResult = multipliyResult * data[i];
    }
    return multipliyResult
};
console.log(multiplyArray());

//BONUS
//5. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
    const stringReverse = str.split("").reverse().join("")
    console.log(stringReverse)

}
reverseString("Hello")
reverseString("Hello Darkness My Old Friend")

// 6. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const fruits = ["Banana", "Strawberries", "Grapes", "AvadaKedavraa", "Apples", "Watermelon", "Blueberries"];

const findLongestWord = function () {
    let longestWordLength = 0;
    let longestWord;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].length > longestWordLength) {
            longestWordLength = fruits[i].length;
            longestWord = fruits[i]
        } 

    }
    return longestWord
}
// fruits.forEach(fruit => {
//     const length = fruit.length;
//     if ()
//     console.log(fruit)
// })

console.log(findLongestWord())

// 7. Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

