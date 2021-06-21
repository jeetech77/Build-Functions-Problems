let arrayFirst = [23, 34, 45, 56, 76];
let arraySecond = [23, 34, 45, 56, 76, 45, 56, 6, 43, 3];
function getArrayLength(array) {
    let length = 0;
    array.forEach(element => {
        length++;
    });
    return length;
}

console.log("First array length is : ",getArrayLength(arrayFirst));
console.log("Second array length is : ",getArrayLength(arraySecond));
