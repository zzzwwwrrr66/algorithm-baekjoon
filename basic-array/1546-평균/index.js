

const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
let [n, input] = fs.readFileSync(path).toString().trim().split('\n');

input = input.split(" ").map(v=>Number(v))
const max = input.reduce((a, b)=> a > b ? a : b);
const aver = input.map((v) => v / max * 100).reduce((a, b)=> a + b) / n
console.log(aver);