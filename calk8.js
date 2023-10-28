const readlineSync = require('readline-sync');
const incomes = readlineSync.question('Какие доходы?')
const expenses = readlineSync.question('Какие расходы?')

const calculateBalance = (incomes, expenses) => {
    const plus = incomes.split(' ').map(Number)
    const minus = expenses.split(' ').map(Number)

    let p = 0
    let summplus = 0
    while (plus.length > p) {
        summplus = summplus + plus[p]
        p = p + 1
    }

    let m = 0
    let summminus = 0
    while (minus.length > m) {
        summminus = summminus + minus[m]
        m = m + 1
    }

    return devide = summplus - summminus

}