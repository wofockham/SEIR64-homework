// squareNumber function
function squareNumber(num) {
  const result = num * num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
}

// halfNumber function
function halfNumber(num) {
  const result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;
}

// percentOf function
function percentOf(num1, num2) {
  const percentage = (num1 / num2) * 100;
  console.log(`${num1} is ${percentage}% of ${num2}.`);
  return percentage;
}

// areaOfCircle function
function areaOfCircle(radius) {
  const area = Math.PI * radius * radius;
  const roundedArea = Math.round(area * 100) / 100;
  console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
  return roundedArea;
}

squareNumber(3); 
halfNumber(5); 
percentOf(2, 4); 
areaOfCircle(2)

