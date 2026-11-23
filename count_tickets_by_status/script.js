// - Итоги по статусам заявок

//     На дашборде поддержки полезно видеть, сколько заявок находится в каждом статусе.
// Сформируй объект, где ключ — статус заявки, а значение — количество заявок с этим статусом.

//     // Вход:
const tickets = [
  { id: 1, status: "open" },
  { id: 2, status: "closed" },
  { id: 3, status: "open" },
  { id: 4, status: "pending" },
  { id: 5, status: "open" },
];

//     // Вызов:
//     const result = countTicketsByStatus(tickets);

//     // Ожидаемый результат:
//     const expected = {
//       open: 3,
//       closed: 1,
//       pending: 1
//     };

function countTicketsByStatus(arr) {
  let obj = {};
  let openCounter = 0;
  let closedCounter = 0;
  let pendingCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === "open") {
      openCounter++;
      obj.open = openCounter;
      // obj[arr[i].status] = openCounter;
    }
    if (arr[i].status === "closed") {
      closedCounter++;
      obj.closed = closedCounter;
    }
    if (arr[i].status === "pending") {
      pendingCounter++;
      obj.pending = pendingCounter;
    }
  }
  return obj;
}

console.log(countTicketsByStatus(tickets));
