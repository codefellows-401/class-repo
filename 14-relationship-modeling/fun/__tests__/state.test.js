import { startDB, stopDB } from '../src/supergoose.js';

import State from '../src/models/state.js';

beforeAll(startDB);
afterAll(stopDB);
beforeEach((done) => {
  State.deleteMany({}).then(results => done());
});

describe('State', () => {
  
  it('should create', (done) => {

    State.create({name : 'Washington'}).then(wa => {

      expect(wa.name).toBe('Washington');
      
      done();
      
    });
  });
});