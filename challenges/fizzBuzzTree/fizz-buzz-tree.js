'use strict';

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

  fizzBuzzTree(current){
    if (current == null) {
      return;
    }
    if (current.value %3 === 0 && current.value %5 === 0) {
      current.value = 'FizzBuzz';
    } else if (current.value %3 === 0) {
      current.value = 'Fizz';
    } else if (current.value %5 === 0) {
      current.value = 'Buzz';
    }
    
    this.fizzBuzzTree(current.right);
    this.fizzBuzzTree(current.left);
  }
}

module.exports = {BinaryTree, BinarySearchTree, Node};

// const tree = new BinarySearchTree(null);
// tree.add(10);
// tree.add(5);
// tree.add(2);
// tree.add(7);
// tree.add(15);
// tree.add(12);

// tree.fizzBuzzTree(tree.root)
// console.log(tree.root);


/**
 * 
 * // Language diagnostic method:
 * 
 * function fizzBuzzTree (tree) {
 *  if (tree === null) {
 *    return;
 *  }
 *  traverse(tree.root);
 * } 
 * 
 * function traverse(node){
 *  // BASE CASE
 *  if (node === null) {
 *    return;
 *  }
 * 
 *  if (node.value %3 === 0 && node.value %5 === 0){
 *    node.value = 'FizzBuzz';
 *  } else if (node.value %3 === 0) {
 *    node.value = 'Fizz';
 *  } else if (node.value %5 === 0) {
 *    node.value = 'Buzz';
 *  }
 * 
 *  traverse(node.left);
 *  traverse(node.right);
 */



