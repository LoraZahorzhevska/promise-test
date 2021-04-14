/*
 * Эта функция будет вызвана автоматически. В ней можно выполнять
 * любые асинхронные операции. Когда они завершатся — нужно
 * вызвать одно из: resolve(результат) при успешном выполнении,
 * или reject(ошибка) при ошибке.
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve("успешное выполнение (fulfielled)");
    }
    reject("выполнен с ошибкой (rejected)");
  }, 2000);
});

//console.log(promise);
//В метод then передаются две функции, которые будут вызваны когда промис перейдет в состояние выполнен (settled)
// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// также можно вынести функции во внешку
// promise.then(onFulfielled, onRejected);

function onFulfielled(result) {
  console.log(result);
}

function onRejected(error) {
  console.log(error);
}

//Цепочки промисов - chaining

// promise
//   .then((result) => {
//     console.log(result);

//     return 5;
//   })
//   .then((x) => {
//     console.log(x);

//     return 10;
//   })
//   .then((y) => {
//     console.log(y);
//   });

//Cath
promise
  .then(onFulfielled)
  .then((x) => {
    console.log(x);

    return 10;
  })
  .then((y) => {
    console.log(y);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("я буду выполнен в любом случае"));

// finally
