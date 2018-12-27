'use strict';

const express = require('express');

let app = express();

// let cors = require('cors');

let notFound = require('./404.js');

// "next" idenfies this to Express as a middleware function
const logger = (req, res, next) => {
  console.log('In the logger function');
  next();
};

// "next" idenfies this to Express as a middleware function
const secondLogger = (req, res, next) => {
  console.log('In the second logger function');
  next();
};

// CORS is middleware we can install from npm to allow different resources to interact with each other
// app.use(cors());

app.use('*', logger, secondLogger);

// These lines do the same thing as line 26
// app.use(logger);
// app.use(secondLogger);

// All of these routes will have the logger and secondLogger as middleware because of line 26
app.get('/', (req, res) => {
  console.log('In the / route');
  throw new Error('error!');
  // res.send('Got it');
});

app.get('/a', (req, res) => {
  console.log('In the /a route');
  res.send('Got it');
});

app.get('/b', (req, res) => {
  console.log('In the /b route');
  res.send('Got it');
});

app.get('/c', (req, res) => {
  console.log('In the /c route');
  res.send('Got it');
});

// This is the 404 before we moved it to the 404.js file
// app.use((req, res) => {
//   res.status(404);
//   res.send('Route not found');
// });

// This is the 404 now that we have moved it to a separate file
app.use(notFound);

// Express will identify this as an error handling middleware function because of the "err" parameter
// This can also be moved over to a separate file
app.use((err, req, res, next) => {
  console.log('error occurred');
  res.status(500);
  res.send('oh no!');
});

app.listen(3000, () => console.log('Listening on 3000'));
