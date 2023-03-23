//Part 1 Q1

const squareNumber = function (Number1) {
    const squaredNumber1 = (Number1 ** 2);
    console.log(`The result of squaring the number ${ Number1 } is ${ squaredNumber1 }`)
    return squaredNumber1;
}

squareNumber(4);
squareNumber(5);


//Q2 halfNumber

const halfNumber = function (Number2) {
    const halvedNumber = (Number2 / 2); 
    console.log(`Half of ${ Number2 } is ${ halvedNumber }`);
    return halvedNumber;
}

halfNumber(6);
halfNumber(10);




//Q3

const percentOf = function (Number3, Number4) {
    const percentedNumber = ((Number3 / Number4) * 100);
    console.log(`${ Number3} is ${percentedNumber} % of ${Number4} `)
    return (percentedNumber + '%');
}

percentOf(3, 4);
percentOf(5, 10);
console.log(percentOf(3, 4)); //just testing return output with %

const myPI = 3.14;

//Part 1 Q4
const areaOfCircle = function (rad) {
    const area = (rad ** 2) * myPI; //area of circle = pi * r^2
    console.log(`The area for a circle with radius ${ rad } is ${ parseFloat(area.toFixed(2)) }.`) //Extra log string with result rounded to 2 d.p. 
    return parseFloat(area.toFixed(2)); //rounding to 2 d.p.

}

console.log(areaOfCircle(1)); //Testing return output of rounding to 2 decimal places

// Part 2 

const part2Function = function (Number5) {
    const half = halfNumber(Number5);
    const square = squareNumber(half);
    const area2 = areaOfCircle(square);
    const percentage = percentOf(area2, square) + '%';
    
}

part2Function(5);
