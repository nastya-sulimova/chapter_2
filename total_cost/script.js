// - Сумма оплаченных заказов

//     Для аналитики обычно нужно учитывать только заказы с нужным статусом, а черновики, ожидание оплаты и отмены исключать.
// Посчитай общую сумму заказов, у которых `status` равен `"paid"`.

//     ```jsx
//     // Вход:
const orders = [
  { id: 1, status: "paid", amount: 100 },
  { id: 2, status: "pending", amount: 200 },
  { id: 3, status: "paid", amount: 300 },
  { id: 4, status: "cancelled", amount: 400 },
];

//     // Вызов:
//     const result = getPaidOrdersTotal(orders);

//     // Ожидаемый результат:
//     const expected = 400;

function getPaidOrdersTotal(arr) {
  return arr
    .filter((item) => item.status === "paid")
    .reduce((sum, item) => sum + item.amount, 0);
}

console.log(getPaidOrdersTotal(orders));
