const readlineSync = require('readline-sync');
function minValue(...values) {
    return values.reduce((firstVal, secVal) => {
        let minValue = firstVal;
        if (minValue<secVal) {
            return minValue
        }
        else {
            return secVal;
        }
    })
}

let userNumbers = readlineSync.question("Enter all the numbers seprating by comma...\n");
let listOfNumbers = userNumbers.split(',');
for (let index = 0; index < listOfNumbers.length; index++) {
    let temp=parseInt(listOfNumbers[index]);
    listOfNumbers[index]=temp
}
console.log(listOfNumbers);