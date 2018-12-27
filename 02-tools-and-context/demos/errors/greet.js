'use strict';

const greet = module.exports = {};

greet.sayHi = name => {
  if(name === '' || typeof name !== 'string')  {
    throw new Error('This needs to be a string');
  }

  return `Hello ${name}`;
};

