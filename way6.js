const readlineSync = require('readline-sync');
const distance = readlineSync.question('какая дистанция?: ');
const speed = readlineSync.question('какая скорость?: ');

const calculateTime = (distance, speed) => {
    const time = distance / speed;
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);

    return [hours,minutes]
}
const [hours, minutes] = calculateTime(distance, speed);
console.log(`Вам осталось ковылять ${hours} ч. ${minutes} мин.`);