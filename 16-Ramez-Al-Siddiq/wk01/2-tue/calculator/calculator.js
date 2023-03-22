// Part 1

const squareNumber = function(number) {
    const result = Math.pow(number, 2);
    console.log(`The result of squaring the number ${number} number is ${result}.`);
    return result;
}
squareNumber(3);

const halfNumber = function(number) {
    const result = number / 2;
    console.log(`Half of number is ${result}`);
    return result;
}
halfNumber(5);

const percentOf = function (x, y) {
    const result = x/y;
    console.log(`${x} is ${result}% of ${y}`);
    return percentOf;
}
percentOf(2,4);

const areaofCircle = function(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area for a circle with radius ${radius} is ${area}`);
    return area;
}
areaofCircle(2);

// Part 2

const everything = function(a) {
    halfNumber(a);
    b = a;
    squareNumber(b);
    c = b;
    areaofCircle(c);
    d = c;
    percentOf(d,c);
}
everything(2);