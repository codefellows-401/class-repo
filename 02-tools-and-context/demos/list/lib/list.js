'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    // add value to the back of the list
    // assign to an index
    this[this.length] = value;
    // modify the length
    this.length++;
    // return the length
    return this.length;
  }

  map(callback) {
    let newList = new List();
    for(let i = 0; i < this.length; i++) {
      newList.push( callback( this[i] ) );
    }

    return newList;
  }
}

module.exports = List;
