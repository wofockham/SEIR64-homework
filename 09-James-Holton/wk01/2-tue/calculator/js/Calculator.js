 const squareNumber = function (num) {
    const square = num * num;
    // const logged = `The result of squaring the number ${ num } is ${ square }.`;
    // console.log(`The result of squaring the number ${ num } is ${ square }.`);
    return square;
 };
// squareNumber(5);

const halfNumber = function (num) {
    const result = num / 2;
    // const logged = `Half of ${ num } is ${ result }.`
    // console.log(`Half of ${ num } is ${ result }.`);
    return result;
};
// halfNumber(10);

const percentOf = function (num, num2) {
    const result = num / num2 * 100;
    const r = Number.parseFloat(result).toFixed(1);
    // const logged = `${ num } is ${ r }% of ${ num2 }.`;
    // console.log(`${ num } is ${ result }% of ${ num2 }.`);
    return r;
};
// percentOf(3, 10);

const areaOfCircle = function (radius) {
    const area = radius * radius * Math.PI;
    const a = Number.parseFloat(area).toFixed(2);
    // const logged = `The area for a circle with radius ${ radius } is ${ a }.`;
    // console.log(`The area for a circle with radius ${ radius } is ${ a }.`);
    return a;
};
// areaOfCircle(5);

const combination = function (cmb) {
    const n1 = halfNumber(cmb);
    const n2 = squareNumber(n1);
    const n3 = areaOfCircle(n2);
    const n4 = percentOf(n3, n2);
    console.log(`half of ${ cmb } is ${ n1 }. ${ n1 } squared is ${ n2 }. A circle with radius ${ n2 } is ${ n3 }. ${ n3 } is ${ n4 }% of ${ n2 }.`);
};
combination(10);