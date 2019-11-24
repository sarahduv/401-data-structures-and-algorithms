'use strict';
// eslint-disable-next-line no-unused-vars
const HashMap = require('../hashtable.js');

describe(`hash tables`, () => {
      
  it('Can add a key/value to your hashtable, results in the value being in the data structure', () => {
    const hash = new HashMap(25);
    hash.add('one', 'numOne');
    hash.add('two', 'numTwo');
    hash.add('three', 'numThree');
    expect(hash.contains('one')).toBe(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    const hash = new HashMap(25);
    hash.add('one', 'numOne');
    hash.add('two', 'numTwo');
    hash.add('three', 'numThree');
    expect(hash.get('one')).toEqual('numOne');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const hash = new HashMap(25);
    hash.add('one', 'numOne');
    hash.add('two', 'numTwo');
    hash.add('three', 'numThree');
    expect(hash.get('four')).toEqual(null);
  });

  it('Successfully handle a collision within the hashtable', () => {
    const hash = new HashMap(25);
    hash.add('one', 'numOne');
    hash.add('two', 'numTwo');
    hash.add('three', 'numThree');
    expect(hash.get('two')).toEqual('numTwo');
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hash = new HashMap(25);
    hash.add('one', 'numOne');
    hash.add('two', 'numTwo');
    hash.add('three', 'numThree');
    expect(hash.get('one')).toEqual('numOne');
  });

  it('Successfully hash a key to an in-range value', () => {
    const hash = new HashMap(5);
    hash.add('onetwothreefourfivesix', 'numOne');    
    expect(hash.get('onetwothreefourfivesix')).toEqual('numOne');
  });
});


