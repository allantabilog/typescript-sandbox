// sieve of erathosthenes in a functional progamming style
// with a generator function
function* sieve(limit: number) {
  let n = 2;
  const primes: number[] = [];
  while (n <= limit) {
    if (primes.every((p) => n % p !== 0)) {
      primes.push(n);
      yield n;
    }
    n++;
  }
}

function* countToN(n: number) {
  for (let i = 2; i <= n; i++) {
    yield i;
  }
}

// console.log("running countToN");
// for (const number of countToN(100)) {
//   console.log(number);
// }

// for (const number of sieve(8000)) {
//   console.log(`prime number: ${number}`);
// }

function createIterator(array: number[]) {
  let index = 0;

  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
}

const testIterator = createIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(testIterator.next());
console.log(testIterator.next());
console.log(testIterator.next());
console.log(testIterator.next());
console.log(testIterator.next());

// function that takes a number called limit
// and returns an array of numbers up to limit
const countTo = (limit: number): number[] =>
  Array.from({ length: limit - 1 }, (_, i) => i + 2);

console.log(countTo(10));
