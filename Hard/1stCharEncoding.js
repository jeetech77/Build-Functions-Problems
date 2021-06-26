let str = "V`hshmf enq kdudk nmd."
function shiftString(str, num) {
    let newStr = '';
    for (let index = 0; index < str.length; index++) {
        let temp = str.charCodeAt(index);
        if (temp===32|| temp===46) {    // ! Avoiding space and fullstops in string.
            temp = temp;
        }
        else
        {
            temp += num;    // ! Increasing ascii value by given num.
        }
        newStr += String.fromCharCode(temp);    // ! Converting ascii value in character.
    }
    return newStr;
}
let shiftedStr = shiftString(str,1);
console.log(shiftedStr);