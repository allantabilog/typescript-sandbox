// I promise X
// eventually: X is resolved or X is failed (rejected)

let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log(`This is in the then(): ${message}`);
}).catch((err) => console.log(`Error: ${err}`));
