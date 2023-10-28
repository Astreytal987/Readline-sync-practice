const readlineSync = require('readline-sync');

const generateRandomEquation = () => {
    let a = Math.round(Math.random() *10)
    let b = Math.round(Math.random() *10)
    let c = Math.round(Math.random() *20)

    let uravn = `${a}x + ${b} = ${c}`;
    return uravn
}