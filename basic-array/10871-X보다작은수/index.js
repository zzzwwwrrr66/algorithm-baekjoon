/*
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다
*/

const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [n, x] = input[0].split(" ").map(v=>Number(v));
const arr = input[1].split(" ").map(v=>Number(v));
let result = ``;
for(let i = 0; i < n; i++) {
  if(arr[i] < x) result += `${arr[i]} `;
}
console.log(result);

