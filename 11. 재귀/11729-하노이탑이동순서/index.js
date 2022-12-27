/*
1. 한 번에 하나의 원판만 옮길 수 있다.
2. 큰 원판이 작은 원판 위에 있어서는 안된다.
3. 1번에는 n개의 원판이 있고 이 n개의 원판을 3번 원판으로 최소 횟수로 옮겨야 한다.

참고 => https://blog.martinwork.co.kr/theory/2018/10/07/hanoi-algorithm.html
*/

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim();

let N = Number(input); // 원판의 갯수
let count = 0;
let answer = [];
let number = []

// num : 원반의 개수
// from : 출발지 기둥 번호
// to : 목적지 기둥 번호
// other : 나머지 기둥 번호


function Hanoi(num, from, other, to){
    if(num === 1) {
      number.push(num);
      answer.push([from, to]);
      count++;
    } else{
        // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동
        Hanoi(num - 1 , from, to, other);
        // 맨아래보다 위쪽의 원반들을 목적지로 이동시킴
        number.push(num);
        answer.push([from, to]);
        count++;
        //다른 곳으로 옮겼던 원반들을 그 위에 얹음
        Hanoi(num - 1, other, from, to);
    }
}
Hanoi(N, '1','2','3');
console.log("count", count);
console.log("number", number);
console.log(answer.map((element) => element.join(" ")).join("\n"));


/* 
# output

7 => ## count(옮긴 횟수)

## from to number =>
f: 1 t: 3 n: 1
1 2 2
3 2 1
1 3 3
2 1 1
2 3 2
1 3 1
*/