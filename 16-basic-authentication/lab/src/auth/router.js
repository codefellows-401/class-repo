import express from 'express';
import User from './model.js';
import auth from './middleware.js';

const router = express.Router();

router.get('/signin', auth, (request, response) => {
  response.send('where can the token be?');
});

router.post('/signup', async (request, response) => {

  try {

    // create the user with posted info

    // make a token unique to the user
    
    // respond with the token

  } catch (error) {

    response.sendStatus(400);
  }
});

export default router;