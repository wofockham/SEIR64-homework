// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function ( a, b ) {
    if ( a > b ) {
        return a;
    } else {
        return b;
    }
}

// console.log(maxOfTwoNumbers(1,100));
// console.log(maxOfTwoNumbers(50,1));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function ( a, b, c ) {
    if ( a >= b && a >= c ) {
        return a;
    } else if ( b >= a && b >= c ) {
        return b;
    } else {
        return c;
    }
}

// console.log(maxOfThree(1,2,3));
// console.log(maxOfThree(1,4,3));
// console.log(maxOfThree(6,6,3));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const ifVowel = function ( str ) {
    if ( str === 'a' ) {
        return true;
    } else if ( str === 'e' ) {
        return true;
    } else if ( str === 'i' ) {
        return true;
    } else if ( str === 'o' ) {
        return true;
    } else if ( str === 'u' ) {
        return true;
    } else {
        return false;
    }
    
}

console.log(ifVowel( 'e' ));
console.log(ifVowel( 'l' ));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (arr) {
    let sum = arr[0]
    for ( i = 1; i < arr.length; i++ ) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4]));

const multiplyArray = function (arr) {
    let product = arr[0];
    for ( i = 1; i < arr.length; i++ ) {
        product = product * arr[i];
    }
    return product
}

console.log(multiplyArray([1,2,3,4]))

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
    arr = str.split('');
    revArr = [];
    while ( arr.length !== 0 ) {
        revArr.push(arr.pop());
    }
    return revArr.join('');
}

console.log(reverseString("jag testar"))

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function (arr) {
    let longestWord = arr[0];
    for ( i = 1; i < arr.length; i++) {
        if ( longestWord.length < arr[i].length ) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(["poke", "stick", "circle"]))

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (arr, a) {
    let longWords = [];
    for ( i = 0; i < arr.length; i++ ) {
        if ( arr[i].length > a ) {
            longWords.push(arr[i]);
        }
    }
    return longWords;
}
console.log(filterLongWords(['number','two','telephone'], 2));
