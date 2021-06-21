let arrayFirst = [23, 34, 45, 56, 76, 23, 43];
// let arraySecond = [23, 34, 45, 56, 76, 45, 56, 6, 43, 3];
function replaceAllItems(arr, item, newItem) {
    for (let index = 0; index < arr.length; index++) {
        if (item === arr[index]) {
            arr[index] = newItem;
        }
    }
}
console.log("Array Before Replacing");
console.log(arrayFirst);
replaceAllItems(arrayFirst, 23, 90)
console.log("Array After Replacing");
console.log(arrayFirst);