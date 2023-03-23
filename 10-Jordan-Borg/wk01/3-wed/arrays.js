// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const filterLongWords = function (arr, num) {
    const longWordArray = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if(word.length> num){
            longWordArray.push(word);
        }
    }
    return longWordArray;
}
console.log(filterLongWords (['how', 'howdy', 'howdydoody'], 3));

// function maxOfTwoNumbers(nums) {
//     let n = nums.length;
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         if (ans >= Math.pow(
//             2, Math.floor(Math.log2(nums[i]) + 1))
//             - 1)
//             continue;
//         for (let j = 0; j < n; j++) {
//             if (i != j)
//                 ans = Math.max(ans,
//                     nums[i] | nums[j]);
//         }
//     }
//     return ans;
// }

// console.log(Math.max(1,2,3,4,5,6)); 

// function maxOfArray(array) {
//     return Math.max.apply(Math, array);
//   }
  
  
//   let array = [1,2,3,4,5,6];
//   console.log(maxOfArray(array)); 

  

// function isVowel(argument){

// 	var text;
// 	var argument = argument.toLowerCase();

//     var vowels = (['a', 'e', 'i', 'o', 'u']);

//     for (var i = 0; i <= vowels.length; i++){
//         if (argument != vowels[i]) {
//             continue;
//         }
//         return true;
//     }
//     return false;
// }

// // See if "A" is a vowel
// var char = "A";

// if (isVowel(char)) {
// 	console.log(char + " is a vowel");
// } else {
// 	console.log(char + " is not a vowel");
// }


// // Set addition
// function sum(numbers) {
// 	var total = 0;
// 	for (var i = 0; i < numbers.length; i++) {
// 		total += numbers[i];
// 	}
// 	return total;
// }
// // Print out the total to the console
// console.log(sum([1,2,3,4]));


// // Set multiplication
// function multiply(numbers) {
// 	var total = 1;
// 	for (var i = 0; i < numbers.length; i++) {
// 		total = (total * numbers[i]);
// 	}
// 	return total;
// }
// // Print out the total to the console
// console.log(multiply([1,2,3,4]));


// ARRAYS ARE REALLY GOOD LISTS OF THINGS

// const beatles = ['John', 'George', 'Paul', 'Ringo'];

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const odd = [1, 3, 5, 7, 9, 11, 13];

// const primes = [2, 3, 5, 7, 11, 13];

// const sales = [234, 15, 78.2];

// // what is this?

// conse me = ['Sydney', '0+', 'Cheesecake', 'slint', false, 'Tabasco'];

// // CUSTOM KEYS
// const HOMETOWN = 0;
// const BLOODTYPE = 1;
// const FAVE_FOOD = 2;
// const FAVE_BAND = 3;
// const PEANUT_ALLERGY = 4;
// const FAVE_SAUCE = 5;

// // NOT LIKE THIS BELOW
// console.log( me[2] );
// console.log( me[FAVE_FOOD] );