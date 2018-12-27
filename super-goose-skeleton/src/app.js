import express from 'express';
import notFound from './middleware/404.js';
import error from './middleware/error.js';

const app = express();

// sign on life route, real routes should be in own router
app.get('/ping', (request, response) => {
  response.send('pong');
});

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