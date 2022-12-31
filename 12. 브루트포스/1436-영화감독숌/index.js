const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim() * 1;

let num = 666;
let cnt = 1;

while (cnt !== input) {
  num++
  if(String(num).includes("666")) cnt++;
}

console.log(num);