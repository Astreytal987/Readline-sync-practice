const readlineSync = require('readline-sync');
const width = readlineSync.question('Какая ширина?: ');
const height = readlineSync.question('Какая Высота?: ');
const calculateRectangleProperties = (width, height) => {
    return (width+height)*2 + ' и площадь ' + width*height
}
console.log(calculateRectangleProperties(width, height))