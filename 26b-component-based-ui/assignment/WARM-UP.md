![CF](http://i.imgur.com/7v5ASc8.png) WARM-UP: Destructuring
============================================================

## Assignment
For this warm-up, let's practice playing around with objects and arrays using destructuring and spread.

### Requirements
* Open a JS Repl named "Destructuring and Spread"
* ... or create a GIST named "destructuring-and-spread.js"
* Begin with the starter code below ...
* Using spread and destructuring assignment, create a new array called `newPeople`, which is a copy of the `people` array, with a person named 'Odie' added to the beginning and one named 'Garfield' added to the end.
* Using spread and destructuring assignment, create a new object called `newStuff`, which is a copy of the `stuff` object, with a new car added to the end of the `cars` array within it
* Create a `state` object with keys of `people` and `stuff` that contain the `people` and `stuff` data.
  * Do this using object destructuring assignment
* Using spread and destructuring assignments, create a new object called `newSate`, repeating the `newPeople` and `newStuff` steps above but within the `people` and `stuff` nodes of the state object
* Prove that the original `people`, `stuff`, and `state` are unchangd.

```
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
const newStuff = {};
let newState = {};

console.log(people)
console.log(newPeople)
console.log(stuff);
console.log(newStuff);
console.log(state);
console.log(newState);
```


### Submission Instructions
Report in canvas with a link to your Repl.it page or Gist along with a report of how long this assignment took you to complete
