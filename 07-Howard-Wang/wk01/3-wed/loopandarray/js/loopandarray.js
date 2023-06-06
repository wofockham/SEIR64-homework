// Array and Functions Bonus Material.1
const result = '';
function maxOfTwoNumber(x,y) {
    if (x > y) {
        return result + x
    } else {
        return result + y 
    }
}
console.log(result)

// Array and Functions Bonus Material.2
const larger = '';
function maxOfThree(a,b,c) {
    if (a > b && a > c) {
        return larger + a
    } else if  (b > a && b > c) {
        return larger + b  
    } else {
        return larger + c
    }
}
console.log(larger)

// Array and Functions Bonus Material.3
function checkVowel(x) {
    for(i=0; i < x.length; i++) {
        if (x[i] === 'a' || x[i] === 'e' || x[i] === 'i' || x[i] === 'o' || x[i] === 'u') {
            console.log(`true`)
        } else {
            console.log(`false`)
        }
    }
}

// Array and Functions Bonus Material.4
function sumArray(x) {
    let sum = 0;
    for (i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
function multiplyArray(x) {
    let product = 1;
    for (i = 0; i < x.length; i++) {
        product *= x[i];
    }
    return product;
}

// Array and Functions Bonus Material.5
function reverseString(x) {
    let newString = ``;
    for (i = x.length - 1; i >= 0; i--) {
        newString += x[i];
    }
    return newString;
}

// Array and Functions Bonus Material.6
let longestWord;
let lgth = 0
function findLongestWord(x) {
    for (i = 0; i < x.length; i++) {
        if(x[i].length > lgth) {
            lgth = x[i].length;
            longestWord = x[i];
        }
    }
    console.log(`${longestWord}`)
}

// Array and Functions Bonus Material.7
function filterLongWords (x,y) {
    let newArray = '';
    for (i = 0; i < x.length; i++) {
        if (x[i].length > y) {
            newArray += x[i] + ' ';
        }
    }
    return [newArray];
}
