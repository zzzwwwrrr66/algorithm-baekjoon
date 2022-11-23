/*
문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
시험 성적을 출력한다.
 */

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split(' ');

const [ val ] = input.map(v=>parseInt(v, 10));

const score= (num) =>{
  if(num >= 90 && num <= 100) return "A";
  else if(num >= 80 && num <= 89) return "B";
  else if(num >= 70 && num <= 79) return "C";
  else if(num >= 60 && num <= 69) return "D";
  return "F";
}

console.log(score(val));





