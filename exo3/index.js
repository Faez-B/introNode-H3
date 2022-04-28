// console.log(__dirname + "/assets/index.html");
// console.log(__filename);

const { readFileSync } = require('fs');

// console.log(readFileSync(__dirname + "/assets/index.html"));
// console.log(readFileSync(__dirname + "/assets/index.html", "utf8"));
console.log(readFileSync("assets/index.html", "utf8"));