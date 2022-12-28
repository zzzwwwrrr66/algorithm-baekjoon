/*

*/

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split(' ');

console.log(input[0] === '' ? 0 : input.length );
