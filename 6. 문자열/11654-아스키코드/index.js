
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString();
const result = (function resolve(input) {
  if(typeof input === 'string') {
      return input.charCodeAt();
  }
})(input);
console.log(result);
