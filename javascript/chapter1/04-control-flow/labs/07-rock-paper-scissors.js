/* 
사용자와 컴퓨터가 가위바위보 게임을 합니다.
사용자는 "가위", "바위", "보" 중 하나를 입력하고, 컴퓨터는 무작위로 선택합니다.
3판 2선승제로 승부를 결정하세요.

-- 출력 예시 -- 

[1라운드]
당신의 선택: 가위
컴퓨터의 선택: 보
당신이 이겼습니다! (1승 0패)

[2라운드]
당신의 선택: 보
컴퓨터의 선택: 바위
당신이 이겼습니다! (2승 0패)

🎉 게임 종료: 당신의 승리입니다!

Math.random() - 난수 생성 함수
*/

const options = ['가위', '바위', '보'];
var userWin = 0;
var computerWin = 0;
while (1) {
  var userChoice = prompt('가위, 바위, 보 중 하나를 입력하세요.');
  if (options.includes(userChoice)) {
    var result = rockGame(userChoice);
    if (result == 'win') {
      console.log('이겼다!');
      userWin++;
    } else if (result == 'lose') {
      console.log('졌다 ㅠ');
      computerWin++;
    } else {
      console.log('비겼다.');
    }
    console.log(`스코어 ${userWin}(당신) : ${computerWin} (컴퓨터)`);
    if (userWin >= 2) {
      console.log('축하합니다. 당신이 이겼습니다.');
      break;
    } else if (computerWin >= 2) {
      console.log('당신이 졌습니다.');
      break;
    }
  } else {
    alert('잘못된 입력입니다.');
  }
}
function rockGame(userChoice) {
  const randomIndex = Math.floor(Math.random() * options.length) + 1;
  const computerChoice = options[randomIndex];
  if (userChoice == '가위') {
    if (computerChoice == '바위') {
      return 'lose';
    } else if (computerChoice == '가위') {
      return 'draw';
    } else {
      return 'win';
    }
  } else if (userChoice == '바위') {
    if (computerChoice == '바위') {
      return 'draw';
    } else if (computerChoice == '가위') {
      return 'win';
    } else {
      return 'lose';
    }
  } else {
    if (computerChoice == '바위') {
      return 'win';
    } else if (computerChoice == '가위') {
      return 'lose';
    } else {
      return 'draw';
    }
  }
}
