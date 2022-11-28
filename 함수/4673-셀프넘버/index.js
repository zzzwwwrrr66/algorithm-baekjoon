// 셀프넘버는 생성자가 아닌 숫자 (셀프 넘버)
// n + 앞자리 + 뒷자리 = 생성자 함수 => ex) 32 + 3 + 2 = 37

function getDigit(num , i) {
  const result = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return result;
}

function a (n) {
  if(n < 100) return n
  return a(n + getDigit(n, 1) + getDigit(n, 0));
}

a(10);