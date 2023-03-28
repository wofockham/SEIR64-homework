// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million

const drEvil = function(amount){
    if(amount === 1000000 ) {
        return `${amount} dollars (pinky)`;
    }
    else{
        return `${amount} dollars`;
    }
};
drEvil(10);
drEvil(1000000);

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long
const mixUp = function(a, b){
    return `${b.slice(0,1)}${a.slice(1,2)}${b.slice(2)}, ${a.slice(0,1)}${b.slice(1,2)}${a.slice(2)}`;
};

mixUp("ping", "sdfrt6y");

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long

// const fixStart = function (a) {
//     const firsrLetter = a.charAt(0)
//    return firsrLetter;
//    if(a.slice(1).includes(firsrLetter)){
//         return 
//    }
// };


// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged
const verbing = function (str) {
    if(str.length < 2){
        return str;
    }
        else if(str.slice(-3)=== "ing"){
        return `${str}ly`;
    }
     else{
         return `${str}ing`
     }

};

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence

