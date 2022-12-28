const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [_, v] = fs.readFileSync(path).toString().trim().split("\n").map(v=>v.split(''));
console.log(v.reduce((a, b) => Number(a) + Nunmber(b)));
