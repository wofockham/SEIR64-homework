// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const cLog = function (textToLog) { //shortform call of console.log()
    console.log(`${ textToLog } \n\n`);
}

//Part 1
cLog(`*****BELOW IS PART 1*****`)

const squareNumber = function (numberToSquare) {
    const squaredResult = numberToSquare * numberToSquare;
    cLog(`The result of squaring the number ${ numberToSquare } is ${ squaredResult }`);
    return squaredResult;
}

squareNumber(4);

const halfNumber = function (numberToHalf) {
    const halvedNumber = numberToHalf / 2;
    cLog(`Half of ${ numberToHalf } is ${ halvedNumber }`);
    return halvedNumber;
}

halfNumber(6);

const percentOf = function (percentageOfNextArgument, number) {
    const numberIntoPercentages = number / 100;
    const percentageOfParsedNumber = percentageOfNextArgument * numberIntoPercentages;
    cLog(`${ percentageOfParsedNumber } is ${ percentageOfNextArgument }% of ${ number }`);
    return percentageOfParsedNumber;
}

percentOf(50, 250);

const areaOfCircle = function (radius) {
    const area = Math.PI * (Math.pow(radius, 2));
    cLog(`The area for a circle with a radius of ${ radius } is ${ area }!`);
    return area;
}

const areaOfCircleRoundedReturnOnly = function (radius) {
    const output = Math.round(Math.PI * (Math.pow(radius, 2)))
    cLog(`The area (rounded to the closest integer) for a circle with a radius of ${ radius } is ${ output }`)
    return output;
}

areaOfCircle(5);

areaOfCircleRoundedReturnOnly(5);

//Part 2
cLog(`*****BELOW IS PART 2*****`);

const performOperations = function (number) { //Messy function that also performs the console.log actions of previously defined functions
    const finalNumber = percentOf(areaOfCircle(squareNumber(number / 2)), squareNumber(areaOfCircle(squareNumber(number / 2))));
    cLog(`The FINAL NUMBER is ${ finalNumber }`);
    return finalNumber;
}

const performOperationsAndClearLog = function (number) { //Same function as above but clears console before printing final output
    const finalNumber = percentOf(areaOfCircle(squareNumber(halfNumber(number))), squareNumber(areaOfCircle(squareNumber(halfNumber(number)))));
    console.clear(); 
    cLog(`The FINAL NUMBER is ${ finalNumber }`);
    return finalNumber;
}

//I didn't understand what this question was asking but I hope I got it right
performOperations(4); //This is what I think is within the scope of the question (gets wiped by below function)

cLog(`*****THERE IS ANOTHER COMMENTED OUT FUNCTION OF THE ABOVE THAT INCLUDES CONSOLE CLEAR*****`)

//performOperationsAndClearLog(100); //Cleaner version of above function    