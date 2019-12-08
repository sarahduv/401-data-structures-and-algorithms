'use strict';
// eslint-disable-next-line no-unused-vars
const {BinarySearchTree, BinaryTree, Node, intersectTrees} = require('../tree.js');


describe(`tree traversal`, () => {
      
  it('Can successfully instantiate an empty tree', () => {
    const newTree = new BinarySearchTree();
    expect(newTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const newTree = new BinarySearchTree(10);
    expect(newTree.root.value).toBe(10);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const newTree = new BinarySearchTree(10);
    newTree.add(8);
    newTree.add(20);
    expect(newTree.root.value).toBe(10);
    expect(newTree.root.left.value).toBe(8);
    expect(newTree.root.right.value).toBe(20);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    expect(tree.preOrder()).toEqual([10, 5, 2, 7, 15, 12]);
  });

  it('Can successfully return a collection from a inorder traversal', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    expect(tree.inOrder()).toEqual([ 2, 5, 7, 10, 12, 15 ]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    expect(tree.postOrder()).toEqual([ 2, 7, 5, 12, 15, 10 ]);
  });

  it('Can successfully return an array of like-values in two trees', () => {
    const tree = new BinarySearchTree(null);
    const treeTwo = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    treeTwo.add(10);
    treeTwo.add(5);
    treeTwo.add(2);
    treeTwo.add(7);
    treeTwo.add(15);
    treeTwo.add(12);

    expect(intersectTrees(tree, treeTwo)).toEqual([ 10, 5, 2, 7 ]);
  });

  it('Can successfully return an array of like-values in two trees', () => {
    const tree = new BinarySearchTree(null);
    const treeTwo = new BinarySearchTree(null);
    tree.add(10);
    tree.add(2);
    tree.add(3);
    tree.add(11);
    treeTwo.add(10);
    treeTwo.add(5);
    treeTwo.add(2);
    treeTwo.add(7);
    treeTwo.add(15);
    treeTwo.add(12);

    expect(intersectTrees(tree, treeTwo)).toEqual([ 10, 2 ]);
  });

  it('Can successfully return an array of like-values in two trees', () => {
    const tree = new BinarySearchTree(null);
    const treeTwo = new BinarySearchTree(null);
    tree.add(100);
    tree.add(50);
    tree.add(200);
    tree.add(11);
    treeTwo.add(10);
    treeTwo.add(5);
    treeTwo.add(2);
    treeTwo.add(7);
    treeTwo.add(100);
    treeTwo.add(12);

    expect(intersectTrees(tree, treeTwo)).toEqual([ 100 ]);
  });
});

