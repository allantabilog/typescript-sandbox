class NumberListNode {
  value: number;
  next: NumberListNode | undefined;

  constructor(value: number) {
    this.value = value;
    this.next = undefined;
  }
}

export class NumberLinkedList {
  private tail: NumberListNode = { value: 0, next: undefined };
  private head: NumberListNode = this.tail;

  at(index: number): number {
    let result: NumberListNode | undefined = this.head.next;
    while (index > 0 && result != undefined) {
      result = result.next;
      index--;
    }
    if (result === undefined) throw new RangeError();
    return result.value;
  }

  append(value: number) {
    this.tail.next = new NumberListNode(value);
    this.tail = this.tail.next;
  }
}
