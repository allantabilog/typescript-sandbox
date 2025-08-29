function sieveOfEratosthenes(limit: number): number[] {
  // Create an array to track prime numbers.
  const isPrime: boolean[] = new Array(limit + 1).fill(true);

  // 0 and 1 are not prime numbers.
  isPrime[0] = isPrime[1] = false;

  // Start with the first prime number, 2.
  let p = 2;

  while (p * p <= limit) {
    // If isPrime[p] is still true, then p is a prime number.
    if (isPrime[p]) {
      // Mark all multiples of p as not prime.
      for (let i = p * p; i <= limit; i += p) {
        isPrime[i] = false;
      }
    }
    p++;
  }

  // Collect the prime numbers into a result array.
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Example usage:
const limit = 8000; // Find prime numbers up to 50
const primes = sieveOfEratosthenes(limit);
console.log("Prime numbers up to", limit, "are:", primes.join(", "));
