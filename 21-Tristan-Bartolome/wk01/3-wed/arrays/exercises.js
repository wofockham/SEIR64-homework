// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1, num2) {
    if (num1 < num2){
        return num2;
    }else{
        return num1;
    }
}
console.log(`${maxOfTwoNumbers(5, 10)}`);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThreeNumbers = function (num1, num2, num3) {
    if (num3 > num2 || num3 > num1) {
        return num3;
    }
    else {
        return (num1, num2);
    }
  }
console.log(`${maxOfThreeNumbers(5, 10, 15)}`);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const aVowel = function (char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true;
    }
    else {
        return false;
    }
}
console.log(`${aVowel('a')}`);

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function (numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}
console.log(`${sumArray([1, 2, 3, 4])}`);

const multiplyArray = function (numbers) {
     let total = numbers[0] || 0;
     for (let i = 1; i<numbers.length; i++) {
        total = total * numbers[i];
     }
     return total;
}
console.log(`${multiplyArray([1, 2, 3, 4])}`);
// ## Bonus
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function (string) {
    let result = '';
    for (let i = string.length -1; i >= 0; i--){
        result += string[i];
    }
    return result;

}
console.log(`${reverseString('dog')}`);
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (arrayOfWords) {
    let longestWord = arrayOfWords;
    for (let i = 0; i < arrayOfWords.length; i++ ) {
        let word = arrayOfWords[i];
        if (word.length > longestWord.length){
             longestWord = word;
        }
    }
    return longestWord;
}
console.log(`${findLongestWord(['hey', 'heyy', 'hello'])}`);
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.