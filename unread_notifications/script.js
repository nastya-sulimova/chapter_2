// - Список непрочитанных уведомлений

//     В центре уведомлений обычно показывают только то, что пользователь еще не прочитал.
// Верни массив объектов для отображения: оставь только непрочитанные уведомления и
// преобразуй каждое в формат `{ id, text, isImportant }`, где `isImportant` зависит от поля `priority`.

//     // Вход:
const notifications = [
  { id: 1, message: "New comment", read: false, priority: "normal" },
  { id: 2, message: "Payment failed", read: false, priority: "high" },
  { id: 3, message: "Profile updated", read: true, priority: "normal" },
];

//     // Вызов:
//     const result = getUnreadNotifications(notifications);

//     // Ожидаемый результат:
//     const expected = [
//       { id: 1, text: "New comment", isImportant: false },
//       { id: 2, text: "Payment failed", isImportant: true }
//     ];

// function getUnreadNotifications(arr) {
//   return arr
//     .filter((item) => item.read === false)
//     .map((item) => ({
//       id: item.id,
//       text: item.message,
//       isImportant: item.priority === "high" ? true : false,
//     }));
// }

// console.log(getUnreadNotifications(notifications));

function getUnreadNotifications(arr) {
  function forMap(item) {
    return {
      id: item.id,
      text: item.message,
      isImportant: item.priority === "high" ? true : false,
    };
  }
  return arr.filter((item) => item.read === false).map(forMap);
}

console.log(getUnreadNotifications(notifications));
