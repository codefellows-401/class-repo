'use strict';

require('dotenv').config();

import supergoose, { startDB, stopDB } from '../../supergoose.js';
import { app } from '../../../src/app.js';

const mockRequest = supergoose(app);

beforeAll(startDB);
afterAll(stopDB);

describe('/upload route', () => {
  it('should upload a file', (done) => {
    return mockRequest.post('/upload')
      .attach('img', `${__dirname}/asset/this-is-fine.jpeg`)
      .then(res => {
        expect(res.status).toEqual(200);
        done();
      })
      .catch(console.error);
    // .catch(err => console.error(err));
  });
});
