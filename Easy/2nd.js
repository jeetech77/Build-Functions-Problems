const readlineSync = require('readline-sync');
let hexSide=readlineSync.questionFloat("Enter the side of the heaxgon : \n");
function calHexArea(side){
    return (((3*Math.sqrt(3)*side*side)/2).toPrecision(6));
}
console.log(`Area of the given HexaGon is ${calHexArea(hexSide)} cm²`);
