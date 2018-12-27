'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    if(!value) throw new Error('Please enter a value');

    this[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    if ( !this.length ) throw new Error('The list is empty');

    if(arguments.length > 0) throw new Error('No value needed');

    let item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return item;
  }

  map(callback) {
    if ( !this.length ) throw new Error('The list is empty');
    if( !callback ) throw new Error('Please provide a callback');

    let result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push( callback( this[i] ) );
    }
    return result;
  }

  filter(callback) {
    if ( ! this.length ) throw new Error('The list is empty');
    if( !callback ) throw new Error('Please provide a callback');

    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  }

  reduce(callback, initial) {
    if ( ! this.length ) throw new Error('The list is empty');
    if( !callback ) throw new Error('Please provide a callback');
    if( initial === undefined) throw new Error('Please provide an initial');

    for (let i = 0; i <= this.length - 1; i++) {
      initial = callback(initial, this[i], i);
    }
    return initial;
  }

  slice(start = 0, end = this.length) {
    // end = end || this.length;
    let result = new List();
    for( let i = start; i < end; i++) {
      result.push(this[i]);
    }
    return result;
  }
}

module.exports = List;
