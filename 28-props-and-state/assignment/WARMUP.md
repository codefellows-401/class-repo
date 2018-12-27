![CF](http://i.imgur.com/7v5ASc8.png) WARMUP - Props and State
====================================================

## Assignment 1

**Convert the following into ES6 Classes**

```javascript
'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

module.exports = {Car, Motorcycle};
```

### Assignment 2
Using `.reduce()`

**Convert this ...**

```javascript
[
  {
    "url": "https://pokeapi.co/api/v2/pokemon/1/",
    "name": "bulbasaur"
  },
  {
    "url": "https://pokeapi.co/api/v2/pokemon/2/",
    "name": "ivysaur"
  },
  {
    "url": "https://pokeapi.co/api/v2/pokemon/3/",
    "name": "venusaur"
  },
  {
    "url": "https://pokeapi.co/api/v2/pokemon/4/",
    "name": "charmander"
  }
]
```

**Into this ...**

```javascript
{
  bulbasaur: 'https://pokeapi.co/api/v2/pokemon/1/',
  ivysaur: 'https://pokeapi.co/api/v2/pokemon/2/',
  venusaur: 'https://pokeapi.co/api/v2/pokemon/3/',
  charmander: 'https://pokeapi.co/api/v2/pokemon/4/'
}
```
