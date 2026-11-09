// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
// потом переделайте всё как нужно и методом join соедините обратно.

// function camelize(str) {
//   let newStroke = str.split("-");
//   if (newStroke[0].length === 0) {
//     newStroke.shift();
//     let newStrokeToUpperCase = newStroke
//       .map((item) => item[0].toUpperCase() + item.slice(1))
//       .join("");
//     return newStrokeToUpperCase;
//   }

//   let newStrokeToUpperCase = newStroke
//     .map((item) => item[0].toUpperCase() + item.slice(1))
//     .join("");
//   let result =
//     newStrokeToUpperCase[0].toLowerCase() + newStrokeToUpperCase.slice(1);
//   return result;

//   //   console.log(
//   //     newStroke.forEach((item) => {
//   //       item[0].toUpperCase();
//   //     })
//   //   );
// }

// let stroke = "border-left-width";

// console.log(camelize(stroke));

// ------------------------------------------------------------------------------------------------------------------

// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// function filterRange(arr, a, b) {
//   let newArr = arr.filter((item) => item >= a && item <= b);
//   // let newArr = arr.filter((item) => {
//   //   item >= a && item <= b;
//   // });
//   // не понимаю, как правильно расставлять скобки
//   return newArr;
// }

// let array = [7, 9, 101, 50, 23, 45, 83];

// console.log(filterRange(array, 30, 83));

// -----------------------------------------------------------------------------------------------------------------------------

// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (a <= arr[i] <= b) {
//     } else {
//       arr.splce(i, 1);
//     }
//   }
//   return arr;
// }

// let array = [7, 9, 101, 50, 23, 45, 83];
// console.log(array);

// console.log(filterRangeInPlace(array, 30, 83));
// console.log(array);

//эту задачу не поняла

//-----------------------------------------------------------------------------------------------------------------------

// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];
// // ... ваш код для сортировки по убыванию
// alert( arr ); // 8, 5, 2, 1, -10

// let arr = [5, 2, 1, -10, 8];
// console.log(arr.sort((a, b) => b - a));

//------------------------------------------------------------------------------------------------------------------------

// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// function copySorted(arr) {
//   let sorted = [...arr].sort();
//   return sorted;
// }

// let array = ["HTML", "JavaScript", "CSS"];

// console.log(copySorted(array));

//--------------------------------------------------------------------------------------------------------------------------

// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО»
// (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

//вообще не понимаю

//-----------------------------------------------------------------------------------------------------------------------------

// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
// let names = /* ... ваш код */
// alert( names ); // Вася, Петя, Маша

// let user = [
//   { name: "Вася", age: 25 },
//   { name: "Петя", age: 30 },
//   { name: "Маша", age: 28 },
// ];

// function getNames(arr) {
//   let arrNames = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrNames.push(arr[i].name);
//   }
//   return arrNames.join(", ");
//   // return arrNames;
// }

// console.log(getNames(user));

//-------------------------------------------------------------------------------------------------------------------------

// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
// где fullName – состоит из name и surname.

// Например:

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// let usersMapped = /* ... ваш код ... */

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой.
// Попробуйте использовать =>. Это небольшая уловка.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [vasya, petya, masha];

// let usersMapped = users.map(
//   (item) => {
//     for (let key in item) {
//       console.log(item.key);
//     }
//   }

//   // (item.id, (item.fullName = item.name + ' ' + item.surname))
// );

// console.log(usersMapped);

// не понимаю

//----------------------------------------------------------------------------------------------------------------------------

// Отсортировать пользователей по возрасту
// важность: 5
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// // // sortByAge(arr);

// // // // теперь: [vasya, masha, petya]
// // // alert(arr[0].name); // Вася
// // // alert(arr[1].name); // Маша
// // // alert(arr[2].name); // Петя

// function sortByAge(arr) {
//   arr.sort((item1, item2) => {
//     return item1.age - item2.age;
//   });
//   return arr;
// }

// console.log(sortByAge(users));

//----------------------------------------------------------------------------------------------------------------------------

// Перемешайте массив     !!!!!!!ОТСЮДА!!!!!!!
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

// function shuffle(arr) {
//   arr.map(
//     (item, index) => (arr[index] = Math.floor(Math.random() * arr.length))
//   );

//   return arr;
// }

// let array = [1, 2, 3];

// console.log(shuffle(array));

// не понимаю

//----------------------------------------------------------------------------------------------------------------------------

// Получить средний возраст      !!!!!!РЕШЕНА!!!!!!!
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let users = [vasya, petya, masha];

// // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function getAverageAge(arr) {
//   let averageAge = arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
//   return averageAge;
// }

// console.log(getAverageAge(users));

//----------------------------------------------------------------------------------------------------------------------------

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// // alert( unique(strings) ); // кришна, харе, :-O

// function unique(arr) {
//   // for (let i = 0; i <= arr.length; i++) {
//   //   if (arr[i] !== arr[i++]) {
//   //     continue;
//   //   } else {
//   //     arr.splice(i++, 1);
//   //     i--;
//   //   }
//   // }
//   // return arr;

//   // return arr.filter((value) => value !== value);
//   // let firstStep = arr.filter((value, index) => arr[index] !== arr[index + 1]);

//   let firstStep = [arr[0]];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] !== arr[i++]) {
//       firstStep.push(arr[i++]);
//     } else {
//       i--;
//     }
//   }
//   return firstStep;
// }

// console.log(unique(strings));

// не понимаю

//----------------------------------------------------------------------------------------------------------------------------

// Создайте объект с ключами из массива
// важность: 4
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
// Например:

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// // let usersById = groupById(users);
// // /*
// // после вызова у нас должно получиться:
// // usersById = {
// //   john: {id: 'john', name: "John Smith", age: 20},
// //   ann: {id: 'ann', name: "Ann Smith", age: 24},
// //   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// // }
// // */
// // Такая функция очень удобна при работе с данными, которые приходят с сервера.
// // В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
// // Используйте метод .reduce в решении.

// function groupById(arr) {
//   arr.map((item) => {
//     return { id: item };
//   });
// }

// console.log(groupById(users));
