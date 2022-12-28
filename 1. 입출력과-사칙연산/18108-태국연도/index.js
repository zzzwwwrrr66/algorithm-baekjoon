const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = parseInt(fs.readFileSync(path).toString(), 10);

console.log(input - 543);