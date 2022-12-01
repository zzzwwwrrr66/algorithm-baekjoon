
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path).toString().split("\n");
console.log("🚀 ~ file: index.js ~ line 6 ~ input", input)


