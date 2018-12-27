let success = console.log;
let fail = console.error;

// a "getName" function that RETURNS a promise, which resolves after 250ms
let getName = () => {
  return new Promise((resolve, reject) => {
      console.log('getName');
      setTimeout(() => {
        console.log('time up')
        resolve('Johnny');
      }, 250);
    }
  });

let nameGetter = getName();

console.log(nameGetter);

nameGetter.then(name => console.log('name', name));

// let getBurger = () => new Promise((resolve, reject) => {

//   const fs = require('fs');
//   fs.readFile('./burger.meat', (err, buffer) => {
//     let prepared = prepareBurger(buffer);
//     resolve(prepared);
//   });

// });

// getBurger().then(burger => console.log('yum'));

// a "getName" function that just instantly resolves
// getName = () => Promise.resolve("John");

// a "getName" function that just instantly rejects
// getName = () => Promise.reject('Nobody here by that name');

// Uncomment any of those to see the results.
// Notice how the the then() blocks chain. Each "then" receives a value which is
// always going to be either what was resolved by the promise or what was
// returned by the previous "then()" (which could also be a promise, BTW_
// getName()
//   .then( name => name.toUpperCase() )
//   .then( success )
//   .catch( fail );


// Promise.reject(2)
//   .then(success)
//   .catch( (number) => number*2)
//   .then(success);
