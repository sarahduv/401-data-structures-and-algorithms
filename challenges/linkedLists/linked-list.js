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

  appendAtHead(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let oldHeadNode = this.head;
      this.head = new Node(value);
      this.head.next = oldHeadNode;
    }
    return this.head;
  }

  includes(value) {
    let node = this.head;
    while(node){
      if(node.value === value) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  }

  toString(list) {
    let currentNode = this.head;
    let stringOfLinkedList = '';

    while(currentNode){
      stringOfLinkedList += ` ${currentNode.value}`;
      currentNode = currentNode.next;
    }
    return stringOfLinkedList;
  }

  insertBefore(value, newValue) {
    var node = new Node(newValue);
    let currentNode = this.head;
    let previousNode = null;

    while(currentNode) {
      if(currentNode.value === value) {
        if(previousNode === null) {
          this.head = node;
        } else {
          previousNode.next = node;
        }
        node.next = currentNode;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.size++;
  } 

  insertAfter(value, newValue) {
    var insertedNode = new Node(newValue);
    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.value === value) {
        insertedNode.next = currentNode.next;
        currentNode.next = insertedNode;
        break;
      }
      if(currentNode.next === null) {
        currentNode.next = insertedNode;
      }
      currentNode = currentNode.next;
    }
    this.size++;
  }

  // kthFromEnd(k) {
  //   let currentNode = this.head;
  //   let answerNode = null;
  //   let counter = 0;
  //   let toggle = false;

  //   while(currentNode.next !== null){
  //     if (toggle) {
  //       answerNode = answerNode.next;
  //       currentNode = currentNode.next;
  //       counter++;
  //     } else if (counter === k){
  //       answerNode = this.head;
  //       toggle = true;
  //     } else {
  //       currentNode = currentNode.next;
  //       counter++;
  //     }
  //   }
  // }

  kthFromEnd(k) {
    let length = 0; 
    let current = this.head;
    
    while (current) {
      length++;
      current = current.next;
    }
    
    let k_from_start = length - 1 - k;
    if (k_from_start < 0 || k < 0) {
      return 'exception';
    }
    
    current = this.head;

    while (k_from_start > 0) {
      k_from_start--;
      current = current.next;
    }
    return current;
  }
  
  mergeLinkedList(list2) {
    let current1 = this.head;
    let current2 = list2.head;
    let zipped = new LinkedList();
    while (current1 || current2) {
      if (current1) {
        zipped.append(current1.value);
        current1 = current1.next;
      } 
      if (current2) {
        zipped.append(current2.value);
        current2 = current2.next;
      }
    } 
    return zipped.head;
  }
}

// const ll = new LinkedList();
// ll.head = new Node(2);
// ll.head.next = new Node(3);
// ll.head.next.next = new Node(4);
// ll.head.next.next.next = new Node(5);
// ll.head.next.next.next.next = new Node(6);

// const nn = new LinkedList();
// nn.head = new Node(7);
// nn.head.next = new Node(8);
// nn.head.next.next = new Node(9);
// nn.head.next.next.next = new Node(10);
// nn.head.next.next.next.next = new Node(11);

// console.log('linked list', JSON.stringify(ll.mergeLinkedList(nn)));  


module.exports = LinkedList;