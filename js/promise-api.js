/*
 * Эта функция будет вызвана автоматически. В ней можно выполнять
 * любые асинхронные операции. Когда они завершатся — нужно
 * вызвать одно из: resolve(результат) при успешном выполнении,
 * или reject(ошибка) при ошибке.
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  if (canFulfill) {
    resolve("успешное выполнение (fulfielled)");
  }
  reject("выполнен с ошибкой (rejected)");
});

console.log(promise);
