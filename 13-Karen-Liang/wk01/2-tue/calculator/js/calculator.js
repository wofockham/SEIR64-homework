// Part 1


// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (num1) {
    const squareResult = num1 * num1;
    console.log(`The result of squaring the ${ num1 } is ${ squareResult }.`)
};

squareNumber(3);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (num1) {
    const halfResult = num1 / 2;
    console.log(`Half of ${ num1 } is ${ halfResult }.`);
};

halfNumber(5);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
    const percentResult = (num1 / num2) * 100;
    console.log(`${ num1 } is ${ percentResult }% of ${ num2 }`);
};

percentOf(2, 4);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function (radius) {
    const area = Math.round((Math.PI * radius * radius) * 100) / 100;
    console.log(`The area for a circle with a radius ${ radius } is ${ area }`);
};

areaOfCircle(2);



// Part 2

/* Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3). */

const calculateNumber = function (num1) {
    const halfResult = num1 / 2;
    const squareResult = halfResult * halfResult;

    const area = Math.PI * squareResult * squareResult;
    console.log(`The area of a circle is ${ area } with the result of ${ squareResult } as the radius.`);

    const percentResult = (area / squareResult) * 100;
    console.log(`${ percentResult }% of the area is of ${ squareResult }.`);
};

calculateNumber(1);