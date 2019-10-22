Linked Lists

- Similar to an array, but does not behave like an array
- Consists of a series of things called nodes
  - Value
  - Next
- When implementing the list itself, it consists of
  - Head (assigned a value {type: node})
  - NODE --> NODE --> NODE
  - value/next --> value/next --> value/next

Class LinkedList {
  -head {node}
}

Class Node {
  value {type: ?}
  next {type: node}
}

DSA #1: Defining the linked list
  - what properties?
    - head > node
DSA #2: Defining the node
  - what properties?
    - value and next
DSA #3: Defining linked list method, traverse
  - find the very last node in the list

O(n) --> Linear time
O(1) --> constant time, any constant value
O(n^2) --> quadratic time

Rules
  - Always consider the biggest factor:
    - o(n^2 + n + 50) --> o(n^2)
    - Big theta 
  - Ignore constants

Linear time
  - Will be a for loop
  for(....){ // o(n)

  }

Quadratic time
  - Will be a for loop
  for(...){ // o(n)
    for(...){ // o(n)
    }
  }
  - In the end you end up with n*n --> n^2

  for(i=0 to arr.length) --> o(n)
  for(i-0 to 50) --> o(1)

  If you combined the two for loops above, the entire big o would be o(n) because we only care about the largest

Interviews
- Most of the time, the best solution for big o is o(n)
- only using looping if you have to

******************************************************************
JS Lecutre notes
******************************************************************

What are linked lists?
- Linear chain of Nodes
- Usually just contains a property caled head
  - Head is a Node

What is a note?
- It's a structure containing one value and a reference to another node, usually called next

```js
// this is our Node class for linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// our LL class is es6 JS
class LinkedList {
  constructor() {
    this.head = null;
  }

  // traversing a linked list
  traverse() {
    let current = this.head;

    while(current.next) {
      console.log(current.value);
      current = current.next
    }
  }
}

const Node1 = new Node(1);

const LL = new LinkedList();

LL.head = new Node(1);
LL.head.next = new Node(2);

```




