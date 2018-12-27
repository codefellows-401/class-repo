const reader = require('./single-reader.js');

const bookFetchComplete = (err, text) => {
  console.log(text);
};

let results = reader('./hi.txt', bookFetchComplete);

console.log(results);


const fs = require('fs');

let strArr = [];

function readFiles(paths, done) {

  const reader1 = (err, data) => {

    console.log('data fetched');

    if(err) {
      done(err);
      return;
    }

    // what do now?
    // push text from file into an array
    strArr.push(data.toString());

    fs.readFile(paths[1], reader2);


  };

  const reader2 = (err, data) => {

    console.log('data fetched');

    if(err) {
      done(err);
      return;
    }

    // what do now?
    // push text from file into an array
    strArr.push(data.toString());

    fs.readFile(paths[2], reader3);

  };

  const reader3 = (err, data) => {

    console.log('data fetched');

    if(err) {
      done(err);
      return;
    }

    // what do now?
    // push text from file into an array
    strArr.push(data.toString());

    done(null, strArr);
    
  };

  fs.readFile(paths[0], reader1);

}