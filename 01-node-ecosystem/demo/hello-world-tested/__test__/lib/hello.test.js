'use strict';

// Require the module under test
const hello = require('../../lib/hello.js');

describe('hello module', () => {

  // For simplicity, create a local variable to re-use
  let message = '';

  // Tests are documentation.  Is there any need to comment what these are doing?  NOT.

  it('should should require one parameter', () => {
    message = hello.sayHello();
    expect(message).toEqual(null);
  });

  it('should permit only one parameter', () => {
    message = hello.sayHello('john', 'cathy');
    expect(message).toEqual(null);
  });

  it('should not permit numeric values', () => {
    message = hello.sayHello(1);
    expect(message).toEqual(null);
  });

  it('should not permit arrays', () => {
    message = hello.sayHello([]);
    expect(message).toEqual(null);
  });

  it('should not permit objects', () => {
    message = hello.sayHello({});
    expect(message).toEqual(null);
  });

  it('should permit single string parameter', () => {
    message = hello.sayHello('John');
    expect(message).toEqual('Hello, John');
  });
});