'use strict';
// eslint-disable-next-line no-unused-vars
const {BinarySearchTree, BinaryTree, Node} = require('../fizz-buzz-tree.js');


describe(`tree traversal`, () => {
      
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree(10);
    expect(tree.root.value).toBe(10);
  });

  it('Can successfully change the values to fizz and buzz and fizzbuzz', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    tree.fizzBuzzTree(tree.root);
    expect(tree.root.value).toBe('Buzz');
    expect(tree.root.left.value).toBe('Buzz');
    expect(tree.root.right.value).toBe('FizzBuzz');
  });

  it('Can successfully change the values to fizz and buzz and fizzbuzz', () => {
    const tree = new BinarySearchTree(null);
    tree.add(11);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    tree.fizzBuzzTree(tree.root);
    expect(tree.root.value).toBe(11);
    expect(tree.root.left.value).toBe('Buzz');
    expect(tree.root.right.value).toBe('FizzBuzz');
  });
});

