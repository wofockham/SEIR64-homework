// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


const maxOfTwoNumbers = function (a,b){
    if (a>b){
        return a;
    }else{
    {
    return b;
    }
    }
}

console.log ( maxOfTwoNumbers(3,5))
console.log (maxOfTwoNumbers(5,5))
console.log (maxOfTwoNumbers(5,3))


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.


const maxOfThree = function (c , d , e) {
    if (c>=d && c>=e){
        return c;
    }
    else if (d>=c && d>=e){
        return d;
    }
    else if (e>=d && e>=c){
        return e;
    }
}

console.log (maxOfThree(1,2,3))
console.log (maxOfThree(3,2,1))
console.log (maxOfThree(1,3,2))


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelFinder = function (character) {
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
      console.log(`${character} is a vowel`);
    } else {
      console.log(`${character} is not a vowel`);
    }
  }

vowelFinder ("a")
vowelFinder ("e")
vowelFinder ("n")
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24. - 1111



const sumArray = function(nums) {
    let sum = 0;
    for (i = 0 ; i < nums.length ; i++) {
    sum += nums[i]}
    return sum;
  }
  
  const multiplyArray = function (nums) {
    let multi = 1;
    for (i=0; i< nums.length ; i++)
    multi *= nums[i]

    return multi;
  }
  
  
  
  console.log(sumArray([1,2,3,4]))
  console.log(multiplyArray([1,2,3,4]))


//   Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

  const reverseString = function (str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  let str = "helloWorld"
   console.log (reverseString(str))



//   Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function (str) {
  const strSplit = str.split("")
  let LongestWord = 0;
  for (i=0 ; i < strSplit.length;i++){
    if (strSplit[i].length>LongestWord){
      longestWord = strSplit[i].length;
    }
  }


}

//   Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i