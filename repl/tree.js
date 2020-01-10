class BinaryTree {
  constructor(root = null) {
    this.root = root === null ? null : new Node(root);
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = right;
    this.right = left;
  }
}


const root = new Node(6);
root.left = new Node(9);
root.left.left = new Node(3);
root.left.right = new Node(10);
root.left.right.right = new Node(4);
root.left.right.left = new Node(12);
root.left.right.left.left = new Node(7);
root.left.right.left.right = new Node(1);
root.right = new Node(2);
root.right.left = new Node(17);
root.right.right = new Node(999);

//total is 1070

console.log(root);

console.log('******** Sum of Nodes ********')

function sumOfElements(current){
  if (current === null){
    return 0;
  }

  const answer = current.value;

  return answer + this.sumOfElements(current.left) + this.sumOfElements(current.right);
}

console.log(sumOfElements(root));


console.log('******** Find Max Val ********')

function findMaxVal(current, maxVal){
  if (current === null){
    return maxVal;
  }

  let largerVal = maxVal < current.value ? current.value : maxVal;

  let left = this.findMaxVal(current.left, largerVal);
  let right = this.findMaxVal(current.right, largerVal);

  return left > right ? left : right;
}

console.log(findMaxVal(root, 0));


console.log('******** Is X Present ********')

function isXPresent(current, target){
  if (current === null){
    return false;
  }
  if (current.value === target){
    return true;
  }

  return this.isXPresent(current.left, target) || this.isXPresent(current.right, target);
}

console.log(isXPresent(root, 999))

// console.log('******** Reversed ********')

// function reverse(){
// }

// console.log(reverse());


// console.log('******** Sorted ********')