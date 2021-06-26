let str = "neogcamp is the best place to learn and grow.";
function toSentenceCase(str) {
    let wordsOfStr = str.split(" ")    // ! Getting all of the words in the string
    wordsOfStr.map((value,index) => {
        wordsOfStr[index] = value[0].toUpperCase() + value.slice(1);   // ! Changing into UpperCase
    })
    return wordsOfStr.join(' ');
}
console.log(toSentenceCase(str))