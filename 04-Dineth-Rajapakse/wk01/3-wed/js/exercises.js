// // Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
    if ( a > b ) {
        return a;
    } else ( b > a );
        return b
};

console.log(maxOfTwoNumbers(5,6));
console.log(maxOfTwoNumbers(15, 9));

//// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = function (a, b, c) {
    if ( a > b && a > c ) {
        return a;
    } else if ( b > a && b > c ) {
        return b;
    } else{
        return c;
    }
};
console.log(maxOfThreeNumbers(10, 40, 15));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const isVowel = function (letter) {
    if (letter === 'a', 'e', 'i', 'o', 'u') {
        return 'true';
    }
    else {
        return 'false';
    }
};

console.log(isVowel('u'));
console.log(isVowel('k')); //not working correctly

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.



const sumArray = function (numbers) {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total = numbers[i] + numbers[i];
	}
	return total;
};

console.log(sumArray([1,2,3,4]));
console.log(sumArray([5,6,7,8]));

// not working correctly^

const multiplyArray = function (numbers) {
	let total = 1;
	for (let i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
};

console.log(multiplyArray([1,2,3,4]));
console.log(multiplyArray([5,6,7,8]));
