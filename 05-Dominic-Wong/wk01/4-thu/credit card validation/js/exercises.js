// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

const removeDash = function ( str ) {
    let str2 = ""
    for ( i = 0; i < str.length; i++) {
        if ( str[i] !== '-' ) {
            str2 = str2 + str[i];
        }
    }
    return str2;
}

// console.log(removeDash(`9999-9999-8888-0000`)); //testing removeDash function output is 9999999988880000

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers

const is16Digits = function ( creditCard ) { // takes a credit card number string and evaluates whether it is 16 digits and are integers
    if ( creditCard.length === 16 ) {
        return true;
    } else {
        return false;
    }
}

// console.log(is16Digits('99999999888800001')) // result is false

// - You must have at least two different digits represented (all of the digits cannot be the same)

const isUnique = function ( creditCard ) {
    const arr = creditCard.split('');
    const arr2 = [];
    for ( let i = 1; i < arr.length; i++ ) {
        if ( !arr2.includes(arr[i]) ) {
            arr2.push(arr[i]);
        }
    }
    if ( arr2.length >= 2 ) {
        return true;
    } else {
        return false;
    }
}

// console.log(isUnique('9999999988880000')); // returns true

// - The final digit must be even

const lastIsEven = function ( creditCard ) {
    const str = parseInt(creditCard.charAt(creditCard.length - 1));
    if ( str % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

// console.log(lastIsEven('9999999988880000')); // true

// - The sum of all the digits must be greater than 16

const sumIs16Plus = function ( creditCard ) {
    const arr = creditCard.split('');
    let count = 0;
    for ( i = 0; i < arr.length; i++ ) {
        const a = parseInt(arr[i]);
        count = count + a;
    }
    if ( count > 16 ) {
        return true;
    } else {
        return false;
    }
}

// sumIs16Plus('9999999988880000');

const underTen = function ( num ) {
    if ( num > 10 ) {
        const num1 = num.toString();
        const numArr = num1.split("");
        let count = 0;
        for ( i = 0; i < numArr.length; i++ ) {
            count = count + parseInt(numArr[i])
        }
        return count;
    } else {
        return num;
    }
}

// console.log(underTen(11)); // 2

const luhnCheck = function ( creditCard ) {
    let payload = "";
    const checkDigit = parseInt(creditCard.slice(-1));

    for ( let i = creditCard.length - 2; i >= 0; i-- ) {
        payload = payload + creditCard[i]
    }

    const payloadArr = payload.split("");
    const payloadMulti = [];

    for ( let i = 0; i < payloadArr.length; i++ ) {
        if ( i % 2 === 0 ) {
            payloadMulti[i] = underTen(payloadArr[i] * 2);
        } else {
            payloadMulti[i] = underTen(payloadArr[i] * 1);
        }
    }
    
    let count = 0;

    for ( let i = 0; i < payloadMulti.length; i++ ) {
        count = count + parseInt(payloadMulti[i]);
    }

    const checkDigit2 = 10 - ( count % 10 );
    
    if ( checkDigit === checkDigit2) {
        return true;
    } else {
        return false;
    }
}


// check digit = 0
// payload = 000888899999999
// payloadMulti = 000787899999999
// payloadMultiSum = 

const validateCreditCard = function ( creditCard ) { // argument is a string
    const testString = removeDash(creditCard); 
    const test1 = is16Digits(testString);
    const test2 = isUnique(testString);
    const test3 = lastIsEven(testString);
    const test4 = sumIs16Plus(testString);
    const test5 = Number.isInteger(parseInt(testString));
    const test6 = luhnCheck(testString);

    // if ( test1 && test2 && test3 && test4 && test5 ) {
    //     return true;
    // } else {
    //     return false;
    // }
    errorMessage = { valid: false, number: creditCard };
    successMessage = { valid: true, number: creditCard };

    if ( !test1 ) {
        errorMessage.error = "Wrong length";
        return errorMessage;
    } else if ( !test2 ) {
        errorMessage.error = "Not unique";
        return errorMessage;
    } else if ( !test3 ) {
        errorMessage.error = "Last digit not even"
        return errorMessage;
    } else if ( !test4 ) {
        errorMessage.error = "Sum is less than 16"
        return errorMessage;
    } else if ( !test5 ) {
        errorMessage.error = "Contains not integers"
        return errorMessage;
    } else if ( !test6 ) {
        errorMessage.error = "Did not pass Luhn check"
        return errorMessage;
    } else {
        return successMessage;
    }
}

// if ( !test1 ) { create object and say false + error message }

// The following credit card numbers are valid: but doesn't pass luhn check

console.log(validateCreditCard(`9999-9999-8888-0000`));
console.log(validateCreditCard(`6666-6666-6666-1666`)); 

// // The following credit card numbers are invalid:

console.log(validateCreditCard(`a923-3211-9c01-1112`)); // incorrect characters 
console.log(validateCreditCard(`4444-4444-4444-4444`)); // not unique
console.log(validateCreditCard(`1111-1111-1111-1110`)); // not 16
console.log(validateCreditCard(`6666-6666-6666-6661`)); // ends with odd

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.



