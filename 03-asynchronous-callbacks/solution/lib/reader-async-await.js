const fs = require('fs');
const util = require('util');

module.exports = async (paths, doneHandler) => {

  let contents = [];

  const readFile = util.promisify(fs.readFile);

  let data;

  for(let i = 0; i < paths.length; i++) {
    try{
      data = await readFile(paths[i]);
      contents.push(data.toString());
    } catch (err) {
      doneHandler(err);
      return;
    }
  }

  doneHandler(null, contents);
}