// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복
const randomnum = Math.floor(Math.random() * 10) + 1;
while (1) {
  let usernum = prompt('숫자를 맞혀보세요: ');
  if (usernum == randomnum) {
    alert(`${usernum}, 정답입니다!`);
    break;
  } else {
    alert(`틀렸습니다ㅠ`);
  }
}
