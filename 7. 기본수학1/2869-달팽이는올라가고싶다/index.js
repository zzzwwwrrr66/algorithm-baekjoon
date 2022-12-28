
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split(" ");

const [A, B, V] = input.map(v=>Number(v));

// 올림 처리 => (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
console.log(Math.ceil((V - B) / (A - B)));
