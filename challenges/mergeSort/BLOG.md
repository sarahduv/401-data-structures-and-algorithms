Array: [8,4,23,42,16,15]

### Pass One
LEFT [ 4 ]
RIGHT [ 23 ]
MERGED [ 4, 23 ]
- On our first pass we are comparing the numbers 4 (left at location i) and 23 (right at location j), and sorting them accordingly into (k).

### Pass Two
LEFT [ 8 ]
RIGHT [ 4, 23 ]
MERGED [ 4, 8, 23 ]
- On our second pass we are comparing the numbers 8 (left at location i) and 4 (right at location j), and sorting them accordingly into (k). Then we move k forward, and advance j because j pointed at a number that was lower which we used for k. 

### Pass Three
LEFT [ 16 ]
RIGHT [ 15 ]
MERGED [ 15, 16 ]
- On our third pass we are comparing the numbers 16 (left at location i) and 15 (right at location j), and sorting them accordingly into (k).

### Pass Four
LEFT [ 42 ]
RIGHT [ 15, 16 ]
MERGED [ 15, 16, 42 ]
- We repeat the same process in the previous passed. This time the order will be RIGHT RIGHT LEFT. After the second right, since j will be bigger than the length of right we will continue move numbers from left to the merged array using the second while loop.

### Last Pass
LEFT [ 4, 8, 23 ]
RIGHT [ 15, 16, 42 ]
MERGED [ 4, 8, 15, 16, 23, 42 ]
- On our last pass, we are repeating the same process as above, which results in a fully sorted array.

### Final Result
[ 4, 8, 15, 16, 23, 42 ]