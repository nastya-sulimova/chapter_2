// - Проверка прав доступа

//     Перед показом кнопки или страницы приложение может проверять, есть ли у пользователя подходящее право.
// Верни `true`, если среди прав пользователя есть хотя бы одно право из списка необходимых, иначе верни `false`.

//     // Вход:
const userPermissions = ["profile:read", "orders:read", "orders:update"];
const requiredPermissions = ["admin:panel", "orders:update"];

//     // Вызов:
//     const result = hasAccess(userPermissions, requiredPermissions);

//     // Ожидаемый результат:
//     const expected = true;

function hasAccess(userArr, requiredArr) {
  let arrWithPerm = [];
  for (let i = 0; i < requiredArr.length; i++) {
    arrWithPerm.push(userArr.some((item) => item === requiredArr[i]));
  }
  return arrWithPerm.some((item) => item === true);
}

console.log(hasAccess(userPermissions, requiredPermissions));
