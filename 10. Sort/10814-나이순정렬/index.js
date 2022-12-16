const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n').map(v=>v.split(" "));
const N = input.shift();

let result = 
input.sort((a, b)=>a[0]-b[0])
.map(v=>v.join(" "))
.join("\n");

console.log(result)
