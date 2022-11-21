/*
  0. 문제파악 
  1. 구체적인 예시 (에러패턴, 유효하지 않은 패턴)
  2. 문제를 세분화 (*주석*)
  3. 어려운 문제가 있으면 일단 건너뛰고, 간단한 문제부터 해결
  4. 완성되면 리펙토링
 */

const fs = require('fs');

// './input.txt'; => local, '/dev/stdin' => baekjoon
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const inputFile = fs.readFileSync(path).toString().trim().split('\n');

const [n, ...input] = inputFile;

console.log(n, input); // 인덱스0 === n, 나머지들 input->array


