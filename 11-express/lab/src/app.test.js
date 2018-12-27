import request from 'supertest';
const { app } = require('./app.js');

describe('App Tests', () => {
  
  it('should create an album', (done) => {

    request(app)
      .post('/api/v1/albums')
      .send({foo:'boar'})
      .then(response => {
        expect(response.body).toEqual({nada:'nada'});
        done();
      });

  });
});