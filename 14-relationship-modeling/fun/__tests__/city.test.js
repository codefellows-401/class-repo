import { startDB, stopDB } from '../src/supergoose.js';

import City from '../src/models/city.js';

beforeAll(startDB);
afterAll(stopDB);
beforeEach((done) => {
  City.deleteMany({}).then(results => done());
});

describe('City', () => {
  
  it('should create', (done) => {

    City.create({name : 'Seattle'}).then(city => {

      expect(city.name).toBe('Seattle');
      
      done();
      
    });
  });


  it('should create async/await', async () => {

    const city = await City.create({name: 'Seattle'});

    expect(city.name).toBe('Seattle');
      
  });

});