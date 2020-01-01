let testArr = [3, 4, 8, 10, 19, 13, 120, 999, 1];

console.log('******** Find Max ********')

function findMaxValue(arr){
  let answer = null;
  for(let i=0; i<arr.length; i++){
    if(answer === null){
      answer = arr[i];
    } else if(arr[i] > answer) {
      answer = arr[i]
    }
  }
  return answer;
}

console.log(findMaxValue(testArr));


console.log('******** Sum of ELements ********')

function sumOfElements(arr){
  let answer = null;
  for(let i=0; i<arr.length; i++){
    answer+=arr[i]
  }
  return answer;
}

console.log(sumOfElements(testArr));


console.log('******** X Present ********')

function isXPresent(arr, target){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === target){
      return true;
    }
  }
  return false;
}

console.log(isXPresent(testArr, 13))


console.log('******** Arr Reversed ********')

function reverseArrayInPlace(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
      let el = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = el;
  }
  return arr;
}

console.log(reverseArrayInPlace(testArr));

console.log('******** Arr Sorted ********')