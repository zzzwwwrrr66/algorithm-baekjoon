const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");
const N = input.shift();
const peple = input.map(v=>(
    {
      kg: Number(v.split(" ")[0]), 
      cm: Number(v.split(" ")[1]),
      cnt: 0
    }
  )
);
for(let i = 0; i < N; i++) {
  let _selfKg = peple[i].kg;
  let _selfCm = peple[i].cm;
  peple[i].cnt++;
  for(let j = 0; j < N; j++) {
    if(_selfKg < peple[j].kg && _selfCm < peple[j].cm) {
      peple[i].cnt++;
    }
  }
}
const result = peple.map(v=>v.cnt).join(" ");
console.log(result);


