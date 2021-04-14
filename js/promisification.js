/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = (dish) => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve("вот ваше блюдо");
//       }
//       reject("извините, закончились продукты");
//     }, DELAY);
//   });

//   //return promise;
// };

//const p = makeOrder("пирожок");

// makeOrder("пирожок").then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log("onMakeOrderSuccess");
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log("onMakeOrderError");
//   console.log(error);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

const makeOrder = (dish) => {
  return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
};

makeOrder("пирожок").then(onMakeOrderSuccess);

function onMakeOrderSuccess(result) {
  console.log("onMakeOrderSuccess");
  console.log(result);
}

function onMakeOrderError(error) {
  console.log("onMakeOrderError");
  console.log(error);
}
