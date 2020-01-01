'use strict';

const PseudoQueue = require('../queue-with-stacks.js');
let pseudoQueue = new PseudoQueue();

describe('Testing the pseudoqueue class', () => {

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  it('It should successfully enqueue items', () => {
    pseudoQueue.enqueue('a');
    pseudoQueue.enqueue('b');
    pseudoQueue.enqueue('c');
    expect(pseudoQueue.stackOne).toEqual(['a', 'b', 'c']);    
  });

  it('It should successfully dequeue items', () => {
    pseudoQueue.enqueue('a');
    pseudoQueue.enqueue('b');
    pseudoQueue.enqueue('c');
    pseudoQueue.dequeue();
    console.log(pseudoQueue.stackOne);
    expect(pseudoQueue.stackOne).toEqual(['b', 'c']);    
  });

  it('It should successfully dequeue all items', () => {
    pseudoQueue.enqueue('a');
    pseudoQueue.enqueue('b');
    pseudoQueue.enqueue('c');
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    console.log(pseudoQueue.stackOne);
    expect(pseudoQueue.stackOne).toEqual([]);    
  });

});