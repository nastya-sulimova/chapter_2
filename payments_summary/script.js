// - Сводка по платежам

//     В финансовом отчете нужно быстро получить общую сумму успешных и неуспешных платежей.
// Верни объект с двумя полями: `successTotal` для успешных платежей и `failedTotal` для отклоненных платежей.

//     // Вход:
const payments = [
  { id: 1, status: "success", amount: 500 },
  { id: 2, status: "failed", amount: 200 },
  { id: 3, status: "success", amount: 300 },
  { id: 4, status: "failed", amount: 100 },
];

//     // Вызов:
//     const result = getPaymentsSummary(payments);

//     // Ожидаемый результат:
//     const expected = {
//       successTotal: 800,
//       failedTotal: 300
//     };

// function getPaymentsSummary(arr) {
//   let objExpected = {};
//   let successTotal = arr
//     .filter((item) => item.status === "success")
//     .reduce((sum, item) => sum + item.amount, 0);
//   let failedTotal = arr
//     .filter((item) => item.status === "failed")
//     .reduce((sum, item) => sum + item.amount, 0);
//   objExpected.successTotal = successTotal;
//   objExpected.failedTotal = failedTotal;
//   return objExpected;
// }

// console.log(getPaymentsSummary(payments));

function getPaymentsSummary(arr) {
  let objExpected = {};
  function forReduce(sum, item) {
    return sum + item.amount;
  }
  let successTotal = arr
    .filter((item) => item.status === "success")
    .reduce(forReduce, 0);
  let failedTotal = arr
    .filter((item) => item.status === "failed")
    .reduce(forReduce, 0);
  objExpected.successTotal = successTotal;
  objExpected.failedTotal = failedTotal;
  return objExpected;
}

console.log(getPaymentsSummary(payments));

/*работать работает, но оптимизировать повторяющийся код не получается
если функцию для reduce создала, потому что она абсолютно одинаковая,
то для фильтрации уже никак из-за разного значения свойства*/
