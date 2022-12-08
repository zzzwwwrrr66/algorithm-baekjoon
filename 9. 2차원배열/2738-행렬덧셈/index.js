
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n").map((x) => x.trim().split(" ").map((x) => x * 1));
const [n, m] = input.shift();
let arr = new Array(m);
let array = [];
arr.fill(0);
for (let i = 0; i < n; i++) {
  array.push([...arr]);
}


for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // 0 = 1 + 3
    // 0 = 1 + 3
    // console.log(`array[${i}][${j}] = input[${i}][${j}] + input[${i} + ${n}][${j}]`)
    // console.log("                    ",input[i][j],"                  ", input[i + n][j])
    array[i][j] = input[i][j] + input[i + n][j];  
  }
}
const result = array.map(v => v.join(" ")).join("\n").trim()
console.log(result)
