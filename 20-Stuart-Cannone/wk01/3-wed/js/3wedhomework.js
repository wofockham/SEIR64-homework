// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
    if (a > b) {
        return a;        
    } else {
        return b;
    }
};

console.log("The greater of the two numbers of 10 and 5 is ", maxOfTwoNumbers(10, 5))


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  };

    console.log("the largest of the numbers 3, 2, and 1 is", maxOfThree(3, 2, 1))


;

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(char) {
    var vowels = "aeiouAEIOU";
    return vowels.indexOf(char) !== -1;
  }

  console.log("true or false s is a vowel ", isVowel("s"))

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

function sumArray(abcd) {
    let sum = 0;
    for (let i = 0; i < abcd.length; i++) {
      sum += abcd[i];
    }
    return sum;
  }
console.log("The sum of 1, 2, 3, 4 is", sumArray([1,2,3,4]))

// Multiply 

function multiplyArray(abcd) {
    let product = 1;
    for (let i = 0; i < abcd.length; i++) {
      product *= abcd[i];
    }
    return product;
  }
  console.log("The multiplication of 1, 2, 3, 4 is", multiplyArray([1,2,3,4]))

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(string) {
    let reversedStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversedStr += string[i];
    }
    return reversedStr;
  }
  let myString = "jag testar";
  let reversedString = reverseString(myString);
  console.log(reversedString); 

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

function findLongestWord(words) {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord.length;
  }
  let myWords = ["cat", "bird", "frog", "elephant"];
let longestWordLength = findLongestWord(myWords);
console.log(longestWordLength);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.