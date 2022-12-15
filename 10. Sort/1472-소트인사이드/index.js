const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('').map(v=>Number(v));
const result = input.sort((a, b)=> b - a).join('');
console.log(result);