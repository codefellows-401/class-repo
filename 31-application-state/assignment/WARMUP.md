![CF](http://i.imgur.com/7v5ASc8.png) WARMUP - Currying
=======================================================

## Assignment

Open the following snippet of code in a REPL and run it. Note that the last part of this will return an error. That's where you come in.

Complete the `greetDeeplyCurried()` function so that it produces the output specified.

```javascript
// Currying -- a function returns a function
// Should take one argument and return functions
// that take one argument and so on ...


// Old School
let greetTheOldWay = (greeting, name) => {
    console.log(greeting, name);
}
greetTheOldWay("Hello", "John");


// With currying, we get a function back, and then
// can call that function with it's arg.
let greetCurried = (greeting) => {
  return (name) => {
    console.log(greeting, name);
  };
};

greetCurried("SeeYa")("Fred");

// Here, we do it with a named instigator
let sayHello = greetCurried("Hello");
sayHello("John");

var greetDeeplyCurried = function(greeting) {
 // TODO: make this work!
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
// greetAwkwardly("John"); //"Hello...Eddie?"
```
