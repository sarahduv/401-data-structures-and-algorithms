'use strict';

const LinkedList = require('../linked-list.js');
const newLinkedList = new LinkedList();

describe('tests our nodes', () => {

  it('Can successfully add a node to the end of the linked list', () => {
    newLinkedList.append(1);
    expect(newLinkedList.size).toEqual(1);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    newLinkedList.append(2);
    newLinkedList.append(4);
    expect(newLinkedList.size).toEqual(3);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    newLinkedList.insertBefore(4, 3);
    // console.log(JSON.stringify(newLinkedList));
    expect(newLinkedList.head.next.next.value).toEqual(3);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    newLinkedList.insertBefore(2, 0);
    expect(newLinkedList.head.next.value).toEqual(0);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    newLinkedList.insertAfter(0, 6);
    // console.log(JSON.stringify(newLinkedList));
    expect(newLinkedList.head.next.next.value).toEqual(6);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    console.log(JSON.stringify(newLinkedList));
    newLinkedList.insertAfter(4, 7);
    expect(newLinkedList.head.next.next.next.next.next.next.value).toEqual(7);
  });
});