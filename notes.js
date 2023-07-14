// console.log("Before interval");

// // let count = 0;

// // setInterval(() => {
// //   console.log(count++);
// // }, 1000);

// console.log("After interval");

// console.log("The above doesn't work because 1 and 8 are synch and 5 is async");

// console.log("New code:");

// for (let i = 0; i < 50; i++) {
//   console.log(i);
// }

// console.log("After new code");

// console.log("Before timeout promise");
// let promise = setTimeout(() => {
//   console.log("TimeOut Promise");
// }, 5000);

// console.log("After TimeOut promise");

console.log("Before Interval Promise");
let promise = new Promise((resolve, reject) => {
  let num = Math.round(Math.random() * 10);

  if (num % 2 == 0) {
    resolve(num);
  } else {
    reject(num);
  }
});
console.log(promise);

// promise
//   .then((num) => console.log(`${num} is even`))
//   .catch((err) => {
//     console.error(`${err} is odd`);
//   });

promise
  .then((num) => {
    return { num, doubled: num * 2 };
  })
  .then((obj) => console.log(`${obj.num} doubled is ${obj.doubled}`))
  .catch((err) => {
    console.error(`${err} is odd`);
  });
