const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
let [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
function sumFnc(input) {
  let k = 0;
  let sum = 0;
  for(let i = 0; i < input.length; i++) {
    if(input[k] !== input[i]) {
      k = i;
    }
    if(input[k] === input[i]) {
      if(input[k] === "O" && input[i] === "O") {
        sum += (i - k) + 1;
      }
    }
  }

  return sum;
}
const result = input.map(v=>`${sumFnc(v)}\n`).reduce((a,b)=>a+b);
console.log(result);