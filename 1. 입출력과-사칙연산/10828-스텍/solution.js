const input = require('fs').readFileSync('./input.txt').toString().split('\n');
input.shift();
const inputMap = input.map(v=>{
  const a = v.split(' ') 
  const b = a[0];
  const c = a[1] !== undefined ? a[1] : '';
  return [b, c];
});;

const solution = (input) => {
  const stack = [];
  let result = '';
  input.forEach(v => {
    switch (v[0]) {
      case 'push':
        stack.push(v[1]);
        break;
      case 'pop':
        result+= stack.length ? stack.pop(): -1 + ' ';
        break;
      case 'size':
        result+= stack.length + ' ';
        break;
      case 'empty':
        result+= stack.length  ? 0 + ' ' : 1 + ' '; 
        break;
      case 'top':
        result+= stack.length ? stack[stack.length - 1] + ' ' : -1 + ' ';
        break;
      default:
        return false;
    }
  });
  return result;
}

console.log(solution(inputMap).split(' ').join('\n'));