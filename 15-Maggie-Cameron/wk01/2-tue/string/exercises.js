

//Write a function called squareNumber that will take one argument (a number), square that number, 
//and return the result. It should also log a string like "The result of squaring the number 3 is 9."

//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. 
//It should also log a string like "Half of 5 is 2.5.".

//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.
console.log("is this thing on?")


//The Calculator 
//sqaure number
const squareNumber = function (number) {
    const squareNumber = number ** 2;
    console.log(`The result of squaring the number ${number} is ${squareNumber}.`)
}
squareNumber(3)

//half number
const halfNumber = function (number) {
    const halfNumber = number / 2; 
    console.log(`Half of ${number} is ${halfNumber}.`)
}
halfNumber(5)

//percent of
const percentOf = function (num1, num2) {
    const percentOf = num1 / num2; 
    console.log(`${percentOf} is  ${num2} of ${num1}.`)
}
percentOf(7, .5)

