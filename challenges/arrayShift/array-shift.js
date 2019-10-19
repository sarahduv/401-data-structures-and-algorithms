
function insertShiftArray(inmiddle, myArr) {
  let offset = 0;
  let myObj = {};
  for (let i = 0; i < myArr.length + 1; ++i) {
    if (i == Math.floor(myArr.length / 2)) {
      myObj[i] = inmiddle; 
      offset = 1;
    } else {
      myObj[i] = myArr[i-offset];
    }
  }
  return Object.values(myObj);
}

function insertShiftArraySplice(num, arr) {
  let newSpliceArr = arr.splice((Math.floor(arr.length/2)), 0, num);
  return newSpliceArr;
}

// adding travis file comment

module.exports = {insertShiftArray,insertShiftArraySplice};