'use strict';

const http = require('http');

const router = require('./lib/router.js');

require('./routes/note-router.js');

let isRunning = false;

const app = http.createServer( router.route );

module.exports = {
  start: port => {
    if(!isRunning) {
      app.listen(port, (err) => {
        if(err) throw err;
        isRunning = true;
        console.log(`Server is running on port ${port}`);
      });
    } else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};
