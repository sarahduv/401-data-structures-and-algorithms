'use strict';

const LinkedList = require('../linked-list.js');
let newLinkedList = new LinkedList();

describe('tests our nodes', () => {

  beforeEach(() => {
    newLinkedList = new LinkedList();
  });

  it('Can successfully add a node to the end of the linked list', () => {
    newLinkedList.append(1);
    expect(newLinkedList.size).toEqual(1);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    newLinkedList.append(2);
    newLinkedList.append(4);
    expect(newLinkedList.size).toEqual(2);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    newLinkedList.append(2);
    newLinkedList.append(4);
    newLinkedList.insertBefore(4, 3);
    expect(newLinkedList.head.next.value).toEqual(3);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    newLinkedList.append(2);
    newLinkedList.append(4);
    newLinkedList.insertBefore(2, 0);
    expect(newLinkedList.head.value).toEqual(0);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    newLinkedList.append(2);
    newLinkedList.append(4);
    newLinkedList.insertAfter(2, 3);
    expect(newLinkedList.head.next.value).toEqual(3);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    newLinkedList.append(2);
    newLinkedList.append(4);
    newLinkedList.insertAfter(4, 7);
    expect(newLinkedList.head.next.next.value).toEqual(7);
  });

  it('Where k is greater than the length of the linked list', () => {
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.append(5);
    expect(newLinkedList.kthFromEnd(0).value).toEqual(5);
  });

  it('Where k and the length of the list are the same', () => {
    newLinkedList.append(2);
    newLinkedList.append(3);
    expect(newLinkedList.kthFromEnd(0).value).toEqual(3);
  });

  it('Where k is not a positive integer', () => {
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.append(5);
    expect(newLinkedList.kthFromEnd(-1)).toEqual('exception');
  });

  it('Where the linked list is of a size 1', () => {
    newLinkedList.append(2);
    expect(newLinkedList.kthFromEnd(0).value).toEqual(2);
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.append(5);
    expect(newLinkedList.kthFromEnd(2).value).toEqual(3);
  });

  it('It will return the first value of the second list as the second value in the new list', () => {
    let newLinkedListTwo = new LinkedList();
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedListTwo.append(5);
    newLinkedListTwo.append(6);
    newLinkedListTwo.append(7);
    newLinkedListTwo.append(8);
    let zippedList = newLinkedList.mergeLinkedList(newLinkedListTwo);
    expect(zippedList.next.value).toEqual(5);
  });

  it('It will return the second value of the second list as the third value in the new list', () => {
    let newLinkedListThree = new LinkedList();
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedListThree.append(5);
    newLinkedListThree.append(6);
    newLinkedListThree.append(7);
    newLinkedListThree.append(8);
    let zippedList = newLinkedList.mergeLinkedList(newLinkedListThree);
    expect(zippedList.next.next.value).toEqual(2);
  });

  it('Can successfully instantiate an empty linked list', () => {
    newLinkedList = new LinkedList();
    expect(newLinkedList.head).toBe(null);
  });

  it('Can properly insert into the linked list where the linked list is of a size 1', () => {
    newLinkedList.append(1);
    newLinkedList.append(2);
    expect(newLinkedList.size).toEqual(2);
    expect(newLinkedList.head.next.value).toEqual(2);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    newLinkedList.append(1);
    newLinkedList.append(2);
    expect(newLinkedList.head.next.value).toEqual(2);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    expect(newLinkedList.size).toEqual(4);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    expect(newLinkedList.includes(3)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    expect(newLinkedList.includes(5)).toBe(false);
  });
  
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    expect(newLinkedList.toString()).toEqual(' 1 2 3 4')
  });
});

