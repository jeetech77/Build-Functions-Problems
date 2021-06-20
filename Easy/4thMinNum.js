const readlineSync = require('readline-sync');
function minValue(...values) {    // Using rest parameter
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
let listOfNumbers = userNumbers.split(',');   // Spliting them to get the numbers
for (let index = 0; index < listOfNumbers.length; index++) {
    let temp=parseInt(listOfNumbers[index]);    // Converting string to numbers
    listOfNumbers[index]=temp
}
console.log(minValue(...listOfNumbers));    // Using spread operator to pass an array to the function.