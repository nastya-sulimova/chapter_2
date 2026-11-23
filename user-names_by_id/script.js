// - Имена пользователей по id

//     В приложениях часто нужна структура для быстрого получения данных по `id`, например при рендере таблиц или списков.
// Сформируй объект, где ключ — `id` пользователя, а значение — полное имя из `firstName` и `lastName`.

//     // Вход:
const users = [
  { id: 1, firstName: "Anna", lastName: "Smirnova" },
  { id: 2, firstName: "Pavel", lastName: "Ivanov" },
  { id: 3, firstName: "Maria", lastName: "Petrova" },
];

//     // Вызов:
//     const result = getUserNamesById(users);

//     // Ожидаемый результат:
//     const expected = {
//       1: "Anna Smirnova",
//       2: "Pavel Ivanov",
//       3: "Maria Petrova"
//     };

function getUserNamesById(arr) {
  let objExpected = {};
  for (let i = 0; i < arr.length; i++) {
    objExpected[arr[i].id] = arr[i].firstName + " " + arr[i].lastName;
  }

  return objExpected;

  /*эту задачу я решила последней, потому что при решении задач по прорядку из списка я вообще не поняла,
  как из массива создать объект
  при решении следующих задач до меня один вариант дошел, и вот я вернулась сюда

  
  вопросы ниже по динамической записи возникли при первоначальных безуспешных попытках решения данной задачи;
  после решения они никуда не делись*/

  //названия самого свойства не одинаковые, они вычисляются, соответсвенно используем динамическую запись
  //для названия ключа  [item.id]
  //но почему в таком случае нет ошибок с item.firstName + " " + item.lastName
  //здесь же тоже значения подставляются каждый раз разные, они вычисляются

  // return arr.map((item) => ({
  //   [item.id]: item.firstName + " " + item.lastName,
  // }));
}

console.log(getUserNamesById(users));
