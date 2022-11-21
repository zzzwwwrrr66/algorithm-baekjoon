/*
input ex)
472
385

output ex)
2360
3776
1416
181720
*/

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split('\n');

console.log(input);

const bucket = Array.from({length: 4}, ()=>{});
console.log("bucket", bucket);

