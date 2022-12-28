/*

*/

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split(' ');
let result = input.map(v=>{
  return  [...v].reverse().join('');
});
let check = result.map(v=>Number(v))
console.log(Math.max(...check));
