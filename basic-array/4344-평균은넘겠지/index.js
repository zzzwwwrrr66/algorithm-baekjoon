/*
점수합 / 총인원수(n) = 평균
평균 < 점수 = 평균넘는사람++
평균 넘는 사람 / 총인원수(n) * 100
*/

const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').slice(1);
let result;

result = input.map((v)=>{
  let arr = v.split(" ").map(v=>Number(v)); 
  let n = arr.shift();
  let aver = (arr.reduce((a,b)=>a+b)) / n;
  let cnt = 0;

  arr.forEach(v=>{
    if(v > aver) cnt++
  })
  
  return `${(Math.round( ((cnt / n * 100) + Number.EPSILON) * 1000) / 1000).toFixed(3)}%\n`;
});
console.log(result.reduce((a,b)=>a+b));

