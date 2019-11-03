'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// stack.top.next.next.next
class Stack {
  // in Stack new nodes go into the top, there is only one opening (the top)
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    // we will always reassign this.top, so no if's are needed
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    
    const topNode = this.top;
    this.top = topNode.next;
    return topNode.value;
  }

  peek() {
    return this.top === null ? null : this.top.value;    
  }

  isEmpty() {
    return this.top === null;
  }

  toArray() {
    const arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

class Queue {
  // in Queue, we have two openings, front and back
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    // we are pointing backwards in our queue
    newNode.next = this.back;   
    this.back = newNode;

    if (this.front === null){
      this.front = newNode;
    } 
  }

  dequeue() {
    if (this.front === null) {
      return null;
    }
    const frontNode = this.front;

    
    // checking to see if there is more than one node
    if (this.back !== this.front) {
      let current = this.back;      
      while (current.next !== this.front) {
        current = current.next;
      }
      this.front = current;
      this.front.next = null;
    } 
    // this takes care of the edge case of only having one node
    else {
      this.front = null;
      this.back = null;
    }
    return frontNode.value;
  }

  peek() {
    return this.front === null ? null : this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }

  toArray() {
    const arr = [];
    let current = this.back;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

module.exports = {Node, Stack, Queue};
