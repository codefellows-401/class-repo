'use strict';

//
import express from 'express';

//
const router = express.Router();

//
import Notes from '../models/notes.js';
// import modelMiddleware from '../middleware/models.js';

// router.use(modelMiddleware);

//
let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

//
let serverError = (res,err) => {
  let error = { error:err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};

//
router.get('/api/v1/notes', (req,res) => {
  Notes.fetchAll()
    .then( data => sendJSON(res,data) )
    .catch( err => serverError(res,err) );
});

//
router.get('/api/v1/notes/:id', (req,res) => {
  if ( req.params.id ) {
    Notes.findOne(req.params.id)
      .then(data => sendJSON(res, data))
      .catch(err => serverError(res, err));
  }
  else {
    serverError(res, 'Record Not Found');
  }
});

//
router.post('/api/v1/notes', (req,res) => {
  let record = new Notes(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(console.error);
});

//
export default router;
