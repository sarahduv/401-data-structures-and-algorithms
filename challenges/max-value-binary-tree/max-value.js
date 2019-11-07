'use strict';

let answer = null;

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

class Queue {
  constructor() { this.top = []; }
  dequeue() { return this.top.shift(); }
  enqueue(val) { this.top.push(val); }
  size() { return this.top.length; }
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
  
  findMaxValue(current){
    if (current === null){
      return;
    }
    if (current.value > answer){
      answer = current.value;
    }
    if (current.left !== null) {this.findMaxValue(current.left);}
    if (current.right !== null) {this.findMaxValue(current.right);}
    return answer;
  }
}

// const tree = new BinarySearchTree(null);
// tree.add(10);
// tree.add(5);
// tree.add(2);
// tree.add(7);
// tree.add(15);
// tree.add(12);

// tree.findMaxValue(tree.root);

module.exports = {BinaryTree, BinarySearchTree, Node, Queue};