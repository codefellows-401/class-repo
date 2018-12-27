'use strict';

const util = require('util');

class HashMap {
 
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  
  hash(key) {
    return key.split('').reduce( (p,n) => p + n.charCodeAt(0), 0) % this.size;
  }
  
  set(key,value) {
    let hash = this.hash(key);
    console.log(hash, key, value);
    
    if(! this.map[hash]) { this.map[hash] = []; }
    
    this.map[hash].push({[key]:value});
    // this.map[hash].push(key);
  }
  
  get(key) {
    let hash = this.hash(key);
    return this.map[hash];
  }
  
  find(key) {
    let hash = this.hash(key);
    // Do a .find() on this.hash....
    return this.map[hash];
  }
  
  update(key, newValue) {
    
  }
  
  delete(key) {
    
  }
  
  serialize() {
    
  }
  
  deserialize() {
    
  }
  
}

let hm = new HashMap(6);
hm.set('Allie', 'Instructor');
hm.set('George', 'Instructor');
hm.set('John', 'Instructor');

console.log( hm.find('George' ));

console.log(hm);
let str = JSON.stringify(hm);
console.log(str);

console.log(JSON.parse(str));

// console.log(util.inspect(hm, {showHidden:false,depth:null}));

