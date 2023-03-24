// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
}

// const isSquare = function ( obj ) {
//     return obj.length === obj.width;
// }

// const area = function ( obj ) {
//     return obj.length * obj.width;
// }

// const perimeter = function ( obj ) {
//     return 2*(obj.length + obj.width);
// }

// consider turning into method

const rectangle = {
    isSquare: function ( obj ) {
        return obj.length === obj.width;
    },
    area: function ( obj ) {
        return obj.length * obj.width;
    },
    perimeter: function ( obj ) {
        return 2*(obj.length + obj.width);
    }
}

// console.log(rectangle.area(rectangleA));
// console.log(rectangle.isSquare(rectangleA));
// console.log(rectangle.perimeter(rectangleA));

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangle = {
    isEquilateral: function ( obj ) {
        return obj.sideA === obj.sideB === obj.sideC;
    },
    isIsosceles: function ( obj ) {
        test1 = obj.sideA === obj.sideB;
        test2 = obj.sideA === obj.sideC;
        test3 = obj.sideB === obj.sideC;
        return test1 || test2 || test3;
    },
    area: function ( obj ) {
        return (obj.sideA + obj.sideB + obj.sideC) / 2; // herons formula
    },
    isObtuse: function ( obj ) {
        // a**2 + b**2 < c**2 where a & b is the 2 shorter sides
        sidesArr = Object.values(obj);
        sidesArr.sort((a,b) => a - b); // don't actually know how this works.
        obtuse = sidesArr[0]**2 + sidesArr[1]**2 > sidesArr[2]**2;
        return obtuse;
    }
}

