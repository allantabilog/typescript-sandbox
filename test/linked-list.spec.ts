import { NumberLinkedList } from "../src/linked-list";

describe("NumberLinkedList", () => {
  it("should create an empty list", () => {
    const list = new NumberLinkedList();
    expect(() => list.at(0)).toThrow(RangeError);
  });
  it("should create a non empty list", () => {
    const list = new NumberLinkedList();
    list.append(1);
    expect(list.at(0)).toBe(1);
    list.append(2);
    expect(list.at(1)).toBe(2);
  });
});
