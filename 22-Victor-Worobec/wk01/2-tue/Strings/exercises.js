// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

const cLog = function (textToLog) {  //shortcut function of console.log
    console.log(`${ textToLog } \n`);
}

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function (dollars=50) { //REMINDER TO ASK ABOUT DECLARING VARIABLES INSIDE IF STATEMENTS VS PARENT BODY
    if (dollars !== 1000000) {
        const output = `drEvil Function: ${ dollars } dollars`;
        return output;
    }
    else 
    {
        const output = `drEvil Function: ${ dollars } dollars (pinky)`;
        return output
    }
}

cLog(drEvil(46));
cLog(drEvil(1000000));

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (string1, string2) {
    let stringArray1 = Array.from(string1);
    let stringArray2 = Array.from(string2);

    //const newString1 = string1.replace(work1[0], string2[0]); //peforms this function more efficiently
    //const newString2 = string2.replace(work2[0], string1[0]); //peforms this function more efficiently

    for (let i = 0; i < 2; i++)
    {
        const charTemp = stringArray1[i];
        stringArray1[i] = stringArray2[i]
        stringArray2[i] = charTemp;
    }

    const mixedUpOutput = `mixUp Function: ${ stringArray1.join("") } ${ stringArray2.join("") }`;
    cLog(mixedUpOutput);
    return mixedUpOutput;
} 

mixUp(`chupa`, `cabra`);

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

const fixStart = function (string) {
    const firstLetter = string[0];

    let stringArray = Array.from(string); //turns argument into array
    for (let i = 0; i < string.length - 1; i++) {
        stringArray[i] = string[i];
    }

    for (let i = 1; i < string.length; i++) { //loop through array
        if (stringArray[i] === firstLetter) 
        {
            stringArray[i] = `*`;
        }
    }

    cLog(`fixStart Function: ${ stringArray.join("") }`);
    return stringArray;
}

fixStart("eetswae");
fixStart("falafel daffel");

// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function (string) {
    let outputText = string;

    if (string.length > 2)
    {
        if (string[string.length - 3] === "i" && string[string.length - 2] === "n" && string[string.length - 1] === "g") //see string.endsWith("ing")
        {
            outputText = `${ string }ly`
        }
        else
        {
            outputText = `${ string }ing`;
        }
    }

    cLog(`verbing Function: ${ outputText }`);
}

verbing(`swim`);
verbing(`pushing`);
verbing(`do`);

// Not Bad
// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function (string) {
    if (string.search("not") < string.search("bad")) //search() return index of parameter
    {
        string = `This is good`;
        cLog(`notBad Function: ${ string }`);
        return string;
    }
    else (string.search("not") > string.search("bad"))
    {
        cLog(`notBad Function: ${ string }`);
        return string;
    }
}

notBad(`This movie is not bad`);
notBad(`This food is not so bad`);
notBad(`This car is bad but not really`);
notBad(`This show is bad`);