class BinaryTree {
  constructor(root = null) {
    this.root = root === null ? null : new Node(root);
  }
}

class BinarySearchTree extends BinaryTree {

  add(value){
    if(this.root === null) {
      this.root = new Node(value);
      return;
    }
    this._addForNode(value, this.root);
  }

  _addForNode(value, parentNode) {
  
    if(value > parentNode.value){
      if(parentNode.right === null) {
        parentNode.right = new Node(value);
        return;
      } else {
        this._addForNode(value, parentNode.right);
        return;
      }
    }
    if(value <= parentNode.value){
      if(parentNode.left === null) {
        parentNode.left = new Node(value);
        return;
      } else {
        this._addForNode(value, parentNode.left);
      }
    }
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = right;
    this.right = left;
  }
}


const tree = new BinarySearchTree(null);
tree.add(10);
tree.add(5);
tree.add(2);
tree.add(7);
tree.add(15);
tree.add(12);

const treeEmpty = new BinarySearchTree(null);

//total is 1070

console.log(tree);

console.log('******** Sum of Nodes ********')

function sumOfElements(current){
  if (current === null){
    return 0;
  }

  const answer = current.value;

  return answer + this.sumOfElements(current.left) + this.sumOfElements(current.right);
}

console.log(sumOfElements(treeEmpty.root));
console.log(sumOfElements(tree.root));


console.log('******** Find Max Val ********')

function findMaxVal(current){
  if(current === null){
    return 'this tree is empty';
  }
  let maxVal = current.value;

  while(current){
    maxVal = current.value;
    current = current.right;
  }
  return maxVal;
}

console.log(findMaxVal(treeEmpty.root));
console.log(findMaxVal(tree.root));

console.log('******** Is X Present ********')

function isXPresent(current, target){
  if (current === null){
    return false;
  }
  if (current.value === target){
    return true;
  }

  if(target < current.value){
    return this.isXPresent(current.left, target);
  }

  if(target > current.value){
    return this.isXPresent(current.right, target);
  }
  
}

console.log(isXPresent(treeEmpty.root, 10));
console.log(isXPresent(tree.root, 10));

console.log('******** Does path-value exists ********')
// Does a root to leaf path add up to a given target value

var hasPathSum = function(root, sum) {
    let addition = 0;
    return sumExist(root, sum, addition);
};

function sumExist(node, sum, tally){
    if(tally > sum){
        return false;
    }

    if(node === null && tally === sum){
        return true;
    }

    if(node === null){
      return false;
    }

    tally += node.value;

    return sumExist(node.left, sum, tally) ||
            sumExist(node.right, sum, tally);
}

console.log(hasPathSum(tree.root, 37));