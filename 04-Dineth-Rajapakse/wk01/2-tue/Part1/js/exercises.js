// The Calculator
// Part 1
// Bonus: Round the result so there are only two digits after the decimal.

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. 
//It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(number){
    const result = number * number;
    console.log(`The result of squaring the number ${ number } is ${ result }.`);
};

squareNumber(3);
squareNumber(8);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(number) {
    const result = number / 2;
    console.log(`Half of ${ number } is ${ result }.`);
};

halfNumber(25);
halfNumber(5);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. 
//It should also log a string like "2 is 50% of 4."

const percentOf = function(number1, number2) {
    const result = (number1 / number2) * 100;
    console.log(`${ number1 } is ${ result }% of ${ number2 }.`);
};
percentOf(2, 4);
percentOf(8, 64);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. 
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function(radius) {
    const result = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${ radius } is ${ result }.`);
};

areaOfCircle(2);
areaOfCircle(5);

// Bonus: Round the result so there are only two digits after the decimal.

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.

const part2 = function(number) {
    const result = number / 2;
};

part2(4);



// Square the result of #1 and store that result.

const part2a = function(result) {
    const result2 = result * result;
    console.log(result2);
};
// Calculate the area of a circle with the result of #2 as the radius.

function part2b(result2) {
    const result3 = Math.PI * result2 * result2;
}

// Calculate what percentage that area is of the squared result (#3).

const part2c = function(result3) {
    const result4 = (result3 / result2) * 100;
    console.log(`The area of ${ result3 } is ${ result4 }% of the squared result of ${ result2 }`);
};

