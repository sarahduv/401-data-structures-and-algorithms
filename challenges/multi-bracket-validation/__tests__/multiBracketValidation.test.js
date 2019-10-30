'use strict';

const bracketValidator = require('../multiBracketValidation.js');

describe('tests our bracket validator', () => {

  // beforeEach(() => {
  //   newLinkedList = new LinkedList();
  // });

  let str1 = '{}[]()[()]'; // should return true
  let str2 = '[[))}{'; // should return false
  let str3 = '[[[]]]({[]})[]'; // should return true
  let str4 = '}{)([[[]'; // should return false
  let str5 = '[[[]]]({[hello]})[]'; // should return true

  it('Can successfully return true if all brackets are balanced and matching', () => {
    expect(bracketValidator(str1)).toEqual(true);
    expect(bracketValidator(str3)).toEqual(true);
  });

  it('Can successfully return false if NOT all brackets are balanced and matching', () => {
    expect(bracketValidator(str2)).toEqual(false);
    expect(bracketValidator(str4)).toEqual(false);
  });

  it('Can successfully return true even if there are letters in it', () => {
    expect(bracketValidator(str5)).toEqual(true);
  });
});

