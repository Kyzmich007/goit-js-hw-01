"use strict";
let input = prompt("Введите число!");
let total = 0;
if (input === null) {
  console.log("Отменено пользователем!");
} else if (isNaN(input)) {
  alert("Было введено не число, попробуйте еще раз");
} else {
  for (let i = 0; ; i += +input) {
    total += +input;
    console.log(total);
    input = prompt("Введите число!");
    if (isNaN(input)) {
      alert("Было введено не число, попробуйте еще раз");
      input = 0;
      continue;
    }
    if (input === null) {
      alert(`Общая сумма чисел равна ${total}`);
      break;
    }
  }
}
