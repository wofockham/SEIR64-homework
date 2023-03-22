

// Part 1

const squareNumber = function(numToSquare) {
    const squareResult = Math.pow(numToSquare,2);
    console.log(`The result of squaring the number is ${squareResult}`);
    return squareResult;
}

const halfNumber = function(numToHalf) {
    const halfResult = numToHalf / 2;
    console.log(`Half of ${numToHalf} is ${halfResult}`);
    return halfResult;
}

const percentOf = function(percentNumA, percentNumB) {
    const percentResult = percentNumA / percentNumB * 100;
    console.log(`${percentNumA} is ${percentResult}% of ${percentNumB}`);
    return percentResult;
}

const areaOfCircle = function(radius) {
    const area = Math.round(100 * Math.PI * radius * radius) / 100; // rounding to 2 decimal places
    console.log(`The area of a circle with radius ${radius} is ${area}`);
    return area;
}


// Part 2

const finalCalc = function(inputNum) {
    halfInput = halfNumber(inputNum);
    squareInput = squareNumber(halfInput);
    areaInput = areaOfCircle(squareInput);
    percentArea = percentOf(squareInput, areaInput);
    return percentArea;
}
