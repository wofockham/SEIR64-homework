    //Part 1, Rectangle

/*
Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/

const rectangleA = {
    length: 4,
    width: 4,
} 

const isSquare = function(rectangle) {
    if (rectangle.length === rectangle.width) {
        return 'It is a square';
    }
    else {
        return 'It is a rectangle';
    }
    }
    console.log(isSquare(rectangleA));

const areaSquare = function(square) {
    return square.length * square.width;
    }
    console.log(areaSquare(rectangleA));

const perimeter = function(perim) {
    return 2*(perim.length + perim.width);    
    }
    console.log(perimeter(rectangleA));

    //Part 2 - Triangle

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};
const isEquilateral = function(equilateral) {
    if (equilateral.sideA === equilateral.sideB && equilateral.sideB === equilateral.sideC) {
        return 'It is an equilateral triangle';
    } else {
        return false;
    }  
    }
    console.log(isEquilateral(triangleA));

    const isIsosceles = function(isosceles) {
    if (isosceles.sideA === isosceles.sideB || isosceles.sideB === isosceles.sideC || isosceles.sideC === isosceles.sideA) {
        return 'It is an isosceles triangle';
    } else {
        return false;
    }
    }
    console.log(isIsosceles(triangleA));

    const areaofTriangle = function(area) {
    return (area.sideB * area.sideA)/2;    
    }
    console.log(areaofTriangle(triangleA));

    const isObtuse = function(obtuse) {
        if ((Math.pow(obtuse.sideA,2) + Math.pow(obtuse.sideB,2)) > Math.pow(obtuse.sideC,2)) {
          return 'The triangle is obtuse';  
        }
        else {
            return 'The triangle is acute';
        }
    }
    console.log(isObtuse(triangleA));

    //The Cash Register

    /*
    Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. 
    
    Example
    // Input
    const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
    };

    // Output
    cashRegister(cartForParty); // 60.55
    */

    const cartForParty = {  
        banana: "1.25",
        handkerchief: "0.99",
        Tshirt: "25.01",
        apple: "0.60",
        nalgene: "10.34",
        proteinShake: "22.36"
     };

    const cashRegister = function(shoppingCart) {
        let totalPrice = 0;
        for (const item in shoppingCart) {
            totalPrice += parseInt(shoppingCart[item]);   
        }
        return totalPrice;
        };
        console.log(cashRegister(cartForParty));

//Credit Card Validation 

/*
You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
Here are the rules for a valid number:
Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:
9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:
a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
{ valid: true, number: 'a923-3211-9c01-1112' } 
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
*/
const creditCardNumber = [9,9,9,9,'-',9,9,9,9,'-',8,8,8,8,'-',0,0,0,0];

const validateCreditCard = function(number) {
    let sumOfDigits = 0;
    for (i = 0; i < number.length; i++) {
        sumOfDigits += number[i]; 
        if (sumOfDigits > 16) {
            return true;
        }
        if (creditCardNumber[18] % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
        return sumOfDigits;
    }
}
console.log(validateCreditCard(creditCardNumber));

//JavaScript Bank

/*
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
The bank has many accounts. Accounts should be objects that all share a set of common functionality.
Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

Bonus
Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
*/









