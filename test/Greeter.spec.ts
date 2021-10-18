import { Greeter } from "../src/Greeter";

describe('Greeter', () => {
  it('Should output "Hello World"', () => {
    expect(Greeter.greet()).toBe('Hello World');
  })
})