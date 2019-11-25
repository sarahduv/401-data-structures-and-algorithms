'use strict';
// eslint-disable-next-line no-unused-vars
const findRepeatedWord = require('../repeated-word.js');

describe(`Repeating words`, () => {
      
  it('test one', () => {
    let str = 'i have one and you have one';
    expect(findRepeatedWord(str)).toEqual('have');
  });

  it('test two', () => {
    let str = 'i have but you';
    expect(findRepeatedWord(str)).toEqual('no matching words found');
  });

  it('test three', () => {
    let str = 'i have a hundred and you are hundred';
    expect(findRepeatedWord(str)).toEqual('hundred');
  });
});


