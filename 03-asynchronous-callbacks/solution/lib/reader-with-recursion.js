'use strict';

const fs = require('fs');
let contents = [];

module.exports = exports = (files, callback) => {
  readAll(files,callback);
  contents = [];
};

let handler = (err,data) => {
  if(err) { throw err; }
  contents.push( data.toString().trim() );
};

let readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};

let readAll = (paths, callback) => {
  let path = paths.shift();
  // the line below is a shorthand syntax for an "if" conditional
  path && readOne(path, (err, data) => {
    if (err) { return handler(err); }
    handler(undefined, data);
    if(paths.length) {
      readAll(paths,callback);
    }
    else {
      callback(null,contents);
    }
  });
};
