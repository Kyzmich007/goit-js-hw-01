"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const value = prompt("Введите пароль");
if (value === null) {
  message = "Отменено пользователем!";
} else if (value === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
