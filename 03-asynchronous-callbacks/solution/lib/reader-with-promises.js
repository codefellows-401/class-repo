const fs = require('fs');
const util = require('util');

module.exports = (paths, doneHandler) => {

  let contents = [];

  const readFile = util.promisify(fs.readFile);

  readFile(paths[0])
    .then(data => contents.push(data.toString()))
    .then(() => readFile(paths[1]))
    .then(data => contents.push(data.toString()))
    .then(() => readFile(paths[2]))
    .then(data => contents.push(data.toString()))
    .then(() => doneHandler(null, contents))
    .catch(doneHandler);

};
