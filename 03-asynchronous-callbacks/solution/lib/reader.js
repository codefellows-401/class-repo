const fs = require('fs');

module.exports = (paths, doneHandler) => {

  let contents = [];

  const readFile = (path, callback) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        callback(err);
        return;
      }
      contents.push(data.toString());
      callback(null);
    });
  };

  readFile(paths[0], (err) => {
    err ? doneHandler(err) : readFile(paths[1], (err) => {
      err ? doneHandler(err) : readFile(paths[2], (err) => {
        doneHandler(err, contents);
      });
    });
  });


}
