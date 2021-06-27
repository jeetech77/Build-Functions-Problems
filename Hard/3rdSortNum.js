let numArray = [23, 13, 12, 36, 76, 2, 34];
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length;j++)
        {
            if (arr[j] > arr[j + 1]) { 
            [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]    // ! Swapping the elements if they are greater.
            }
        }
    }
    return arr;
}
console.log(sortArray(numArray));

