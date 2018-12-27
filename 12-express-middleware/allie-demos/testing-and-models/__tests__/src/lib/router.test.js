'use strict';

// COMMENTS INDICATE CHANGES AND DEBUGGING SINCE LECTURE :)

// switched over the supertest FTW
import request from 'supertest';

// with supertest, no longer need http://localhost:3000
const url = '/api/v1/notes';

// exported just the app in my app.js file as server: app, which is why I call it server here.
const { server } = require('../../../src/app.js');

// Added a clear method in memory.js so the database can be reassigned to an empty object
import storage from '../../../src/lib/storage/memory.js'

// pass my server to the request method of supertest
let testRequest = request(server);

describe('Testing the routes', () => {
  const sample = {title: 'Test note', content: 'Note created in the test'};

  describe('Testing the POST route', () => {
    it('should create a new note' , (done) => {
      testRequest
        .post(url)
        .send(sample)
        .then(response => {          
          expect(response.body.title).toEqual(sample.title);
          expect(response.body.content).toEqual(sample.content);
          expect(response.status).toBe(200);
          done();
        });
    });

    it('should use the default content value' , (done) => {
      testRequest
        .post(url)
        .send({title: 'Only title provided'})
        .then(response => {          
          expect(response.body.title).toEqual('Only title provided');
          expect(response.body.content).toEqual('Default content');
          expect(response.status).toBe(200);
          done();
        });
    });

    it('should use the default title value' , (done) => {
      testRequest
        .post(url)
        .send({content: 'Only content provided'})
        .then(response => {          
          expect(response.body.content).toEqual('Only content provided');
          expect(response.body.title).toEqual('Default title');
          expect(response.status).toBe(200);
          done();
        });
    });
  });

  describe('Testing the GET route', () => {
    it('should retrieve none of the notes before any notes have been created', (done) => {
      storage.clear();
      testRequest
        .get(url)
        .then(response => {
          expect(response.body).toEqual({});
          expect(response.status).toBe(200);
          done();
        });
    }); 

    it('should retrieve a note', (done) => {
      testRequest
        .post(url)
        .send(sample)
        .then(response => {
          testRequest
          .get(`${url}/${response.body.id}`)
          .then(response => {
            expect(response.body.title).toEqual(sample.title);
            expect(response.body.content).toEqual(sample.content);
            expect(response.status).toBe(200);
            done();
          });
        })
    });
  });
});
