'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else if (this.next !== null){
      let currentNode = this.head;
      while(currentNode.next !== null){
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
    this.size++;
  }

  insertBefore(value, newValue) {
    var node = new Node(newValue);
    let currentNode = this.head;
    let previousNode = this.head;
    
    if(currentNode.value === value) {
      node.next = currentNode;
      this.head = node;
    } else {
      currentNode = currentNode.next;
    }

    while(currentNode) {
      if(currentNode.value === value) {
        previousNode.next = node;
        node.next = currentNode;
      }
      previousNode = previousNode.next;
      currentNode = currentNode.next;
    }
    this.size++;
  } 

  insertAfter(value, newValue) {
    var node = new Node(newValue)
    let currentNode = this.head;

    if(currentNode.value === value) {
      node.next = currentNode;
      this.head = node;
    } else {
      currentNode = currentNode.next;
    }

    while(currentNode) {
      if(currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
      }
      currentNode = currentNode.next;
    }
    this.size++;
  }
}

const ll = new LinkedList();
// ll.head = new Node(2);
// ll.head.next = new Node(3);
// ll.head.next.next = new Node(4);

// ll.insertBefore(3, 6);
// ll.insertAfter(3, 11);

// console.log('linked list', JSON.stringify(ll.head));
// console.log(' linked list length', ll);

module.exports = LinkedList;