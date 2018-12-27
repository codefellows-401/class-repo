function saySomething() {
  let words = 'Hello';

  function _changer(newThing) {
    let words = newThing;
  }
  changeSomeStuff(_changer);

  doSomething(words);
}

function doSomething(whatever) {
  logSomeStuff(whatever);
}

function logSomeStuff(someStuff) {
  console.log(someStuff);
}

function changeSomeStuff(handler) {
  words = 'Foo';
  handler('Good bye!');
}

saySomething();
