const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n').map((v)=>v*1);
const aver = input.reduce((a,b)=>a+b) / input.length;
const mid = Math.floor(input.length / 2);
const midNum = input.sort((a, b)=>a-b)[mid];
console.log(
`${aver}\n${midNum}`
)