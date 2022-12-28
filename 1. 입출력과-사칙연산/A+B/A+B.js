const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().parseInt();

input.map(v=>parseInt(v, 10))
.reduce((a,b)=>a+b);