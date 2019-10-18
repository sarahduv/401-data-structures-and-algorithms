'use strict';

const arrays = require('../array-shift.js');

describe('Testing the array', () => {

  let testArr = [1,2,4,5];
  let testNum = 3;
  let completeArr = [1,2,3,4,5];
  let newArr = [];
  
  it('inserts a value', () => {
    newArr = arrays.insertShiftArray(testNum, testArr);
    console.log(newArr);
    expect(newArr).not.toEqual(testArr);
    expect(newArr).toEqual(completeArr);
  });
});