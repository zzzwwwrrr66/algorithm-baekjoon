

const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(v=>Number(v));
Object.size = function(obj) {
  let size = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

const resultObj = {};
const divideNum = 42;
for(let i = 0; i < input.length; i++) {
  const key = input[i] % divideNum;
  if(resultObj[key] === undefined) {
    resultObj[key] = 1;
  } else {
    resultObj[key]++;
  }
}
console.log(Object.size(resultObj));