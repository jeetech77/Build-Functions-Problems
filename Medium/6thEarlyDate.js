let firDate = "10/1/2021";
let secDate = "1/1/2021";

function getEarlyDate(str1, str2) {
    let firDateArr = (str1.split('/'));     // ! Spliting  string to get year, month and day
    let secDateArr = str2.split('/');      // ! Spliting  string to get year, month and day
    firDateArr = parseIntoInt(firDateArr);    // ! Converting  strings into integers
    secDateArr = parseIntoInt(secDateArr);    // ! Converting  strings into integers
    if (firDateArr[2] > secDateArr[2]) {
        return str2;
    } else if (firDateArr[1] > secDateArr[1]) {
        return str2;
    } else if (firDateArr[0] > secDateArr[0]) {
        return str2;
    } else {
        return str1;
    }
}

function parseIntoInt(arr) {
    for (let index = 0; index < arr.length; index++) {
        let temp = parseInt(arr[index]);
        arr[index] = temp;
    }
    return arr;
}
console.log(getEarlyDate(firDate, secDate))