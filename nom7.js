const readlineSync = require('readline-sync');
const stri = readlineSync.question('Cтрока: ');

const countWords = (stri) => {
 return stri.split(' ').length;
};

const wordCount = countWords(stri);
console.log(`Количество слов: ${wordCount}`);


