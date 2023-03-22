// PART 1- 1

const squareNumber = function (num1) {
    let results = num1 * num1;
    console.log("The result of squaring the number " + num1 + " is " + results. toFixed(2) + ".")
};

squareNumber(3);


//2

const halfNumber = function (num2) {
    let results2 = num2 / 2;
    console.log("Half of " + num2 + " is " + results2. toFixed(2) + ".")
};

halfNumber(5);


//3

const percentOf = function (num3, num4) {
    let results3 = (num3 / num4) * 100
    const finalStatement1 = `${num3} is ${results3}% of ${num4. toFixed(2)}. `
    console.log(finalStatement1)
};
percentOf(2, 4);


//4

const areaOfCircle = function (radius) {
    let results4 = (radius ** 2 * Math.PI);
    const finalStatement2 = `The area for a circle with radius ${radius} is ${results4. toFixed(2)}.`;
    console.log(finalStatement2);
};

areaOfCircle(2)


// // Part 2 -1 Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3) 

const combCalculation1 = function (num5) {
    let part1Result = num5 / 2;
    return part1Result;
}

const combCalculation2 = function( part1Result ){
    let part2Result = part1Result**2;
    return part2Result;
}

const combCalculation3 = function(part2Result){
    let part3Result = Math.PI * part2Result**2;
    return part3Result;
}

const finalCalculation = function(part3Result,part2Result){
    let part4Result = (part3Result/ part2Result)*100 
    console.log(part4Result + "%");
}
    
let result1 = combCalculation1(4);
let result2 = combCalculation2(result1);
let result3 = combCalculation3(result2);
finalCalculation(result3, result2);

// any way of doing it 

const Calculate = function ( num7 ) {
    let halfNum = num7/2;
    let squNum = halfNum**2;
    let cirArea = Math.PI * squNum**2
    let percentage = (cirArea/squNum) * 100
    return percentage;
};
    let result10 = Calculate(4);
    console.log (result10 +"%");

