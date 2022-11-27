const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(v=>Number(v)).sort(compareFn);
const peple = Array.from({length: 30}, (v, i)=>i+1);

function compareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

let result = [];
let i = 0;
let k = 0;
while (i < peple.length) {
  if(input[i] !== peple[k]){
    result.push(peple[k]);
    k++;
  }
  if(input[i] === peple[k]) {
    k++;
    i++;
  }
}
console.log(result.map(v=>`${v}\n`).reduce((a,b)=>a+b));