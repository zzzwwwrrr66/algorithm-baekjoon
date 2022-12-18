
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");
const n = input.shift();

function resolve() {
  let cnt = 0;
  
  function recursion(s, l, r) {
    cnt = cnt + 1;
    if (l >= r) {
      return [1, cnt];
    }
    else if (s[l] !== s[r]) {
      return [0, cnt]
    }
    return recursion(s, l + 1, r - 1)
  }
  function isPalindrome(s) {
    return recursion(s, 0, s.length - 1, 0);
  }

  const result = input.map((v)=>{
    const result = isPalindrome(v);
    cnt = 0; // default cnt
    return result;
  })
  .map(v=>`${v.join(" ")}`)
  .join("\n");

  return result;
}

console.log(resolve())
