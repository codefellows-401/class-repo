'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save().then((user) => res.send(user.generateToken())).catch(next);
});

authRouter.post('/signin', auth, (req, res) => {
  res.cookie('Token', req.token);
  res.send(req.token);
});

export default authRouter;
