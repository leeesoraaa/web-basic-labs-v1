/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('비밀번호를 입력하세요 : ', (password) => {
  checkPassword(password);
  rl.close(); // 콜백함수
});
function checkPassword(password) {
  if (password.length < 8) {
    console.log('비밀번호는 8자 이상이어야합니다.');
  } else if (!/[A-Z]/.test(password)) {
    console.log('대문자가 1개 이상 포함되어야 합니다.');
  } else if (!/[0-9]/.test(password)) {
    console.log('숫자가 1개 이상 포함되어야 합니다.');
  } else if (!/[!@#$%^&*]/.test(password)) {
    console.log('특수기호가 1개 이상 포함되어야 합니다.');
  } else {
    console.log('강한 비밀번호 입니다.');
  }
}
