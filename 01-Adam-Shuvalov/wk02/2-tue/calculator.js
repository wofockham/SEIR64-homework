console.log('Calculator');

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

//SQUARE NUMBER
console.log('\nsquareNumber:');
const squareNumber = function (number) {
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
}
squareNumber(3);

//HALF NUMBER

console.log('\nhalfNumber:');
const halfNumber = function (number) {
    const result = number / 2;
    console.log(`Half of ${number} is ${result}.`)
    return result;
}
halfNumber(12);

//PERCENT OF

console.log('\npercentOf:');
const percentOf = function (num1, num2) {
    const result = (num1 / num2) * 100
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
};

percentOf(20,200);
percentOf(5,100);

//AREA OF CIRCLE

console.log('\nareaOfCircle:');
const areaOfCircle = function (radius) {
    area = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
    return area;
};

areaOfCircle(5);


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

console.log('\nFinal Calculation:');

const finalCalculation = function (number) {
    const half = halfNumber(number);
    const squared = squareNumber(half);
    const areaOfC = areaOfCircle(squared);
    const percent = percentOf(areaOfC, squared);
    console.log(`\nhalf = ${half} \nsquared = ${squared} \nareaOfC = ${areaOfC} \npercent = ${percent}`);
}

finalCalculation(100);


