'use strict';
// eslint-disable-next-line no-unused-vars
const insertionSort = require('../insertion-sort.js');

describe(`insertion sort`, () => {
      
  it('Can successfully sort an array', () => {
    const testArr = [2,4,1,5];
    expect(insertionSort(testArr)).toEqual([1,2,4,5]);
  });

  it('Can successfully sort an array with duplicate values', () => {
    const testArr = [2,4,1,5,2,1];
    expect(insertionSort(testArr)).toEqual([1,1,2,2,4,5]);
  });

  it('Can successfully sort an array that is in reverse', () => {
    const testArr = [10,9,8,7,6,5,4,3,2,1];
    expect(insertionSort(testArr)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it('Can successfully return the array even if it is already sorted.', () => {
    const testArr = [1,2,3,4,5,6,7,8,9,10];
    expect(insertionSort(testArr)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});

