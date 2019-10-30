## Multi Bracket Validation

#### Create a function:

* Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

* Round Brackets : ()
* Square Brackets : []
* Curly Brackets : {}

#### Examples:
- let str1 = '{}[]()[()]'; // should return true
- let str2 = '[[))}{'; // should return false
- let str3 = '[[[]]]({[]})[]'; // should return true
- let str4 = '}{)([[[]'; // should return false
- let str5 = '[[[]]]({[hello]})[]'; // should return true

#### Testing:
* Can successfully return true if all brackets are balanced and matching
* Can successfully return false if NOT all brackets are balanced and matching
* Can successfully return true even if there are letters in it

#### Whiteboard:
![whiteboard](https://github.com/sarahduv/401-data-structures-and-algorithms/blob/master/assets/bracketMatchingValidation.jpg?raw=true)
