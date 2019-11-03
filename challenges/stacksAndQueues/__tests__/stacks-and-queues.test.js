'use strict';
// eslint-disable-next-line no-unused-vars
const {Node, Stack, Queue} = require('../stacks-and-queues.js');

describe(`Testing stacks and queues`, () => {
  
  it('Can successfully push onto a stack', () => {
    const s = new Stack();
    s.push(4);
    expect(s.toArray()).toEqual([4]);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const s1 = new Stack();
    s1.push(4);
    s1.push(5);
    s1.push(6);
    expect(s1.toArray()).toEqual([6,5,4]);
  });

  it('Can successfully pop off the stack', () => {
    const s2 = new Stack();
    s2.push(4);
    s2.push(5);
    s2.push(6);
    const popped = s2.pop();
    expect(s2.toArray()).toEqual([5,4]);
    expect(popped).toEqual(6);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const s3 = new Stack();
    s3.push(4);
    s3.push(5);
    s3.push(6);
    s3.pop();
    s3.pop();
    s3.pop();
    expect(s3.isEmpty()).toEqual(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    const s4 = new Stack();
    s4.push(4);
    s4.push(5);
    s4.push(6);
    expect(s4.peek()).toEqual(6);
  });

  it('Can successfully instantiate an empty stack', () => {
    const s5 = new Stack();
    expect(s5.isEmpty()).toBe(true);
  });
  
  it('Can successfully enqueue into a queue', () => {
    const q1 = new Queue();
    q1.enqueue(4);
    expect(q1.toArray()[0]).toEqual(4);
    expect(q1.peek()).toEqual(4);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const q2 = new Queue();
    q2.enqueue(4);
    q2.enqueue(5);
    q2.enqueue(6);
    expect(q2.toArray()).toEqual([6,5,4]);
    expect(q2.peek()).toEqual(4);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const q3 = new Queue();
    q3.enqueue(4);
    q3.enqueue(5);
    q3.enqueue(6);
    let answer = q3.dequeue();
    expect(q3.toArray()).toEqual([6,5]);
    expect(answer).toEqual(4);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const q4 = new Queue();
    q4.enqueue(4);
    q4.enqueue(5);
    q4.enqueue(6);
    let answer = q4.peek();
    expect(q4.toArray()).toEqual([6,5,4]);
    expect(answer).toEqual(4);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const q5 = new Queue();
    q5.enqueue(4);
    q5.enqueue(5);
    q5.enqueue(6);
    q5.dequeue();
    q5.dequeue();
    q5.dequeue();
    expect(q5.toArray()).toEqual([]);
    expect(q5.isEmpty()).toEqual(true);
  });

  it('Can successfully instantiate an empty queue', () => {
    const q6 = new Queue();
    expect(q6.isEmpty()).toEqual(true);
  });
});