const readlineSync = require('readline-sync');
const width = readlineSync.question('какая длина?: ');
const height = readlineSync.question('Какая высота?: ');
const  calculateRectangleProperties = (width, height) => {
    return  (width + height) * 2 + " и " + width * height
}
console.log(`Периметр и площадь  ${calculateRectangleProperties(width, height)}`)