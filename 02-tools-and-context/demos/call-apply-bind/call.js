'use strict';

let allie = {firstName: 'Allie', lastName: 'Grampa'};
let jb = {firstName: 'JB', lastName: 'Tellez'};
let ashton = {firstName: 'Ashton', lastName: 'Ellis'};

function sayHi(course) {
  return `Hi, ${this.firstName} ${this.lastName} from ${course}`;
}

console.log(sayHi.call(ashton, '401d27'));
