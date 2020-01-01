'use strict';

// code partially used from: https://coderbyte.com/algorithm/implement-queue-using-two-stacks

class PsuedoQueue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  // implement enqueue method by using only stacks
  // and the push and pop functions
  enqueue(element) {
    this.stackOne.push(element);
  }

  // implement dequeue method by pushing all elements
  // from stack 1 into stack 2, which reverses the order
  // and then popping from stack 2
  dequeue() {
    if (this.stackOne.length === 0) {
      return 'There is nothing to dequeue, the stack is empty';
    }
    while (this.stackOne.length > 0) {
      let p = this.stackOne.pop();
      this.stackTwo.push(p);
    }

    const result = this.stackTwo.pop();

    while (this.stackTwo.length > 0) {
      let p = this.stackTwo.pop();
      this.stackOne.push(p);
    }

    return result;
  }
}

module.exports = PsuedoQueue;