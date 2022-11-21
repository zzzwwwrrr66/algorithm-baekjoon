/*
문제
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

출력
첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
*/

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split(' ');


const bucket = Array.from({length: 4}, ()=>{});

function resultFnc(inputArr) {
  const A = parseInt(inputArr[0], 10);
  const B = parseInt(inputArr[1], 10);
  const C = parseInt(inputArr[2], 10);
  const result = bucket.map((v, i)=>{
    if(i == 0) {
      return (A+B)%C;
    }
    if(i == 1) {
      return ((A%C) + (B%C))%C;
    }
    if(i == 2) {
      return (A*B)%C
    }
    if(i == 3) {
      return ((A%C) * (B%C))%C
    }
  });

  return result;
}

const result = resultFnc(input);
result.forEach(v=>{console.log(v);});


