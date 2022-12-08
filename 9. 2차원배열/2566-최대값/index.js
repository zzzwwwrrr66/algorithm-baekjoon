
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n").map((x) => x.trim().split(" ").map((x) => x * 1));
const result = input.map(( v, i )=>{
const maxArr = Math.max(...v)
  return {
    maxNum: maxArr,
    x: i + 1,
    y: v.indexOf(maxArr) + 1,
  }
})
.reduce((a, b)=>a.maxNum > b.maxNum ? a : b,0);

console.log("🚀 ~ file: index.js ~ line 13 ~ result ~ result \n", result)
console.log(`${result.maxNum}\n${result.x} ${result.y}`)