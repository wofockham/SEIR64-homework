//Part 1
const squareNumber = (number) => {
    const ans = number * number;
    console.log(ans);
    return ans;
}

const halfNumber = (number) => {
    const ans = number / 2; 
    console.log(ans);
    return ans;
}

const percentOf = (numOne, numTwo) => {
    const percent = numOne / numTwo * 100;
    console.log(`${numOne} is ${percent}% of ${numTwo}`);
    return percent;
}

const areaOfCircle = (radius) => {
    const area = Math.PI * radius * radius;
    const roundedArea = Math.round(area * 100) / 100;
    console.log(`The area of a circle with radius ${radius} is ${roundedArea}`);
    return Math.round(area * 100) / 100;
}

squareNumber(2);
halfNumber(2);
percentOf(2,4);
areaOfCircle(2);


//Part 2

const doStuff = (number) => {
    const half = halfNumber(number);
    const squaredHalf = squareNumber(half);
    const area = areaOfCircle(squaredHalf);
    const percentOfArea = percentOf(squaredHalf,area);
    
    console.log(percentOfArea);
    return percentOfArea;
}

doStuff(4);

//DrEvil
const drEvil = (amount) => {
    if(amount == 1000000) {
        return `${amount} dollars (pinky)`;
    }
    return(`${amount} dollars`);
}

console.log(drEvil(10));
console.log(drEvil(1000000));

//MixUp
const mixUp = (strOne, strTwo) => {
    const firstLetter = strOne.substring(0,2);
    strOne = `${strTwo.substring(0,2)}${strOne.substring(2, strOne.length)}`;
    strTwo = `${firstLetter}${strTwo.substring(2, strTwo.length)}`;
    return(`${strOne} ${strTwo}`);
}

console.log(mixUp("abc", "def"));

//Verbing
const verbing = (string) => {
    if(string.length >= 3) {
        if(string.slice(-3) === "ing") {
            return(`${string}ly`);
        }

        return(`${string}ing`);
    }

    return string;
}

console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('go'));


//Not Bad    gotta fix this
const notBad = (str) => {
    for ( i = 0; i < str.length-2; i++) {
        if( str.substring( i, i+3) === "not") {
            for ( j = i+3; j < str.length-2; j++) {
                if( str.substring( j, j+3) === "bad") {
                    str = str.replace("not", "good");
                    str = str.slice(i+4, j+3);
                    return str;
                }
            }
            return str;
        }
    }
    return str;
}

console.log(notBad("This dinner is not that bad!"));
















