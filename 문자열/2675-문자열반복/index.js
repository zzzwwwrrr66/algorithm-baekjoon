/*
2
3 ABC
5 /HTP

AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split("\n").map(v=>v.split(" "));
console.log(input);
const result = 
input.map(v=>{
  const [n, e] = v;
  let result = ``
  if(e) {
    for(let i = 0; i < e.length; i++) {
      result += e[i].repeat(n);
    }
  }
  return result;
})
.filter(v=>!!v)
.join('\n');

console.log(result)
