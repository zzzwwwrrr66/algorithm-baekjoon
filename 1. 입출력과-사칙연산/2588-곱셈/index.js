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

const [a, b] = fs.readFileSync(path).toString().split('\n');

const bucketResult = Array.from({length: 4}, ()=>{});

function getDigit(num , i) {
  const result = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return result;
}

function resultFnc(a, b) {
  return bucketResult.map((v, i)=>{
    if(i === bucketResult.length - 1) {
      return a * b;
    }
    return a * getDigit(b, i);
  })
}
const result = resultFnc(a,b);
result.forEach(v=>console.log(v));