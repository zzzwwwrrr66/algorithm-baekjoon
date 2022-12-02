/*

*/

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('');

const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
let cnt = 0;
for(const num in input) {
  for(const k in dial) {
    if(k.includes(input[num])) {
      cnt = cnt + dial[k]
    }
  }
}
console.log(cnt);
