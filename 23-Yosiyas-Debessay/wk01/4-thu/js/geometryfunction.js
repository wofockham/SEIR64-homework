
const rectangle = {
    height: 4,
    width: 4,

    isSquare(){
        return this.height === this.width;
    },
    area(){
        return this.height * this.width;
    },
    perimeter(){
        return 2 * (this.height + this.width);
    }
 } 
 console.log(`This rectangle has a width of ${rectangle.width} and the length of ${rectangle.height}. It has an area of ${rectangle.area()}, a perimeter of ${rectangle.perimeter()} and is a ${rectangle.isSquare()}`);




//Triangle
  const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4,

    isEquilateral() {
        return this.sideA === this.sideB && this.sideC === this.sideA;
    },

    isIsosceles() {
        return this.sideA === this.sideB || this.sideA === this.sideC || this.sideC === this.sideB;
    },

    area() {
        return 1/2 * (this.sideA * this.sideB);  
    }
  };

  console.log(`Triangle is ${triangle.isEquilateral() ? '' : 'not '}equilateral`);
  console.log(`Triangle is ${triangle.isIsosceles() ? '' : 'not '}isosceles`);
  console.log(`The area of triangle is ${triangle.area()}`);
  



//cashRegister
function cashRegister(cart) {
    let totalPrice = 0;
    for (let item in cart) {
        totalPrice += parseFloat(cart[item]);
    }
    return totalPrice;
}
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
  console.log(cashRegister(cartForParty));




 const leapYear = function (year){
        if (year % 4 != 0){
            return false;
        } else if (year % 100 != 0){
            return true;
        } else if (year % 400 != 0){
            return false;
        } else {
            return true;
        }
 }
 const year = prompt("Enter a year to test: ");
 console.log(leapYear(year));

