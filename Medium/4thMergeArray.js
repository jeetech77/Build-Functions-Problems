let firstArray = [23, 45, 67];
let secondtArray = [32, 54, 76];
function mergeArray(arr1, arr2) {
    arr2.forEach(element => {
        arr1.push(element);
    });
    return arr1;
}
console.log(mergeArray(firstArray, secondtArray));
