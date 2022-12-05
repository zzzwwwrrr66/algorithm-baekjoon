
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim();


let number = input * 1;
let lineNum = 1;
while (true) {
	number = number - lineNum;
  // console.log('1',number);
	if (number <= 0) {
    number = number + lineNum;
    // console.log('2',number);
		break;
	}
	lineNum++;
  // console.log('3', lineNum)
}

if (lineNum % 2 === 1) {
	console.log(`${lineNum - (number - 1)}/${1 + (number - 1)}`);
} else {
	console.log(`${1 + (number - 1)}/${lineNum - (number - 1)}`);
}

/* 
  1 / 1   1
  1 / 2    2
  2 / 1    2
  3 / 1     3
  2 / 2     3
  1 / 3     3
  1 / 4      4
  2 / 3      4
  3 / 2      4
  4 / 1      4
*/

