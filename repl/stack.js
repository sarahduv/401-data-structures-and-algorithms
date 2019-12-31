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
}

const st = new Stack();
st.push(4);
st.push(5);
st.push(6);
st.push(99);

// for .top === null checks
const emptyStack = new Stack();
console.log('empty stack:', emptyStack)

console.log('regular stack:', st.top);


console.log('******** Find Max Value ********')

function findMaxValue(originalStack){
  if (originalStack === null) {
    return false;
  }
  let current = originalStack.top;

  let answer = null;

  while(current){
    if(answer === null){
      answer = current.value;
    } else if (answer < current.value){
      answer = current.value;
    }
    current = current.next;
  }
  return answer;
}

console.log('answer', findMaxValue(st));


console.log('******** Sum of Elements ********')

function sumOfElements(originalStack){
  if (originalStack === null) {
    return false;
  }
  let current = originalStack.top;

  let answer = 0;
  while(current){
    answer += current.value;
    current = current.next
  }
  return answer;
}

console.log(sumOfElements(emptyStack));
console.log(sumOfElements(st));


console.log('******** X Present ********')

function isXPresent(originalStack, target){
  if (originalStack === null) {
    return false;
  }
  let current = originalStack.top;
  
  while(current){
    if(current.value === target){
      return true;
    }
    current = current.next;
  }
  return false;
}

console.log(isXPresent(emptyStack, 90))
console.log(isXPresent(st, 99))

console.log('******** Reversed ********')
// need help with this problem***************************************************
function reverseStack(originalStack) {
  if (originalStack === null) {
    return null;
  }
  let current = originalStack.top;

  let newStack = new Stack();
  while(current){
    newStack.push(current.value);
    current = current.next;
  }
  return newStack;
}

console.log(JSON.stringify(reverseStack(st)));


console.log('******** Sorted ********')