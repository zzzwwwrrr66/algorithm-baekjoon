

//첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
/*
10
4
21
2
1
 */ //
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './A+B/input.txt';

const input = fs.readFileSync(path).toString().split(' ');
const result = [];
const reduceForCal= (f)=>input.map(v=>parseInt(v, 10)).reduce(f);
result.push(reduceForCal((a,b)=>a+b));
result.push(reduceForCal((a,b)=>a-b));
result.push(reduceForCal((a,b)=>a*b));
result.push(reduceForCal((a,b)=>Math.floor(a/b)));
result.push(reduceForCal((a,b)=>a%b));

result.forEach(v=>{console.log(v)});