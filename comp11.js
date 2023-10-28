const readlineSync = require('readline-sync');
const calculateEmployeeBonus = (salary, performanceRating) => {
    if (performanceRating > 8) {
        let bonusalary = salary * 0.2
        return bonusalary
    }
    else {
        let bonusalarymin = salary * 0.1
        return bonusalarymin
    }
}