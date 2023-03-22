// Part 1
function squareNumber(number) {
    let result = number * number;
    let formattedResult = result.toFixed(2);
    console.log(`The result of squaring the number ${ number } is ${ formattedResult }.`);
    return formattedResult;
};
squareNumber(3);

function halfNumber(number) {
    let result = Math.round(number / 2);
    let formattedResult = result.toFixed(2);
    console.log(`Half of ${ number } is ${ formattedResult }.`);
    return formattedResult;
};
halfNumber(4);

function percentOf(number1, number2){
    let result = number1 / number2
    let formattedResult = result.toFixed(2);
    let finalResult = formattedResult * 100;
    console.log(`${ number1 } is ${ finalResult }% of ${ number2 }.`);
    return finalResult;
};
percentOf(3, 5);

function areaOfCircle(radius){
    let result = Math.PI * radius * radius;
    let formattedResult = result.toFixed(2);
    console.log(`The area for a circle with radius ${ radius } is ${ formattedResult }.`);
    return formattedResult;
};
areaOfCircle(2);

// Part 2
function performOperations(number) {
    let halfNum = halfNumber(number);
    let squaredNum = squareNumber(halfNum);
    let area = areaOfCircle(squaredNum);
    let percentOfNum = percentOf(area, squareNumber(area));
    return percentOfNum;
}
performOperations(6);