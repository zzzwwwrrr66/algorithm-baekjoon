const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(v=>Number(v));
let cards = input[1].split(" ").map(v=>Number(v)).sort((a, b) => a - b);

let resultNum = -Infinity;
let sum = 0;
for(let i = 0; i < N; i++){
  for(let j = i + 1; j < N; j++){
     for(let k = j + 1; k < N; k++){
      sum = cards[i] + cards[j] + cards[k];
      if(sum === M) {
        resultNum = sum;
        break;
      }
      if(M >= sum && sum > resultNum) {
        resultNum = sum;
      } 
     }
  }
}
console.log(resultNum);
