let stringOne = "We are neoGGrammers";
let stringTwo = "We love neoGcamp";
function strReverseChar(str) {
    let arrWords = str.split(" ");
    arrWords.map((value, index) => {
        let temp = value.split('');
        temp = temp.reverse();
        arrWords[index] = temp.join('');
    })
    return arrWords.join(' ');
}
console.log(strReverseChar(stringOne));
console.log(strReverseChar(stringTwo));