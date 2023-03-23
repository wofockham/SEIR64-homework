// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log(maxOfTwoNumbers(33, 35));
console.log(`${maxOfTwoNumbers(33, 35)} is the greater number.`)
// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a,b,c){
    if(a > b && a > c){
        return a;
    }
    else if(b > a && b > c){
        return b;
    }
    else{
        return c;
    }
}
console.log(`the greatest number is ${maxOfThree(22, 33,44)}`);
console.log(`the greatest number is ${maxOfThree(33, 77,22)}`);
console.log(`the greatest number is ${maxOfThree(88, 33,22)}`);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isItAnVowel = function (inputLetter){
    const lowerCase = inputLetter.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    if(vowels.indexOf(lowerCase) >= 0){
    
    // if(lowerCase === "a" || lowerCase === 'e' || lowerCase === 'i' || lowerCase === 'o' || lowerCase === 'u'){
        return true;
    } else{
        return false;
    }
}
console.log(isItAnVowel('s'));
console.log(isItAnVowel('u'));
console.log(isItAnVowel('A'));
console.log(isItAnVowel('U'));
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24

let sumArray = function(num) {
    let currentNum = 0;
    for (let i = 0; i<num.length; i++){
        currentNum += num[i];
    }
    
    return currentNum;
}
    console.log(sumArray([1,2,3,4]));

let multiplyArray = function (num) {
    let currentNum = 1;
    for (let i=0; i<num.length; i++){
        currentNum = currentNum * num[i];
    }
    
    return currentNum;
}
    console.log( multiplyArray([2,3,4,5,6]) );

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

    const reverseString = function(str) {
        const arrayStrings = str.split("");

        const reverseArray = arrayStrings.reverse();
        
        const joinArray = reverseArray.join("");
        return joinArray;
    }
        console.log(reverseString("hello where is my dinner"));
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (arr) {
    let longest = ""
    for (let i = 0; i< arr.length; i++){
        if(longest.length < arr[i].length ){
            longest = arr[i];
        }   
    }
    return longest;
}

console.log(findLongestWord(["booobchachahcha", "wiiiiitttttdfsdas", "hi"]));
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

// this function crashes computer
const filterLongWords = function (arr, num) {
    const longWordArray = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if(word.length > num){
          longWordArray.push(word);
        }
    }
    return longWordArray;
}
console.log(filterLongWords (['hi', 'foxxxx', 'smiths'], 3));