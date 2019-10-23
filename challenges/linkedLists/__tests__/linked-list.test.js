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
    // console.log(JSON.stringify(newLinkedList));
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
    // console.log(JSON.stringify(newLinkedList));
    expect(newLinkedList.head.next.value).toEqual(3);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    // console.log(JSON.stringify(newLinkedList));
    newLinkedList.append(2);
    newLinkedList.append(4);
    newLinkedList.insertAfter(4, 7);
    expect(newLinkedList.head.next.next.value).toEqual(7);
  });

  it('Where k is greater than the length of the linked list', () => {
    // console.log(JSON.stringify(newLinkedList));
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.append(5);
    expect(newLinkedList.kthFromEnd(0).value).toEqual(5);
  });

  it('Where k and the length of the list are the same', () => {
    // console.log(JSON.stringify(newLinkedList));
    newLinkedList.append(2);
    newLinkedList.append(3);
    expect(newLinkedList.kthFromEnd(0).value).toEqual(3);
  });

  it('Where k is not a positive integer', () => {
    // console.log(JSON.stringify(newLinkedList));
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.append(5);
    expect(newLinkedList.kthFromEnd(-1)).toEqual('exception');
  });

  it('Where the linked list is of a size 1', () => {
    // console.log(JSON.stringify(newLinkedList));
    newLinkedList.append(2);
    expect(newLinkedList.kthFromEnd(0).value).toEqual(2);
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    // console.log(JSON.stringify(newLinkedList));
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.append(5);
    expect(newLinkedList.kthFromEnd(2).value).toEqual(3);
  });

});