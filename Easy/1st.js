const readlineSync = require('readline-sync');
let baseNum=readlineSync.questionInt("Enter the base value : \n");
let exponentNum=readlineSync.questionInt("Enter the exponent value : \n");
function power(firstNum,secNum){
    let finalValue=1;
    while (secNum) {
        finalValue*=firstNum;
        secNum--;
    }
    return finalValue;
}
console.log(`Result is : ${power(baseNum,exponentNum)}`);