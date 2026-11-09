// // - Удвоение чисел
// //     <aside>
// //     В интерфейсах и отчетах часто нужно получить новый список значений на основе исходного списка, не меняя входные данные.
// // Верни новый массив той же длины, где каждое число умножено на `2`.
// //     ```jsx
// //     // Вход:
// const numbers = [1, 2, 3];

// //     // Вызов:
// //     const result = doubleNumbers(numbers);
// //     // Ожидаемый результат:
// //     const expected = [2, 4, 6];
// //     ```
// //     </aside>
// function doubleNumbers(arr) {
//   const result = arr.map((item) => {
//     return item * 2;
//   });
//   return result;
// }

// console.log(doubleNumbers(numbers));

//-----------------------------------------------------------------------------------------------------------------------

// - Строки в верхнем регистре

//     <aside>
//     Перед показом тегов или коротких подписей иногда нужно привести все значения к единому виду.
//     Верни новый массив строк, где каждая строка записана в верхнем регистре.
//     ```jsx
//     // Вход:
// const words = ["a", "Bc"];

// //     // Вызов:
// //     const result = getUppercaseWords(words);

// //     // Ожидаемый результат:
// //     const expected = ["A", "BC"];
// //     ```
// //     </aside>

// function getUppercaseWords(arr) {
//   const result = arr.map((item) => {
//     return item.toUpperCase();
//   });

//   return result;
// }

// console.log(getUppercaseWords(words));

//-----------------------------------------------------------------------------------------------------------------------------

// API часто возвращает объекты с лишними полями, а компоненту нужен только список имен.
// Верни новый массив строк, взяв значение `name` из каждого объекта в исходном порядке.

// ```jsx
// // Вход:
// const users = [
//   { id: 1, name: "x" },
//   { id: 2, name: "y" },
// ];

// // // Вызов:
// // const result = getUserNames(users);

// // // Ожидаемый результат:
// // const expected = ["x", "y"];
// // ```

// function getUserNames(arr) {
//   const result = arr.map((item) => {
//     return item.name;
//   });

//   return result;
// }

// console.log(getUserNames(users));

//-------------------------------------------------------------------------------------------------------------------------------

// - Только четные числа

//     <aside>
//     Для статистики или отображения иногда нужно оставить только значения, которые подходят под условие.
//     Верни новый массив только из четных чисел, сохранив их порядок.

//     ```jsx
//     // Вход:
// const numbers = [1, 2, 3, 4];

// //     // Вызов:
// //     const result = getEvenNumbers(numbers);

// //     // Ожидаемый результат:
// //     const expected = [2, 4];
// //     ```
// //     </aside>

// function getEvenNumbers(arr) {
//   let result = arr.filter((item) => {
//     return item % 2 === 0;
//   });
//   return result;
// }

// console.log(getEvenNumbers(numbers));

//-----------------------------------------------------------------------------------------------------------------------

// - Только строки

//     <aside>
//     В смешанных данных могут встретиться числа, строки, `null` и другие значения.
//     Верни новый массив только из тех элементов, которые являются строками.

//     ```jsx
//     // Вход:
// const values = [1, "a", null, "b", 2];

// //     // Вызов:
// //     const result = getOnlyStrings(values);
// //     // Ожидаемый результат:
// //     const expected = ["a", "b"];
// //     ```
// //     </aside>

// function getOnlyStrings(arr) {
//   let result = arr.filter((item) => {
//     return typeof item === "string";
//     // return typeof item === "string" || "number";   почему возвращается null
//   });
//   return result;
// }

// console.log(getOnlyStrings(values));

//-------------------------------------------------------------------------------------------------------------------

// - Очистка пустых значений

//     <aside>
//     Перед рендером списка часто нужно убрать отсутствующие значения, но не потерять полезные falsy-значения.
// Верни новый массив без `null` и `undefined`, оставив `0`, пустую строку и `false`.

//     ```jsx
//     // Вход:
// const values = [0, null, 1, undefined, "", false];

// //     // Вызов:
// //     const result = removeEmptyValues(values);
// //     // Ожидаемый результат:
// //     const expected = [0, 1, "", false];
// //     ```
// //     </aside>

// function removeEmptyValues(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(typeof arr[i]);
//     //почему тип null - это object?
//     if (typeof arr[i] !== "object" || typeof arr[i] !== "undefined") {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeEmptyValues(values));

//не понимаю, почему остаются null и undefined

//---------------------------------------------------------------------------------------------------------------------

// - Сумма чисел

//     <aside>
//     В отчетах часто нужно получить общий итог по списку значений.
//     Посчитай сумму всех чисел в массиве; для пустого массива верни `0`.

//     ```jsx
//     // Вход:
// const numbers = [1, 2, 3];

// //     // Вызов:
// //     const result = getNumbersSum(numbers);

// //     // Ожидаемый результат:
// //     const expected = 6;

// //     // Дополнительный пример:
// //     const emptyResult = getNumbersSum([]);
// //     const emptyExpected = 0;
// //     </aside>

// function getNumbersSum(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let result = arr.reduce((sum, item) => sum + item, 0);
//   return result;
// }

// console.log(getNumbersSum(numbers));

//---------------------------------------------------------------------------------------------------------------------

// - Произведение чисел

//     <aside>
//     Иногда итог считается не сложением, а последовательным умножением значений.
//     Верни произведение всех чисел в массиве; для пустого массива верни `1`.

//     ```jsx
//     // Вход:
// const numbers = [2, 3, 4];

// //     // Вызов:
// //     const result = getNumbersProduct(numbers);

// //     // Ожидаемый результат:
// //     const expected = 24;
// //     </aside>

// function getNumbersProduct(arr) {
//   if (arr.length === 0) {
//     return 1;
//   }
//   let result = arr.reduce((mult, item) => mult * item, 1);
//   return result;
// }

// console.log(getNumbersProduct(numbers));

//---------------------------------------------------------------------------------------------------------------------

// - Первое число больше десяти

//     <aside>
//     При поиске подходящего значения важно вернуть именно первое совпадение, а не все подходящие элементы.
//     Найди первое число, которое строго больше `10`; если такого числа нет, верни `undefined`.

//     ```jsx
//     // Вход:
// const numbers = [2, 5, 11, 3];

// //     // Вызов:
// //     const result = findFirstGreaterThanTen(numbers);

// //     // Ожидаемый результат:
// //     const expected = 11;

// //     // Дополнительный пример:
// //     const secondResult = findFirstGreaterThanTen([1, 2, 3]);
// //     const secondExpected = undefined;
// //     </aside>

// function findFirstGreaterThanTen(arr) {
//   let result = arr.filter((item) => item > 10);
//   return result[0] || undefined;
// }

// console.log(findFirstGreaterThanTen(numbers));

//--------------------------------------------------------------------------------------------------------------------

// - Проверка пустой строки

//     <aside>
//     Перед отправкой формы можно проверить, есть ли среди полей пустое значение.
// Верни `true`, если в массиве есть хотя бы одна пустая строка `""`, иначе верни `false`.

//     ```jsx
//     // Вход:
// const strings = ["a", "", "b"];
// //     // Вызов:
// //     const result = hasEmptyString(strings);

// //     // Ожидаемый результат:
// //     const expected = true;
// //     </aside>

// function hasEmptyString(arr) {
//   return arr.includes("");
// }

// console.log(hasEmptyString(strings));

//-------------------------------------------------------------------------------------------------------------------

// - Все числа больше нуля

//     <aside>
//     Для валидации набора значений нужно убедиться, что каждое значение проходит проверку.
// Верни `true`, если все числа в массиве строго больше `0`; для пустого массива верни `true`.

//     ```jsx
//     // Вход:
// const numbers = [1, 2, 3];
// //     // Вызов:
// //     const result = areAllNumbersPositive(numbers);
// //     // Ожидаемый результат:
// //     const expected = true;
// //     </aside>

// function areAllNumbersPositive(arr) {
//   if (arr.length === 0) {
//     return true;
//   }
//   // arr.forEach((element) => {
//   //   element > 0;
//   // });
//   // //здесь думала использовать forEach, но не получилось
//   let trueCounter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       trueCounter++;
//     }
//   }

//   return trueCounter === arr.length ? true : false;
// }

// console.log(areAllNumbersPositive(numbers));

//--------------------------------------------------------------------------------------------------------------------------

// - Проверка числа 42

//     <aside>
//     Иногда достаточно проверить, есть ли в списке конкретное значение.
// Верни `true`, если в массиве есть число `42`, иначе верни `false`.

//     ```jsx
//     // Вход:
// const numbers = [1, 42, 3];
// //     // Вызов:
// //     const result = hasNumber42(numbers);
// //     // Ожидаемый результат:
// //     const expected = true;
// //     </aside>

// function hasNumber42(arr) {
//   return arr.includes(42);
// }

// console.log(hasNumber42(numbers));

//------------------------------------------------------------------------------------------------------------------------

// - Плоский массив из вложенных массивов

//     <aside>
//     Данные могут прийти группами, а интерфейсу нужен один общий список.
// Верни новый массив, убрав один уровень вложенности.

//     ```jsx
//     // Вход:
// const nested = [[1, 2], [3], [4, 5]];
// //     // Вызов:
// //     const result = flattenOneLevel(nested);
// //     // Ожидаемый результат:
// //     const expected = [1, 2, 3, 4, 5];
// //     </aside>

// function flattenOneLevel(arr) {
//   // let result = [];
//   // let result = arr.map((item)=>)
//   // for (let i = 0; i < arr.length; i++) {
//   //   result.push(arr[i].concat(arr[i++]));
//   //   i--;
//   // }
//   let result = arr
//     .reduce((sum, item) => sum + item)
//     .split(",")
//     .join("");
//   return result.split("").map((item) => Number(item));
// }

// console.log(flattenOneLevel(nested));
