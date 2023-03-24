// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

const drEvil = function ( amount ) {
    if ( amount >= 1000000 ) {
        // console.log(`${ amount } dollars (pinky)`) // checking expected outcome
        return `${ amount } dollars (pinky)`
    } else {
        // console.log(`${ amount } dollars`) // checking expected outcome
        return `${ amount } dollars`
    }
}

// drEvil(10); // 10 dollars
// drEvil(1000000) // 1000000 dollars (pinky)


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

const mixUp = function ( str1, str2 ) {
    newStr1 = str1.replace(str1.substring(0,2), str2.substring(0,2));
    // console.log(newStr1); // checking expected outcome
    newStr2 = str2.replace(str2.substring(0,2), str1.substring(0,2));
    // console.log(`${ newStr1 } ${ newStr2 }`); // checking expected outcome
    return `${ newStr1 } ${ newStr2 }`;
}


// mixUp('mix', 'pod') //: 'pox mid'
// mixUp('dog', 'dinner') //: 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

const fixStart = function ( str1 ) {
    argArr = str1.split(""); // split the word into each letter as array
    // console.log(strArr); // checking above
    arr = []
    arr.push(argArr[0]); // put first letter of of argument array into new array
    for (let i = 1; i < argArr.length; i++ ) { // iterate through remaining array and replace with * if it matches starting letter.
        if (argArr[i] === argArr[0]) {
            arr.push('*');
        } else {
            arr.push(argArr[i])
        }
    }
    // console.log(arr); // checking
    newStr1 = arr.join("");
    // console.log(newStr1); // checking
    return newStr1;
}

// fixStart('babble') //: 'ba**le'

// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

const verbing = function ( str ) {
    if ( str.length >= 3 ) {
        if (str.slice(-3) !== 'ing') {
            str = str + 'ing';
        } else {
            str = str + 'ly';
        }
    }
    console.log(str)
}

// verbing('swim') //: 'swimming' // 
// verbing('swimming')// 'swimmingly'
// verbing('go') //: 'go'

// Not Bad
// Create a function called notBad that takes a single argument, a string.

const notBad = function ( str ) {
    const notIndex = str.indexOf('not');
    const badIndex = str.indexOf('bad');
    if (( notIndex !== -1 ) &&  (badIndex !== -1)){
        if (notIndex < badIndex) {
            const strBad = str.slice(notIndex);
            // console.log(strBad) // checking 
            const newStr = str.replace(strBad, 'good!');
            console.log(newStr);
        }
    } else {
        console.log(str);
    }
}

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

  notBad('This dinner is not that bad!') //: 'This dinner is good!'
  notBad('This movie is not so bad!')//: 'This movie is good!'
  notBad('This dinner is bad!')//: 'This dinner is bad!'