
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim();

let n = 6;
let i = 1
let result = 1;
while(true) {
  console.log(`${input} < ${result} =`, input < result);
  if(input <= result) break;
  result = result + (n * i);
  i++;
}
console.log(i);