/*
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다
*/

const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(v=>Number(v));
let max = -Infinity;
let result = ``;
for(let i = 0; i < input.length; i++) {
  if(max < input[i]) {
    max = input[i];
    result = `${input[i]}\n${i + 1}`;
  };
}
console.log(result);

