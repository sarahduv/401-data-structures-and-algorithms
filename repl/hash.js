// Given a string, return the highest three occuring letters;

function hashTable(str){
  let hash = {};

  let stringArr = str.split('');
  console.log(stringArr);

  for(let i=0; i<stringArr.length; i++){
    
    if(hash[stringArr[i]] === undefined){
      hash[stringArr[i]] = 1;
    } else {
      hash[stringArr[i]] += 1;
    }
  }
  return hash;
}

function findMostCom(string){
  let obj = hashTable(string);

  let one = null;
  let two = null;
  let three = null;

  console.log(obj);

  let objArr = Object.entries(obj);
  console.log(objArr);

  for(let i=0; i< objArr.length; i++){
    if(one === null){
      one = objArr[i];
    }
    if(two === null){
      if(one > objArr[i][1]){
        two = objArr[i];
      } else {
        two = one;
        one = objArr[i];
      }
    }
    if(three === null){
      if(one > objArr[i][1] && two > objArr[i][1]){
        three = objArr[i];
      } else if (one > objArr[i][0] && two < objArr[i][0]){
        three = two;
        two = objArr[i];
      } else {
        three = two;
        two = one;
        one = objArr[i];
      }
    }
  }
  console.log('answer');
  console.log('1', one);
  console.log('2', two);
  console.log('3', three);
}

findMostCom('banana');

function getBiggestValue(table) {
  let result = Object.keys(table).map(key => {
    return {
      'name': key,
      'value': table[key]
    }
  })
  return result.sort((a, b) => b.value - a.value).map(i => {
    return {
      [i.name]: i.value
    }
  })
}

getBiggestValue(hashTable('bananaphone'))


var firstUniqChar = function(s) {
    var hash = {};
    let splitString = s.split('');
    
    for(let i=0; i<splitString.length; i++){
        if(hash[splitString[i]] === undefined){
            hash[splitString[i]] = 1;
        } else {
            hash[splitString[i]] +=1;
        }
    }
    
    console.log(hash);
    
    let hashArr = Object.entries(hash);
    
    console.log(hashArr);
    
    for(let i=0; i<hashArr.length; i++){
        if(hashArr[i][1] === 1){
            return [i];
        }
    }
    return -1;
};

console.log(firstUniqChar('leetcode'));


// let hash = {};

// hash.b = 1;

// console.log(hash);

// hash.c === undefined ? hash.c = 1 : hash.c+=1;

// console.log(hash);
// console.log(hash.c);
// console.log(hash.d);

