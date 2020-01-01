class Node {
  constructor(value){
    this.value = value;
    this.next = null;
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

    // In a queue, the arrows go from front -> node -> node -> back
    if (this.back !== null) {
      this.back.next = newNode;  
    }
    this.back = newNode;

    // In a stack, the arrows go from front <- node <- node <- back
    //newNode.next = this.back;   
    //this.back = newNode;

    if (this.front === null){
      this.front = newNode;
    } 
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
}


const q = new Queue();
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(77);

console.log(q);

const empty = new Queue();
console.log(empty);

const oneq = new Queue();
oneq.enqueue(6);

console.log('******** Find Max Value in the Queue ********')

function findMaxValue(current){
  let answer = current.value;

  while(current){
    if (current.value > answer){
      answer = current.value;
    }
    current = current.next;
  }
  return answer;
}

console.log(findMaxValue(q.back));


console.log('******** Sum of Elements in the Queue ********')

function sumOfElements(current){
  let answer = 0;

  if(current.front === null && current.back === null){
    return 'there is no queue';
  }

  if(current.back === null && current.front !== null){
    return current.front.value;
  }

  while(current){
    answer+= current.value;
    current = current.next;
  }
  return answer;
}

console.log(sumOfElements(oneq.back));


console.log('******** Is X Present ********')

function isXPresent(current, target){

  while(current){
    if(current.value === target){
      return true;
    }
    current = current.next;
  }
  return false;
}

console.log(isXPresent(q.back, 33))

console.log('******** Reversed ********')

function reverse(queue){
  if (queue === null) {
    return null;
  }

  // Copy the queue into a stack, this will reverse it
  const stack = new Stack();
  let current = queue.front;
  while (current !== null) {
    stack.push(current.value);
    current = current.next;
  }

  // Copy the stack back into a new queue, which will maintain the reversed
  const reversedQueue = new Queue(); 
  current = stack.top;
  while (current !== null) {
    reversedQueue.enqueue(current.value);
    current = current.next;
  }
  
  return reversedQueue;
}

console.log("BEFORE", JSON.stringify(q.front))
console.log("AFTER REVERSE", JSON.stringify(reverse(q).front));


