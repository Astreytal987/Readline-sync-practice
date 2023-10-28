const readlineSync = require('readline-sync');
const str = readlineSync.question('строка?')
const exception = readlineSync.question('исключение')

const reverseStringWithException = (str,exception) => {
    // находим индекс исключения
    const massiv = str.split(' ')
    const indexexception = massiv.indexOf(exception)
    // переворачиваем каждое слово в масиве с сохранением порядка строк) до этого просторого решения сложно додуматся
    const reverseword = (massiv) => {
      return massiv.split('').reverse().join('');}

      for (let i = 0; i < massiv.length; i++) {
        if (i !== indexexception) {
          massiv[i] = reverseword(massiv[i]);
        }
      }
    
      massiv[indexexception] = exception;
    
      return massiv.join(' ');
    }

console.log(reverseStringWithException(str, exception));
