const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n');
const N = input.shift();

function bucket (arr) {
  const result = {};
  for(const v of arr) {
    if(!result[v.length]) {
      result[v.length] = [];
      result[v.length].push(v);
    }
    else {
      result[v.length].push(v);
    }
  }
  return result;
}

let result = input.sort((a, b)=> a.length - b.length);
result = [...new Set(result)];
result = bucket(result);
result = Object.entries(result).map(v=>v[1]);
result = result.map(v=>v.sort());
result = result.flat().join("\n")
console.log(result);
