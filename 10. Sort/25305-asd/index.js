const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n');

const [_, priceNum] = input[0].split(" ").map((v)=>v*1);
const sort = input[1].split(" ").map(v=>v*1).sort((a, b)=>a - b);
const cutlineNum = sort[sort.length - priceNum];
console.log(cutlineNum);