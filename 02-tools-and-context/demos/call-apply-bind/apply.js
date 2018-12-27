'use strict';

let allie = {name: 'Allie'};

function homeTown(city, state) {
  return `${this.name} is from ${city}, ${state}`;
}

console.log( homeTown.call(allie, 'Cleveland', 'Ohio') );
console.log( homeTown.apply(allie, ['Cleveland', 'Ohio']) );
