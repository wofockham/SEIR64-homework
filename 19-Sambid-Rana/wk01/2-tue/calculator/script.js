//The Calculator

//Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. 
const squareNumber = function (num) {
    const squareNum = (num * num).toFixed(2);
    console.log(`The result of squaring ${ num } is ${ squareNum }`);
    return squareNum;
}
squareNumber(20);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
const halfNumber = function (num) {
    const halfNum = (num / 2).toFixed(2);
    console.log(`Half of ${ num } is ${ halfNum }`);
    return halfNum;
}
halfNumber(5)

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function (num1, num2) {
    const percent = ((num1 / num2) * 100).toFixed(2)
    console.log(`${ num1 } is ${ percent }% of ${ num2 }`)
}
percentOf(6,7);

//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
const areaOfCircle = function (radius) {
    const area =( Math.PI * radius ** 2).toFixed(2);
    console.log(`The area for circle with radius ${ radius } is ${ area }`);
    return area;
}
areaOfCircle(5);

// Bonus: Round the result so there are only two digits after the decimal.

// Part 2
const calculation = function (num) {
    const half = halfNumber(num); // Take half of the number and store the result.
    const square = squareNumber(half); // Square the result of #1 and store that result.
    const area = areaOfCircle(square); // Calculate the area of a circle with the result of #2 as the radius.
    const percentage = percentOf(area, square) // Calculate what percentage that area is of the squared result

    
}
calculation(10);
