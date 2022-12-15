const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n').map((v)=>v*1);

function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function bubbleSort(arr) {
    let result = arr;
    let noswap;
    for(let i = arr.length; i > 0; i--) {
        noswap = true
        for(let j = 0; j < i - 1; j++) {
        if(arr[j] > arr[j + 1]) {
            result = swap(result, j, (j+1));
            noswap = false
        };
        }
        if(noswap) break;
    }
    return result;
}

const result = bubbleSort(input).sort((a,b)=>{
    return a - b;
})
.filter((e, i, arr) => arr.indexOf(e) === i)
.join("\n");
console.log(result)