# Beadth First Tree Traversal

#### Feature Tasks
- Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

#### Testing
- Can successfully instantiate an empty tree
- Can successfully instantiate a tree with a single root node
- Can successfully print the values in a breadth first fashion

#### Efficiency
- Time and space: o(n)
- We are only going over each node once

#### Approach
- I added a queue class to my already existing tree structure (binary tree search, binary tree, and node classes). Within the queue class, we have enqueue and dequeue methods, as well as a size counter. Within a function, we will then instantiate a queue and pass it a tree. While the size of the queue greater than zero, we dequeue the current node and log it (also pushing into an array for testing purposes). After logging, we will use recursions by enqueueing it's respective left and right value if they are not null.

![whitebaord](https://github.com/sarahduv/401-data-structures-and-algorithms/blob/master/assets/breadth-first-tree.jpg?raw=true);
