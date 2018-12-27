import supergoose, { startDB, stopDB } from './supergoose.js';
import { app } from '../src/app.js';
import Chicken from '../src/chicken/model.js';
import Coop from '../src/coop/model.js';

const mockRequest = supergoose(app);

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  Chicken.deleteMany({});
  Coop.deleteMany({});
});

describe('app', () => {

  describe('chickens', () => {

    it('should get all chickens - none to start', async () => {
      const response = await mockRequest.get('/api/v1/chickens');
      expect(response.body).toEqual([]);
    });
    
    it('should get one chicken after added', async () => {
      
      await Chicken.create({name: 'Fred'});
      await Chicken.create({name: 'Velma'});
      
      const response = await mockRequest.get('/api/v1/chickens');
      expect(response.body.length).toEqual(2);
    });
    
  });

  describe('coops', () => {

    it('should get all coops - none to start', async () => {
      const response = await mockRequest.get('/api/v1/coops');
      expect(response.body).toEqual([]);
    });
    
    it('should get one coop after added', async () => {
      
      await Coop.create({location: 'Red Barn'});
      await Coop.create({location: 'Grotto'});
      
      const response = await mockRequest.get('/api/v1/coops');
      expect(response.body.length).toEqual(2);
    });
    
  });
});

