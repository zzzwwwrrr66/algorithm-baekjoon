/*

*/

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(path).toString().trim();
const lib = {
  "c=" :1,
  "c-" : 1,
  "dz=" : 1,
  "d-" : 1,
  "lj" : 1,
  "nj" : 1,
  "s=" : 1,
  "z=" : 1,
}

for(const key in lib) {
  if(input.indexOf(key) > -1) {
    input = input.replaceAll(key, '1');
  }
}
console.log(input.split('').length);
