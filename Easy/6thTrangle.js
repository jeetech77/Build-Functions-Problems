const readlineSync = require('readline-sync');
let firstAngle = readlineSync.questionInt("Enter first angle value\n");
let secondAngle = readlineSync.questionInt("Enter second angle value\n");
let thirdAngle = readlineSync.questionInt("Enter third angle value\n");

function typeOfTrangle(a, b, c) {
    if ((a+b+c)!=180) {
        console.log("Not A Valid Triangle");
    }
    else if ((a === b) && (b === c) && (c === a)) {
        console.log("Equilateral Triangle");
    }
    else if (a === b || b === c || a === c) {
        console.log("Isosceles Triangle");
    }
    else {
        console.log("Scalen Triangle");
    }
}

typeOfTrangle(firstAngle, secondAngle, thirdAngle);