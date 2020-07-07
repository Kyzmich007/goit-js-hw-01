"use strict";
let input = prompt("Введите число!");
let total = 0;
while (input !== null) {
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    input = 0;
  }
  total += +input;
  input = prompt("Введите число!");
}
alert(`Общая сумма чисел равна ${total}`);
