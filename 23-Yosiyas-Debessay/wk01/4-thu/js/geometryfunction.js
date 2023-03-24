const rectangle = {
    width: 4,
    height: 4,

    isSquare(){
        return this.width === this.height;
    },

    area(){
        return this.width * this.height;
    },
    perimeter(){
        return 2 * (this.width + this.height);
    }
};
const info = `The rectangle has a width of ${rectangle.width}, a height of ${rectangle.height}, an area of ${rectangle.area}, and a perimeter of ${rectangle.perimeter}. It is ${rectangle.isSquare() ? '' : ' not'} a sqaure`;
console.log(info);