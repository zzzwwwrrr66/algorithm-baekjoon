const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n').map(v=>v.split(" "));
const N = input.shift();

function bucket (arr) {
  const result = {};
  for(let i = 0; i < arr.length; i++) {
    if(!result[i]) {
      result[arr[i]] = i;
    }
    else result[arr[i]] = i;
  }
  return result;
}
const inputFlat = input.flat()
const numbers = [...new Set(inputFlat)]
const numberBucket = bucket(numbers.sort((a,b)=>a-b));
const result = inputFlat.map(v=>numberBucket[v]);
console.log(result.join(" "));