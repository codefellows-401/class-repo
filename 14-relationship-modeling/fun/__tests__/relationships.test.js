import { startDB, stopDB } from '../src/supergoose.js';

import Lizard from '../src/models/lizard.js';
import Terrarium from '../src/models/terrarium.js';

beforeAll(startDB);
afterAll(stopDB);

beforeEach((done) => {
  Lizard.deleteMany({}).then(results => done());
  Terrarium.deleteMany({}).then(results => done());
});

describe('Lizard <-> Terrarium Relationship' , () => {

  it('should be related - promises', (done) => {
    
    Terrarium.create({location:'Narnia'}).then(ter => {
      Lizard.create({name:'Larry', terrarium:ter}).then((lizard) => {

        expect(lizard.terrarium._id).toBe(ter._id);

        expect(lizard.populate('terrarium').terrarium.location).toBe('Narnia');

        done();
       
      });
    });
  });

  it('should be related - async/await', async () => {
    
    const ter = await Terrarium.create({location:'Narnia'});
    
    const lizard = await Lizard.create({name:'Larry', terrarium:ter._id});
      
    expect(lizard.terrarium._id).toBe(ter._id);

    const foundLizard = await Lizard.findById(lizard._id)
      .populate('terrarium');

    expect(foundLizard.terrarium.location).toBe('Narnia');
  
  });

});