// const rectangleA = {
//     length: 4,
//     width: 4
//   };=

const isSquare = function (object) {
    if (object.length === object.width) {
        return true
    } else {
        return false
    }
}

const area = {
    length: 4,
    width: 4
};

console.log(isSquare(area));