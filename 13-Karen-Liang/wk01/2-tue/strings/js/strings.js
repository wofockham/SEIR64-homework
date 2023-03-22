// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

const drEvil = function (num1) {
    let result;
    if (num1 < 1000000) {
        result = (`${ num1 } dollars`);
    } else {
        result = (`${ num1 } dollars (pinky)`);
    };
    console.log(result);
};

drEvil(10); 
drEvil(1000000);


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:'

// EXAMPLE - SUBSTRING
// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// Expected output: "oz"

// console.log(str.substring(2));
// Expected output: "zilla"

// NOTES
// slice / substring(indexStart) - first character to include
// slice / substring(indexStart, indexEnd) - index of first character to exclude

// stringA.slice(0,2) -> starts on 0 and must end with first 2 letters
// stringA.substring(2) -> ignore first 2 letters and get the rest

const mixUp = function (stringA , stringB) {
    const sliceA = stringA.slice(0,2);  // mix
    const sliceB = stringB.slice(0,2); // pod
    console.log(sliceB + stringA.substring(2) + " " + sliceA + stringB.substring(2)); 
};

mixUp('mix', 'pod'); // pox mid
mixUp('dog', 'dinner'); // dig donner