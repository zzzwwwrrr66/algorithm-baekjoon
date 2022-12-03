/*
문제
그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

출력
첫째 줄에 그룹 단어의 개수를 출력한다.

예제 입력 1 
3
happy
new
year
예제 출력 1 
3
예제 입력 2 
4
aba
abab
abcabc
a
예제 출력 2 
1
예제 입력 3 
5
ab
aa
aca
ba
bb
예제 출력 3 
4
예제 입력 4 
2
yzyzy
zyzyz
예제 출력 4 
0
예제 입력 5 
1
z
예제 출력 5 
1
*/

// input = "ccazzzaabbbccb";
// if words.includes(input[idx1]) return 0;
// if idx1 이랑 idx2 같으면 idx2++,  
// else words.push(input[idx1]); idx1 = idx2; idx2++
// return 1;

// while(left > right) left = 0, right = input.length - 1

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path).toString().trim().split("\n").slice(1);
function helper(word) {
  const words = [];
  let i = 0;
  for(let k = 1; k < word.length; k++) {
    if(word[i] !== word[k]) {
      words.push(word[i]);
      i = k;
    }
    if(words.includes(word[i])) return 0
  }
  return 1
}

function resolve(input) {
  const result = input.map(v=>helper(v)).reduce((a,b)=>a+b);
  return result;
}
console.log(resolve(input));