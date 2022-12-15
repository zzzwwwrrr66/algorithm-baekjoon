
/*
첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
둘째 줄에는 중앙값을 출력한다.

셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
넷째 줄에는 범위를 출력한다.
*/

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n').map(v=>Number(v));
const N = input.shift();

function bucket (arr) {
  const result = {};
  for(const v of arr) {
    if(!result[String(v)]) result[String(v)] = 1;
    else result[v]++;
  }
  return result;
}

const midNum = Math.floor(N / 2)
const aver = Math.round((input.reduce((a, b) => a + b) / N))
const sort = input.sort((a, b)=> a - b);
const bucketObj = bucket(sort);
const mimusMinAndMax = Math.max(...input) - Math.min(...input);

/*
첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
둘째 줄에는 중앙값을 출력한다.
셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
넷째 줄에는 범위를 출력한다.
 */
function 최빈값(obj) {
  let result;
  arr = Object.entries(obj);
  result = arr.filter((v)=>{
    if(v[1] === 2) return v
  });
  if(result.length === 0) return arr[0][0];
  if(result.length === 1) return result[0][0];
  if(result.length === 2) return result[1][0];
}
console.log(
  [aver, sort[midNum], 최빈값(bucketObj), mimusMinAndMax].join("\n")
)