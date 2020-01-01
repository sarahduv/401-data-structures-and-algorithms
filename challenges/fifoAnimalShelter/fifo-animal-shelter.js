'use strict';

class AnimalShelter {
  constructor() {
    this.dogStack = [];
    this.catStack = [];
  }

  enqueue(animal) {
    if(animal.type === 'cat') {
      this.catStack.unshift(animal);
    } else if (animal.type === 'dog') {
      this.dogStack.unshift(animal);
    } else {
      return null;
    }
  }

  dequeue(pref) {
    if(pref.type === 'cat') {
      this.catStack.pop();
      return this.catStack;
    } else if (pref.type === 'dog') {
      this.dogStack.pop();
      return this.dogStack;
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;

// Feature Tasks
// Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
// Implement the following methods:
// enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
// dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.