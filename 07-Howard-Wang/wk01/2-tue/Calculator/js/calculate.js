// Part 1.1
function squareNumber(num){
    const result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
}

//Part 1.2
function halfNumber(num){
    const result = num/2;
    console.log(`Half of ${num} is ${result}.`);
}

//Part 1.3
function percentOf(x,y){
    const result = (x/y)*100;
    console.log(`${x} is ${result}% of ${y}.`);
}

//Part 1.4
function areaOfCircle(radius){
    const result = (radius * radius * Math.PI).toFixed(2);
    console.log(`The area for a circle with radius ${radius} is ${result}.`)
}

//Part 2
function calcForMe(x){
    const partOne = x/2;
    const partTwo = partOne * partOne;
    const partThree = Math.PI * partTwo * partTwo;
    const partFinal = (partThree/partTwo)*100;
    return result = partFinal;
    }
    