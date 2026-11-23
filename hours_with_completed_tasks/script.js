// - Часы по завершенным задачам

//     В отчетах по работе часто нужно учитывать только завершенные задачи и показывать время в удобных единицах.
// Возьми только записи со статусом `"done"`, переведи минуты в часы и посчитай общее количество часов.

//     // Вход:
const workLogs = [
  { taskId: 1, status: "done", minutes: 120 },
  { taskId: 2, status: "in-progress", minutes: 90 },
  { taskId: 3, status: "done", minutes: 30 },
  { taskId: 4, status: "done", minutes: 60 },
];

//     // Вызов:
//     const result = getCompletedHours(workLogs);

//     // Ожидаемый результат:
//     const expected = 3.5;

// function getCompletedHours(arr) {
//   return arr
//     .filter((item) => item.status === "done")
//     .reduce((sum, item) => sum + item.minutes / 60, 0);
// }

// console.log(getCompletedHours(workLogs));

function getCompletedHours(arr) {
  function getApproprTasks(arr) {
    return arr.filter((item) => item.status === "done");
  }
  function getApproprHours(sum, item) {
    return sum + item.minutes / 60;
  }
  return getApproprTasks(workLogs).reduce(getApproprHours, 0);
}

console.log(getCompletedHours(workLogs));

//честно говоря, первый вариант мне все равно нравится больше, чем вариант с функциями внутри(((
