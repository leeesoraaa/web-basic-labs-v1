// 문제: 배열 내 최소값, 최대값을 찾아보세요.

const numbers = [15, 3, 20, 8, 42];
var min_num = numbers[0];
var max_num = numbers[0];
for (const num of numbers) {
  if (num < min_num) {
    min_num = num;
  } else if (num > max_num) {
    max_num = num;
  }
}
console.log(`최소값: ${min_num}, 최대값: ${max_num}`);
