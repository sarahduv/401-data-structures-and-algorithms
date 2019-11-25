# Repeated Word Challenge

### Task
- Write a function that accepts a lengthy string parameter.
- Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

### Testing
- Write three test that pass in three different strings to ensure your function is working.

### Approach
- Since we were unable to use any built in methods, I created my own split function.
- The first step is the get the output from passing the string as a parameter into the split function.
- We then take that array of words and implement a double-nested for loop.
- In the second for loop, we use an if comparison to see if there is a matching word.
- To ensure we do not return the **same** word in the sentence as a duplicate, we use the following conditions:
    - if(words[i] === words[j] && i !== j)
- If a matching word is found, we return the word.
- If there is not a matching word, we return 'no matching words found'

### Big O
- If we consider just the findRepeatedWord function, then big O is O(n^2)
- We are using two for loops, which is N*N --> therefore being n^2.

### Image

![image](https://github.com/sarahduv/401-data-structures-and-algorithms/blob/master/assets/repeated-word.jpg?raw=true)
