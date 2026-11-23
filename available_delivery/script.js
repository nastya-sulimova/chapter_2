// - Доступные способы доставки

//     При оформлении заказа часть способов доставки может быть недоступна из-за города или суммы заказа.
// Верни только доступные способы доставки для указанного города и преобразуй их в данные для радиокнопок.

//     // Вход:
const deliveryMethods = [
  {
    id: "courier",
    title: "Courier",
    cities: ["Moscow", "Kazan"],
    minOrder: 1000,
  },
  { id: "pickup", title: "Pickup", cities: ["Moscow", "Samara"], minOrder: 0 },
  { id: "express", title: "Express", cities: ["Kazan"], minOrder: 2000 },
];
const city = "Moscow";
const orderTotal = 1200;

//     // Вызов:
//     const result = getAvailableDeliveryOptions(deliveryMethods, city, orderTotal);

//     // Ожидаемый результат:
//     const expected = [
//       { value: "courier", label: "Courier" },
//       { value: "pickup", label: "Pickup" }
//     ];

function getAvailableDeliveryOptions(deliveryMethods, city, orderTotal) {
  return deliveryMethods
    .filter((item) => item.cities.includes(city) && orderTotal >= item.minOrder)
    .map((item) => ({ value: item.id, label: item.title }));
}

console.log(getAvailableDeliveryOptions(deliveryMethods, city, orderTotal));
