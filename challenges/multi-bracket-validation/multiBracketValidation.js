function multiBracketValidation(str) {
  let storage = [];
  let letters = [];
  let keyValuePairs = {
    '(': ')',
    '{': '}',
    '<': '>',
    '[': ']',
  }; 
  for (let i = 0; i < str.length; i++) {
    // We only want to add opening brackets to our storage
    if (str[i] === '[' || str[i] === '{' || str[i] === '<' || str[i] === '(' ) {
      storage.push(str[i]);
    }
    // We don't care about letters, so we can push those to a different storage area
    else if (str[i].match(/^[A-Za-z]+$/)){
      letters.push(str[i]);
    }
    else {
      // pop off the last unmatched value to compare
      let lastOpener = storage.pop();
      // compare the closing bracket to the last unmatched bracket
      if (str[i] !== keyValuePairs[lastOpener]){
        return false;
      }
    }
  } 
  // Once we reach the end, we need the storage to be completely empty.
  // we are never storing the closers, and always popping and openers.
  if (storage.length !== 0) {
    return false;
  }
  return true;
}

module.exports = multiBracketValidation;

//used the following for reference on points of trouble:
// https://www.w3resource.com/javascript/form/all-letters-field.php
// https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911