let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число");
  input = Number(input);
  numbers.push(input);

  if (!input) {
    break;
  }
}

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
