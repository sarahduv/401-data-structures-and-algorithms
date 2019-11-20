'use strict';
// eslint-disable-next-line no-unused-vars
const mergeSort = require('../merge-sort.js');


describe(`Merge sorting`, () => {
      
  it('Can sort an unsorted array', () => {
    const testArr = [7,3,5,9,10,2];
    expect(mergeSort(testArr)).toEqual([2,3,5,7,9,10]);
  });

  it('Can sort an empty array', () => {
    const testArr = [];
    expect(mergeSort(testArr)).toEqual([]);
  });

  it('Can sort an unsorted array with duplicate values', () => {
    const testArr = [7,3,5,2,9,10,2];
    expect(mergeSort(testArr)).toEqual([2,2,3,5,7,9,10]);
  });
});

