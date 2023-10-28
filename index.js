const readlineSync = require('readline-sync');

// Запрос имени пользователя const userName = readlineSync.question('Введите ваше имя: ');
const userName = readlineSync.question('Как ваше имя?');

console.log(`Привет, ${userName}! Добро пожаловать в мир Node.js и readline-sync.`)