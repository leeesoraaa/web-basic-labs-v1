// TODO: prompt로 입력받은 숫자의 각 자릿수 합을 구하도록 while 루프를 사용하여 작성하세요.
let num = prompt('숫자를 입력하세요.');
let total = 0;
let idx = 0;
while (1) {
  total += Number(num[idx]);
  idx++;
  if (idx == num.length) {
    break;
  }
}
alert(total);
