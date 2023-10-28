const readlineSync = require('readline-sync');
const income = readlineSync.question('Какая у вас сумма дохода?: ');
const incomeTaxCalculator = (income) => {
return income * 0.15; //15 процентов от суммы дохода
}
console.log (`Поздравляем! Вы должны ${incomeTaxCalculator(income)} рублей на налоги)
