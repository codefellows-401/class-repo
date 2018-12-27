'use strict';

import express from 'express';

import notes from '../models/notes.js';

const router = express.Router();

let sendJSON = (data,response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write( JSON.stringify(data) );
  response.end();
};


router.get('/api/v1/notes', (request,response,next) => {
  const criteria = {key:'???'}; // construct the necesarry find criteria 
  notes.find(criterial)
    .then( data => {
      // what do you want to respond with? 
      // Up to you, just have tests to verify
      // E.g. an array of notes, some container object with the notes and meta info
      const output = {key:'???'}; 
      sendJSON(output, response);
    })
    .catch( next );
});

router.get('/api/v1/notes/:id', (request,response,next) => {
  const criteria = {key:'???'}; // construct the necesarry find criteria 
  notes.find()
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.post('/api/v1/notes', (request,response,next) => {
  const body = '???';
  notes.create(body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.put('/api/v1/notes/:id', (request,response,next) => {
  request.body._id = '???';
  notes.findByIdAndUpdate(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.patch('/api/v1/notes/:id', (request,response,next) => {
  notes.findByIdAndUpdate('???', '???')
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.delete('/api/v1/notes/:id', (request,response,next) => {
  notes.findByIdAndRemove('???')
    .then( result => sendJSON(result, response) )
    .catch( next );
});


export default router;
