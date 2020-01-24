class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.size = 0;
  }
}

const ll = new LinkedList();
ll.head = new Node(2);
ll.head.next = new Node(3);
ll.head.next.next = new Node(4);
ll.head.next.next.next = new Node(5);
ll.head.next.next.next.next = new Node(6);

const empty = new LinkedList();

console.log(ll);

console.log('******** Find Max ********')

function findMaxValue(current){
  let answer = null;

  while(current){
    if(answer === null) {
      answer = current.value;
    } else if (answer < current.value){
      answer = current.value;
    }
    current = current.next;
  }
  return answer;
}

console.log('answer', findMaxValue(ll.head));


console.log('******** Sum of ELements ********')

function sumOfElements(current){
  let answer = 0;

  if(current.head === null){
    return 'empty list';
  }

  while(current){
    answer+= current.value;
    current = current.next;
  }
  return answer;
}

console.log(sumOfElements(empty));


console.log('******** X Present ********')

function isXPresent(current, target){

  if(current.head === null){
    return 'this list is null';
  }

  while(current){
    if(current.value === target) {
      return true;
    }
    current = current.next;
  }
  return false;
}

console.log(isXPresent(empty, 15))


console.log('******** Reversed ********')
// o(n) time and o(1) space
function reverseLLInPlace(current) {
  let node = current,
      previous,
      tmp;

  while (node) {
    // save next before we overwrite node.next!
    tmp = node.next;
    // reverse pointer
    node.next = previous;
    // step forward in the list
    previous = node;
    node = tmp;
  }

  return previous;
}

console.log(reverseLLInPlace(ll.head));

console.log('************ Reverse with Recursion ***********')
// O(n) time & O(n) space
function reverse(head) {
  if (!head || !head.next) {
    return head;
  }
  let tmp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return tmp;
}

console.log(reverseRecursion(ll.head))

console.log('******** Sorted ********')