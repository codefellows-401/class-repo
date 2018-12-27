'use strict';

import express from 'express';
const router = express.Router();

import Player from '../models/players';
import Team from '../models/teams';
import sendError from '../middleware/error';

const models = {
  'players' : Player,
  'teams' : Team,
};


// Each of our REST endpoints simply calls the model's appropriate CRUD Method (only give the students GET and POST for now)
// In all cases, we just catch(next), which feeds any errors we get into the next() as a param
// This fires off the error middleware automatically.  Otherwise, we send out a formatted JSON Response

router.get('/api/v1/:model', (req,res,next) => {
  const model = models[req.params.model];
  if(!model) {
    sendError('model not found', req, res, next);
    return;
  }
  model.find({})
    .then( data => sendJSON(res,data) )
    .catch( next );
});

router.get('/api/v1/:model/:id', (req,res,next) => {
  const model = models[req.params.model];
  model.findOne({_id:req.params.id})
    .then( data => sendJSON(res,data) )
    .catch( next );
});

router.post('/api/v1/:model', (req,res,next) => {
  const model = models[req.params.model];
  let record = new model(req.body);
  record.save()
    .then( data => sendJSON(res,data) )
    .catch( next );
});

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

export default router;
