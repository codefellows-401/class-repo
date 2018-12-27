import express from 'express';
import authRouter from './auth/router.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';


const app = express();

app.use(express.json());

app.use(authRouter);
app.use(notFound);
app.use(errorHandler);


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