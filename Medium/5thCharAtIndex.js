let string = "Neogcamp is love";
function charAtIndex(str, index) {
    // return str[index];     // An usual way.
    return str.charAt(index);    //  Here we can also use charAt method of strings.
}
console.log(`Character presented at the given index is : ${charAtIndex(string, 4)}`)
console.log(`Character presented at the given index is : ${charAtIndex(string, 12)}`)
console.log(`Character presented at the given index is : ${charAtIndex(string, 10)}`)