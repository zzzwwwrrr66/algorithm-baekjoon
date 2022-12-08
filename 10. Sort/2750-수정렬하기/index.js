
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n').map((v)=>v*1);
console.log("🚀 ~ file: index.js ~ line 5 ~ input", input);

const reuslt = [];
console.log()

const arr = [];
input.reduce((a, b)=>{
    a > b ? arr.push(a) : arr.push(b);
    return arr;
}, 0);
console.log("wooram",Array.from(new Set(arr)))

// console.log(reuslt.filter());