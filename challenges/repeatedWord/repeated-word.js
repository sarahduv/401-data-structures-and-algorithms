//  Write a function that takes in a lengthy string as a parameter. Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

function findRepeatedWord(str){
  let splitWords = split(str);

  for(let i=0; i < splitWords.length; i++){
    for(let j=0; j < splitWords.length; j++){
      if(splitWords[i] === splitWords[j] && i !== j){
        return splitWords[i];
      }
    }
  }
  return 'no matching words found';
}

function split(str) {
  let words = [];
  let pendingWord = '';
  for (let i=0; i < str.length; ++i) {
    if (str[i] === ' ') { 
      words.push(pendingWord); // save current word
      pendingWord = ''; // reset to a new word
    } else {
      pendingWord += str[i]; // add the next character to the pending word
    }
  }


  // if we reached the end of the sentence and there's a word we haven't "finished" because there is no space at the end of the sentence, finish that word
  if (pendingWord.length > 0) {
    words.push(pendingWord); // save current word
  }

  return words;
}

module.exports = findRepeatedWord;