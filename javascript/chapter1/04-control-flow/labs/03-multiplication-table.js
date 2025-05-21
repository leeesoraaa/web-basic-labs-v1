// 문제: 구구단 2단부터 9단까지 출력 (중첩 for문)
for (i = 2; i <= 9; i++) {
  console.log(`=== ${i} 단 ===`);
  for (j = 1; j <= 9; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
