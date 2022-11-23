/*
문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.

예제 입력 1 
3
예제 출력 1 
6
 */

const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
const input = parseInt(fs.readFileSync(path).toString(),10);
let result = 0;
for(let i = 0; i <= input; i++) {
  result = result + i;
}
console.log(result);