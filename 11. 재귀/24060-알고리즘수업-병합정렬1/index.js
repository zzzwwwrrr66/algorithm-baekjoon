
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");
const resolveIndex = (input[0].split(" ")[1] * 1) - 1;
const inputNnums = input.slice(1).join(" ").split(" ").map(v=>v*1);

let resolve = [];
function mergeHelper (arr1, arr2) { 
  const result = [];
  const idx1 = arr1.length;
  const idx2 = arr2.length;
  let n1 = 0;
  let n2 = 0;
  
  while (n1 < idx1 && n2 < idx2) {
    if(arr1[n1] < arr2[n2]) {
     result.push(arr1[n1]);
      n1++
    }
    else {
      result.push(arr2[n2])
      n2++;
    };
    
  }
  while(n1 < idx1) {
    result.push(arr1[n1]);
    n1++
  }
  while(n2 < idx2) {
    result.push(arr2[n2])
    n2++;
  }
  result.forEach(v=>resolve.push(v));
  return result;
}

function mergeSort(arr) {
if(arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  
  let result = mergeHelper(left, right);
 
  return result;
}
mergeSort(inputNnums);
console.log(resolve[resolveIndex] === undefined ? -1 : resolve[resolveIndex]);

