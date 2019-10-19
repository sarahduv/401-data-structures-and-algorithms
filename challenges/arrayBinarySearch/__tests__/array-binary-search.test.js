'use strict';

const arraySearch = require('../array-binary-search.js');

describe('Testing the array', () => {

  let testArr = [1,3,7,12,15];
  let testNum = 7;
  
  it('checking the index', () => {
    let indexResult = arraySearch.binarySearch(testArr, testNum);
    expect(indexResult).toEqual(2);
  });
});