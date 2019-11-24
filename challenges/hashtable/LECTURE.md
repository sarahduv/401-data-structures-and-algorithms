## Hash

Input: string--> [Algorithm] --> transformed input
The bits get transformed.

KaliisLife --> HASH --> @$72#^#@%ks92$#

In a crypto algorithm, the input gets transformed, and then a key is sent back. (bcrypt)

## Hash Maps

A hash map uses a hash code to find elements in an array.
input --> hash function --> number --> %[lengthofarray] -->

## Arrays
**Pros**
O(1) lookup
RAM
Insertion

**Cons**
Fixed Space
Insertion
You can only use numbers as keys

## Collisions
Ideal method: separate chaining
Uses a linked list or an array

### O(1)
- Insertion
- Lookup
- Deletion

### Load Factor
Number of used slots = 39
Number of total slots = 100
If 39/100 = %75, then you will want to resize the hashmap.
However, if you resize the hashmap, you have to rehash everything.

To Build:
- Array
- Hash Function
- Collision detection

To Use:
- get method --> takes: (key) --> will give you a value
- put method --> takes: (key, value)

In Interviews
- Count values
- Duplicate values
- Keep track of values
- Lookup values
**if the above keywords are included, it is begging for a hashmap**

