// - Видимые задачи

//     В списках задач часто нужно скрывать удаленные или уже завершенные элементы, не меняя исходные данные.
// Верни только те задачи, которые должны отображаться пользователю: задача не удалена и имеет статус `"active"`.

//     ```jsx
//     // Вход:
const tasks = [
  { id: 1, title: "Fix header", status: "active", deleted: false },
  { id: 2, title: "Update footer", status: "done", deleted: false },
  { id: 3, title: "Remove old banner", status: "active", deleted: true },
  { id: 4, title: "Add sidebar", status: "active", deleted: false },
];

//     // Вызов:
//     const result = getVisibleTasks(tasks);

//     // Ожидаемый результат:
//     const expected = [
//       { id: 1, title: "Fix header", status: "active", deleted: false },
//       { id: 4, title: "Add sidebar", status: "active", deleted: false }
//     ];

function getVisibleTasks(arr) {
  return arr.filter(
    (item) => item.status === "active" && item.deleted === false
  );
}

console.log(getVisibleTasks(tasks));
