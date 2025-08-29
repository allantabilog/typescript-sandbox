import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
  it('Should output "Hello World"', () => {
    expect(Greeter.greet()).toBe("Hello World");
  });
});

const foo = async () => {
  return { value: 1 };
};

test("test async function", async () => {
  await foo().then((result) => console.log(result));

  const value = (await foo()).value;
  console.log(`got value ${value}`);
});
