// 1. Что выведет следующий код?
// const a = { x: 1 };
// const b = { x: 1 };
// const c = a;
// console.log(a === b);  false,
/*потому что так сравнивать объекты нельзя, мы сравниваем ссылки на разные объекты*/
// console.log(a === c);  true,
/*потому что в данном случае копирования не произошло, мы не создали второй объект, аналогичный а,
а просто создали еще одну ссылку на один и тот же объект, поэтому консоль при сравнении этих ссылок возвращает true*/

// 2. Что выведет следующий код?
// let a = { name: "Gosha" };
// let b = a;
// b.name = "Nikita";
// console.log(a.name, b.name);
/*дважды выведется Nikita, поскольку в строке let b = a мы просто создали новую ссылку на исходный объект,
соотвественно в строке b.name = "Nikita" мы меняем значение name именно у исходного объекта,
a.name = b.name*/

// 3. Напиши функцию `countKeys`, которая возвращает количество ключей в объекте
// function countKeys(object) {
//   const keysArr = Object.keys(object);
//   const keysAmount = keysArr.length;
//   //   return `Количество ключей в объекте ${object}: ${keysAmount}`;
//   /*почему в таком варианте не прописывается в возвращаемой строке имя объекта, передаваемого при вызове функции?*/
//   return `Количество ключей в объекте: ${keysAmount}`;
// }

// const user = {
//   name: "Акакий",
//   age: 15,
//   mood: "потусить бы за гаражами",
// };

// console.log(countKeys(user));

// 4. Есть объект и массив ключей. Проверь, все ли ключи из массива есть в объекте. js

const user = {
  name: "Акакий",
  age: 15,
  mood: "потусить бы за гаражами",
};

// const keysArr = Object.keys(user);
// for (const element of keysArr) {
//   console.log(element);
// }

const keysArr = Object.keys(user);

function areAllKeysInArr() {
  let trueCounter = 0;
  for (let index = 0; index < keysArr.length; index++) {
    for (const key in user) {
      if (key === keysArr[index]) {
        ++trueCounter;
      }
    }
  }

  return trueCounter === keysArr.length ? true : false;
}

console.log(areAllKeysInArr());

// /*но вообще не уверена, что я правильно поняла суть задачи*/

// 5. Перепиши доступ к вложенному значению с использованием `?.`
// const user = { address: { city: 'London' } };
// console.log(user.address.city);

// const user = {
//   address: {
//     city: "London",
//   },
// };
// console.log(user?.address?.city ?? "не указано");

/*опять же, если правильно поняла суть*/

// 6. Перепиши код, используя деструктуризацию:
// const user = { name: 'Bob', age: 30 };
// const name = user.name;
// const age = user.age;

// const user = { name: "Bob", age: 30 };
// const { name, age } = user;

// console.log(name, age);

// 7. Что содержит rest?
// const user = { id: 1, name: "Tom", age: 22 };
// const { id, ...rest } = user;

// /*rest содержит объект с оставшимися (после объявления в качестве отдельной переменной id) парами ключ-значение,
// то есть {name: 'Tom', age: 22}*/

// 8. Напиши функцию, которая будет выделять указанные поля и возвращать оставшиеся.
// getRest({ a: 1, b: 2, c: 3 }, ['a']) // { b: 2, c: 3 }

// function getRest(object, arr) {
//   const newKeysArr = [];
//   const keysArr = Object.keys(object);
//   for (let index = 0; index < keysArr.length; index++) {
//     if (keysArr[index] !== arr[0]) {
//       newKeysArr.push(keysArr[index]);
//     }
//   }
//   console.log(newKeysArr);

//   const newObject = {};
//   for (let index = 0; index < newKeysArr.length; index++) {
//     console.log(newKeysArr[index]);
//     newObject.newKeysArr[index] = object.newKeysArr[index];
//   }

//   return newObject;
// }

// console.log(getRest({ a: 1, b: 2, c: 3 }, ["a"])); // { b: 2, c: 3 }

/*совершенно не понимаю ошибку на 98 строке:

Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at getRest (tasksObjectsHard.js:98:52)
    at tasksObjectsHard.js:104:13

да, вариант изначально сельский, только с одним элементом в массиве, но нужно было с чего-то начинать
- вычислила массив оставшихся ключей;
- объявила пустой объект для сохранения результата;
- с помощью цикла прохожусь по массиву с оставшимися ключами и записываю в объект оставшиеся пары ключ-значение;
- возвращаю получившийся объект
...
- ничего не возвращается;
- иду спать*/
