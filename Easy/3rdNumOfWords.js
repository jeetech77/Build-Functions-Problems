const readlineSync = require('readline-sync');
let userString=readlineSync.question("Enter the string here...\n");
let strWords=userString.split(' ');    // Spliting the string by whitespace.
console.log(strWords[-1]);
console.log(`Number of words in the given string is : ${strWords.length}`);