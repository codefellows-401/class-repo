const fs = require('fs');

module.exports = (path, fileReadComplete) => {

  const fileDataFetched = (err, data) => {
    if (err) {
      fileReadComplete(err);
      return;
    }

    fileReadComplete(null, data.toString());
  };

  fs.readFile(path, fileDataFetched);

  return 'wait for it...';
};

// setTimeout(() => fileReadComplete(null, data.toString(), 5000));
    