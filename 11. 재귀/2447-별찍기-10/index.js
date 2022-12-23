/*재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.

크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.

***
* *
***
N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.

입력
첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에 대해 N=3k이며, 이때 1 ≤ k < 8이다.

출력
첫째 줄부터 N번째 줄까지 별을 출력한다. */


/*
point 
1. 선택지는 " ", "*"  두개중 해당값을 못찾았을때는 재귀 실행 인자함수는 나누기한값
2. 재귀로 어찌됬든 j값으로 “ ”, “*” 둘중 한개는 나온다 
3. first IF ( i % 3 === 1 && j % 3 === 1) => " ", 
    second IF ( i / 3 === 0 && j / 3 === 0)
    second else recursion(i/3, j/3)

4. N 의 거듭제곱이 나온순간 % 나 / 로 패턴파악 준비
5. 값이 두개로 떨어져야하는데 3개 이상이 나와서 다시 가공해서 두개로 떨어져야할떄 재귀 고려 
*/
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim();
const number = Number(input);
function PaintStar(i, j){
    let I나머지 = i % 3, J나머지 = j % 3
    if(I나머지 === 1 && J나머지 === 1){
        return " ";
    }else{
      let I나누기 = Math.floor(i / 3), J나누기 = Math.floor(j / 3);
        if( I나누기=== 0 && J나누기 === 0){
            return "*";
        }else{
            return PaintStar(I나누기, J나누기);
        }
    }
}
const resolve = [];
for(let i = 0; i < number; i++){
    let str = "";
    resolve.push([])
    for(let j = 0; j < number; j++){
        str+=PaintStar(i, j);
    }
    resolve[i].push(str);
    
}
const reuslt = resolve.flat().join("\n");
console.log(reuslt)

/*
let number = 9;
const getTop = next => {
  return next.map(v => v.repeat(3));
};

const getMiddle = (next) => {
  return next.map(v => v + ' '.repeat(v.length) + v);
};

const solve = N => {
  if (N === 1) return [ '*' ];
  N = N / 3; 
  const next = solve(N);
  let result = [ ...getTop(next), ...getMiddle(next), ...getTop(next) ]
  return result;
};

console.log(solve(number));
 */

/* 
(1, 1),         (1, 4),         (1, 7)
        (3, 3), (3, 4), (3, 5)
        (4, 3), (4, 4), (4, 5)
(5, 1), (5, 3), (5, 4), (5, 5), (5, 7)
*/
const asd = "";


//if( i % 3 === 1 && i % 3 === 1 = " " )
// else (
//  if( i / 3 === 0 && j / 3 === 0 ) {
//    
// }
//)