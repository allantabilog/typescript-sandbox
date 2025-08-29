export type BASE = "A" | "C" | "G" | "T" | "U";

/**
 * G -> C
C -> G
T -> A
A -> U
 */

/**
 * Convert a base to its complement
 * @param base
 * @returns
 */
export const complement = (base: BASE): BASE => {
  switch (base) {
    case "G":
      return "C";
    case "C":
      return "G";
    case "T":
      return "A";
    case "A":
      return "U";
    default:
      throw new Error("Invalid input DNA.");
  }
};

/**
 * turn input DNA string into its complement
 */
export const toRna = (inputString: string): string =>
  [...inputString].map((t) => complement(t as BASE)).join();

console.log(toRna("ACCTTATTATCTATGG"));
