'use strict';

const greetModule = require('./greet.js');

// console.log(greetModule.sayHi('Allie'));
// console.log(greetModule.sayHi(2));


try {
  greetModule.sayHi('Allie');
  greetModule.sayHi(6);
  greetModule.sayHi('Allie');
  greetModule.sayHi('Allie');
  greetModule.sayHi('Allie');
  greetModule.sayHi('Allie');
  greetModule.sayHi('Allie');
} catch(error) {
  console.error(error);
}
