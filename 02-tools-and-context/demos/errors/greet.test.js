'use strict';

const greet = require('./greet.js');

describe('Testing the greet module' , () => {
  it('should return a greeting when given a name', () => {
    expect( greet.sayHi('Allie') ).toBe( 'Hello Allie' );
  });

  it('should throw an error if the argument is not a string', () => {
    expect( () => greet.sayHi(23) ).toThrow();
  });
  
  it('should throw an error when invoked with an empty string', () => {
    expect( () => greet.sayHi('') ).toThrow();
  });
});
