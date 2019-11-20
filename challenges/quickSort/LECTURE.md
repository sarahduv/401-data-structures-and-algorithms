7, 1, 2, 5, 9, 4, 8

Pick a number to make your pivot:
Pivot = 4

Put everything that is smaller on the left, and everything that is bigger on the right.
--> 2, 1, 4, 7, 5, 9, 8

4 is the base case and already sorted, so its index will not change.

Now we continue the process and pick a new pivot on each side.

Pivot Left = 1 & Pivot Right = 5
1, 2, 4, 5, 7, 9, 8

Every number that becomes a pivot, will not change its index.

New Pivot = 9
1, 2, 4, 5, 8, 7, 9,

We eventually end up with a sorted array.

---

[7, 1, 2, 5, 9, 4, 8]
L <---------------> R

We start from left and right and modify left and right as we go using pivots.
If 5 in the pivot point and it's index is 3, then 2 is p-1, and 9 is p+1

9:33 on FR

---

2, 1, 3, 7, 8, 5
FH = 7
i = 8

let firstHigh
for(i = left to right)

|-- < -- | -- >= -- | i | unexplored |
[------------------------------------]
L ------ FH --------- i ------------ R

---

> i++
> < swap fh++ i++

7, 1, 2, 0, 8, 9, 3, 5
FH P
i

7, 1, 2, 0, 8, 9, 3, 5
FH i P

1, 7, 2, 0, 8, 9, 3, 5
FH i P

1, 2, 7, 0, 8, 9, 3, 5
FH i P

1, 2, 0, 7, 8, 9, 3, 5
FH i P

1, 2, 0, 7, 8, 9, 3, 5
FH P
i

1, 2, 0, 7, 8, 9, 3, 5
FH P
i

1, 2, 0, 7, 8, 3, 9, 5
FH P
i

1, 2, 0, 7, 8, 3, 9, 5
FH P
i
