//To simulate an asynchronous call
export function fetchCount(amount = 1) {
  console.log('1112112->'+amount)
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 2000)
  );
}
