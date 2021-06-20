const readlineSync = require('readline-sync');
let userString = readlineSync.question("Enter the string here...\n");
let strWords = userString.split(' ');    // Spliting the string by whitespace.
console.log(`Number of words in the given string is : ${strWords.length}`);