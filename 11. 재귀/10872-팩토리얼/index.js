const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim();
const num = Number(input);

function fac(N) {
  if(N <= 1) return 1;
  return N * fac(N - 1);
}
console.log(fac(3));

