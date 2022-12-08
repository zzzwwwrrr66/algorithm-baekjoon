
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n').map((v)=>v.split(" ").map(v=>Number(v))) ;
console.log(input);
let n = Number(input.shift());
let paper = new Array(101).fill(0).map(() => new Array(101).fill(0));
let x, y;
let tmp = [];
const areaNum = 10;

for(let m = 0; m < n; m++) {
    temp = input[m]
    x = temp[0], y = temp[1];
    for(let i = 0; i < areaNum; i++) {
        for(let k = 0; k < areaNum; k++) {
            paper[x + i][y + k] = 1;
        }    
    }
}

console.log(paper.flat().filter(v=>v===1).length);