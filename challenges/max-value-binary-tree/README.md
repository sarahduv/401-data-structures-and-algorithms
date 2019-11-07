### Find the Maximum Value in a Binary Tree

Travis: https://travis-ci.com/sarahduv/401-data-structures-and-algorithms/builds/135542235

#### Feature Tasks
- Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

#### Testing
- Can successfully instantiate an empty tree
- Can successfully instantiate a tree with a single root node
- Can successfully find the highest value in the tree (this is tried on both methods with two different trees)

#### Approach
- Method One: If the current node is null, we will will return. Otherwise, we will recursively traverse the tree and use Math.max to return the highest value node.
- Method Two: If the current node is null, we will will return. Otherwise, we recursively traverse the tree and compare the values of the left, right, and current value. We then return the highest value of the three.

#### Efficiency
- The amount of nodes in the tree is represented by N. To know which is the largest item out of the N items we need to go over every item at least once, so at least N. But we don't really need to go over any item more than once, because once we go over it we check if it's the highest and we don't need that node any more. So in other words we're going over every one of the N nodes exactly once. In that case it is exactly O(n).

![image](https://github.com/sarahduv/401-data-structures-and-algorithms/blob/master/assets/find-max-value-tree.jpg?raw=true)
