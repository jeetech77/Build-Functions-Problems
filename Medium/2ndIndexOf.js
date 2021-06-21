let arrayFirst = [23, 34, 45, 56, 76];
let arraySecond = [23, 34, 45, 56, 76, 45, 56, 6, 43, 3];
function getIndexOfItem(array,item) {
    let indexOfItem = undefined;
    for (let index = 0; index < array.length; index++) {
        if (item===array[index]) {
            indexOfItem = index;
        }
    }
    return indexOfItem;
}

console.log("Index of the item is : ", getIndexOfItem([23,35,24,24,34],34));
console.log("Index of the first array item is : ", getIndexOfItem(arrayFirst,56));
console.log("Index of the second array item is : ", getIndexOfItem(arraySecond,3));
