import express from 'express';
import notFound from './middleware/404.js';
import error from './middleware/error.js';
import chickenRouter from './chicken/router.js';
import coopRouter from './coop/router.js';

const app = express;

app.use(chickenRouter);
app.use(coopRouter);

app.use(notFound);
app.use(error);

let server;

module.exports =  {
  app,
  start: (port) => {
    server = app.listen(port, () => console.log('Listening on port ' + port));
  },
  stop: () => {
    server.close( () => {
      console.log('Server has been stopped');
    });
  },
};