'use strict';
// eslint-disable-next-line no-unused-vars
const {BinarySearchTree, BinaryTree, Node, Queue} = require('../max-value.js');


describe(`tree traversal`, () => {
      
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree(10);
    expect(tree.root.value).toBe(10);
  });

  it('Can successfully find the highest value in the tree', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    expect(tree.findMaxValue(tree.root)).toBe(15);
  });

  it('Can successfully find the highest value in the tree', () => {
    const tree = new BinarySearchTree(null);
    tree.add(11);
    tree.add(6);
    tree.add(3);
    tree.add(8);
    tree.add(16);
    tree.add(13);
    expect(tree.findMaxValue(tree.root)).toBe(16);
  });
});

