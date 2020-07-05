"use strict";
const country = prompt("Введити страну");
let price;
if (country === null) {
  console.log("Отменено пользователем!");
} else {
  switch (country.toLowerCase()) {
    case "Китай".toLowerCase():
      price = 100;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Чили".toLowerCase():
      price = 250;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Австралия".toLowerCase():
      price = 170;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Индия".toLowerCase():
      price = 80;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    case "Ямайка".toLowerCase():
      price = 120;
      alert(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}
