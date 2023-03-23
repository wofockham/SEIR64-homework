// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function( numb1, numb2 ) {
    if ( numb1 > numb2 ) {
        return numb1 ;
    } else {
        return numb2;
    } 
}

console.log( `If 50 & 70 are the inputs, the largest number will be ${ maxOfTwoNumbers( 50, 70 ) }.` );


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function( numb1, numb2, numb3 ) {
    if ( numb1 > numb2 && numb1 > numb3 ) {
        return numb1 ;
    } else if ( numb2 > numb1 && numb2 > numb3 ){
        return numb2 ;
    } else {
        return numb3;
    } 
}

console.log( `If 50, 70 & 99 are the inputs, the largest number will be ${ maxOfThree( 50, 70, 99 ) }.` );


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowel = function( letter ) {
    const vowelLib = ("aeiouAEIOU");
    return vowelLib.includes( letter ); 
}

console.log( `Check if "o" is a vowel: ${ vowel( "o" ) }` );
console.log( `Check if "U" is a vowel: ${ vowel( "U" ) }` );
console.log( `Check if "z" is a vowel: ${ vowel( "z" ) }` );


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function( array ) {
    let sum = array[ 0 ];
    for ( let i = 1; i < array.length; i++) {
        sum = sum + array[ i ];
    }
    return sum;
}

const multiplyArray = function( array ) {
    let multiply = array[ 0 ];
    for ( let i = 1; i < array.length; i++) {
        multiply = multiply * array[ i ];
    }
    return multiply;
}

console.log( `The sum of 1, 2, 3, and 4 is ${ sumArray( [ 1, 2, 3, 4 ] ) }.` );
console.log( `The multiply of 1, 2, 3, and 4 is ${ multiplyArray( [ 1, 2, 3, 4 ] ) }.` );


// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function( string ) {
    let newString = "";
    for ( let i = string.length-1; i >= 0; i--) {
        newString = newString + string[ i ];
    }
    return newString;
}

console.log( `The reverse of "jag testar" is ${ reverseString("jag testar") }.` );


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function( word ) {
    let longestWord = word[ 0 ];
    for ( let i = 1; i < word.length; i++ ) {
        if ( longestWord < word[ i ] ) {
            longestWord = word[ i ];
        }
    }
    return longestWord;
}

console.log( `The longest word in this array [ chicken, cow, cream, vegetable, milk, cereal, cupboard ] is ${ findLongestWord( [ "chicken", "cow", "cream", "vegetable", "milk", "cereal", "cupboard" ] ) }.` );


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const filterLongWords = function( arrayOfWords, i ) {
    const longWords = [];
    for ( let j = 0; j < arrayOfWords.length; j++ ) {
        if ( arrayOfWords[ j ].length > i ) {
            longWords.push( arrayOfWords[ j ] );
        }
    }
    return longWords;
}

console.log( `The longer words (>5 letters) in this array [ chicken, cow, cream, vegetable, milk, cereal, cupboard ] are ${ filterLongWords( [ "chicken", "cow", "cream", "vegetable", "milk", "cereal", "cupboard" ], 5 ) }.` );