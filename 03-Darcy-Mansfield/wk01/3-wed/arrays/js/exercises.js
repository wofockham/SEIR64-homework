
const maxOfTwoNumbers = function(a, b) {
    if (a < b) {
        return b
    } else if (a > b) {
        return a
    }
}

const maxOfThree = function(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}

const vowelCheck = function(l) {
    if (l==='a' || l==='e' || l==='i' || l==='o' || l==='u') {
        return true
    } else {
        return false
    }
}

const sumArray = function(arrayA) {
    let sum = 0;
    for (i=0; i<arrayA.length; i++) {
        sum += arrayA[i];
    }
    return sum
}

const multiplyArray = function(arrayA) {
    let sum = 1;
    for (i=0; i<arrayA.length; i++) {
        sum *= arrayA[i];
    }
    return sum
}

const reverseString = function(stringA) {
    let revStr = "";
    for (i=stringA.length-1; i>=0; i--) {
        revStr += stringA[i];
    }
    return revStr;
}

const findLongestWord = function(wordArray) {
    let wordLength = 0;
    for (i=0; i<wordArray.length; i++) {
        if (wordArray[i].length > wordLength) {
            wordLength = wordArray[i].length;
        }
    }
    return wordLength;
}

const filterLongWords = function(wordArray, i) {
    longWords = [];
    for (j=0; j<wordArray.length; j++) {
        if (wordArray[j].length > i) {
            longWords.push(wordArray[j]);
        }
    }
    return longWords;
}