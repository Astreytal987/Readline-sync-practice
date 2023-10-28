const readlineSync = require('readline-sync');
const incomes = readlineSync.question('Какие оценки?')

const calculateAverageGrade = (grades) => {
    const gradesArr = grades.split(' ').map(Number)

    let sum = 0
    for (let i = 0; i < gradesArr.length; i++) {
        sum = sum + gradesArr[i]
    }
    
    return sum / gradesArr.length
}