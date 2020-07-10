"use strict";
const credits = 23580;
const pricePerDroid = 3000;
const valueNumDroid = prompt("Введите количество дроидов");
let totalPrice;
let message;
if (valueNumDroid === null) {
  message = "Отменено пользователем!";
} else if (isNaN(valueNumDroid)) {
  message = "Вы ввели неверное количество дроидов.";
} else {
  totalPrice = Math.round(valueNumDroid) * pricePerDroid;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    message = `Вы купили ${Math.round(
      valueNumDroid
    )} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
  }
}

console.log(message);