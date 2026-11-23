// - Карточки товаров

//     API часто возвращает данные в формате, который неудобно напрямую отдавать в UI-компоненты.
// Подготовь массив данных для карточек товара: оставь `id` и `title`, цену преобразуй в строку с долларом,
// а доступность товара преврати в поле `disabled`.

//     // Вход:
const products = [
  { id: 1, title: "Phone", price: 500, inStock: true },
  { id: 2, title: "Laptop", price: 1200, inStock: false },
];

//     // Вызов:
//     const result = getProductCards(products);

//     // Ожидаемый результат:
//     const expected = [
//       { id: 1, title: "Phone", priceLabel: "$500", disabled: false },
//       { id: 2, title: "Laptop", priceLabel: "$1200", disabled: true }
//     ];

function getProductCards(arr) {
  return arr.map((item) => ({
    id: item.id,
    title: item.title,
    priceLabel: `$${item.price}`,
    disabled: item.inStock === true ? false : true,
  }));
}

console.log(getProductCards(products));
