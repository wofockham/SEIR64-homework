// Part 1
const squareNumber = function( numb ) {
    const result = numb ** 2; // power of 2
    console.log( `The result of squaring the number ${ numb } is ${ result }.` ); // print a string
    return result;
}

const halfNumber = function ( numb ) {
    const result = numb / 2;
    console.log( `Half of ${ numb } is ${ result }.` );
    return result;
}

const percentOf = function ( numb1, numb2 ) {
    const result = numb1 / numb2 * 100;
    console.log( `${ numb1 } is ${ result }% of ${ numb2 }.` );
    return result;
}

const areaOfCircle = function( radius ) {
    let result = Math.PI * radius ** 2;         // area of circle is pi * radius^2
    result = result.toFixed( 2 );               // limit decimal number to 2
    console.log( `The area for a circle with radius ${ radius } is ${ result }.` );
    return result;
}

// Part 2
const combineFunc = function ( numb ) {
    const half = halfNumber( numb );
    const sqr = squareNumber( half );
    const area = areaOfCircle( sqr );
    const result = percentOf( area, sqr );
    console.log("With my understand 'what percentage that area is of the squared result.' is the percentage of area of circle/squared result");
}

console.log("Let's try out number 10 for part 2");
combineFunc(10);
