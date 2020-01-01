# Traversing a Tree

### Feature Tasks
- Write a function called FizzBuzzTree which takes a tree as an argument.
- Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- Return the tree with its new values.

### Approach
The approach with regard to solving this problem was to start with the tree.root, and then recursively traverse each left and right value. If the value of the node is divisable by 5 and 3 with a remainder of 0, then the value gets replaced with 'FizzBuzz'. If it is only divisable by 3, then the value gets replaced with 'Fizz', and if it is only divisable by 5, then the value is replaced with 'Buzz'; otherwise, the value remains unchanged.

## Efficiency
Space: o(n)
Time: o(n)
* We are only going over each node once

![whiteboard](https://github.com/sarahduv/401-data-structures-and-algorithms/blob/master/assets/fizz-buzz-tree.jpg?raw=true)
