'use strict';

const router = require('../lib/router.js');
const Note = require('../model/note.js');

const notes = [];

// HTTPie command:
// http POST :3000/api/v1/notes title='This is my title' content = 'Content of a new note!'

router.routes.post('/api/v1/notes', (req, res) => {
  const note = new Note(req.body.title, req.body.content);
  notes.push(note);
  console.log('This is the array of notes: ', notes);

  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

// HTTPie command:
// http GET :3000/api/v1/notes?id=222d8e28-a2bb-4f86-ab9f-46246033ea92
// Note: this is just an example id, you'll need to copy/paste the id from a note in order to retrieve it

router.routes.get('/api/v1/notes', (req, res) => {
  let name = req.query.name || 'Allie';
  
  let lookup = notes.findIndex(note => note.id === req.query.id);
  let found = notes[lookup];
  
  if(!found) {
    res.write('That note does not exist');
    res.end();
    return;
  }
  
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(`Hello, ${name}\n`);
  res.write(`Here is the note you are looking for:\n ${JSON.stringify(found)}`);
  res.end();
});

// HTTPie command:
// http PUT :3000/api/v1/notes?id=222d8e28-a2bb-4f86-ab9f-46246033ea92 title='New title' content = 'New content'
// Note: this is just an example id, you'll need to copy/paste the id from a note in order to retrieve it

router.routes.put('/api/v1/notes', (req, res) => {
  let lookup = notes.findIndex(note => note.id === req.query.id);
  let found = notes[lookup];
  
  if(req.body.title) found.title = req.body.title;
  if(req.body.content) found.content = req.body.content;
  
  res.statusCode = 200;
  res.statusMessage = 'The resource was updated';
  res.write(`Your note has been updated:\n ${JSON.stringify(found)}`);
  res.end();
});

// HTTPie command:
// http DELETE :3000/api/v1/notes?id=222d8e28-a2bb-4f86-ab9f-46246033ea92
// Note: this is just an example id, you'll need to copy/paste the id from a note in order to retrieve it

router.routes.delete('/api/v1/notes', (req, res) => {
  let lookup = notes.findIndex(note => note.id === req.query.id);
  
  notes.splice(lookup, 1);
  
  res.statusCode = 200;
  res.statusMessage = 'The resource has been deleted';
  res.write('The note has been deleted');
  res.end();
});
