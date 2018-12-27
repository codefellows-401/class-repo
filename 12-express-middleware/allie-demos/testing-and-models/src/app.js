'use strict';

//
import express from 'express';

//
import router from './api/api.js';

//
let app = express();

// 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 
app.use( router );

//
app.use((err, req, res, next) => {
  console.error(err);
  next(err);
});

// Flag to know if we are up and going
let isRunning = false;

module.exports = {
  server: app, 

  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        // Tick the running flag
        isRunning = true;
        console.log('Server is up on port', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};
