/*
문제
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

입력
첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다. 

출력
첫째 줄에 게임의 상금을 출력 한다.

예제 입력
3 3 6

예제 출력
1300
 */

const fs = require('fs');
const path = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(path).toString().split(' ').map(v=>parseInt(v, 10));

// 숫자 카운터인 버켓을 만든다;
function bucketHandler(arr) {
  const bucket = {};
  for(let i = 0; i < arr.length; i++) {
    const key = arr[i];
    // if 카운터로 출력 한다
    if(bucket[key] === undefined) bucket[key] = 1;
    else bucket[key]++;
  }

  return bucket;
}
function reward(obj) {
  let mostNum = 0;
  for(const key in obj) {
    if(obj[key] === 3) return (10000 + key * 1000);
    if(obj[key] === 2) return (1000 + key * 100);

    if(obj[key] === 1) {
      if(mostNum < key) mostNum = key;
    }
  }
  return mostNum * 100;
}
const bucket = bucketHandler(input);
console.log(reward(bucket));
