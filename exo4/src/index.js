const { readFileSync } = require('fs');
const path = require('path');

console.log(__dirname);
// console.log(__filename);

// Output the content of the file log.txt 
console.log(readFileSync(__dirname + "/log.txt", "utf8"));

// console.log(path.join(__dirname, "..", "assets/index.html"));

// Output the content of the file assets/index.html
console.log(readFileSync(path.join(__dirname, "..", "assets/index.html"), "utf8"));