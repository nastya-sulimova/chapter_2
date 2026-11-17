// - Сумма корзины

//     В корзине интернет-магазина итог зависит не только от цены товара, но и от количества выбранных единиц.
// Посчитай общую стоимость всех позиций, умножая `price` на `quantity` для каждого товара.

//     // Вход:
// const cart = [
//   { title: "Keyboard", price: 100, quantity: 2 },
//   { title: "Mouse", price: 50, quantity: 1 },
//   { title: "Monitor", price: 300, quantity: 1 },
// ];

// //     // Вызов:
// //     const result = getCartTotal(cart);

// //     // Ожидаемый результат:
// //     const expected = 550;

// function getCartTotal(arr) {
//   let result = arr
//     .map((item) => item.price * item.quantity)
//     .reduce((sum, item) => sum + item, 0);
//   return result;
// }

// console.log(getCartTotal(cart));
