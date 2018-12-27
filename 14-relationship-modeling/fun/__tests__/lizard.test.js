import { startDB, stopDB } from '../src/supergoose.js';

import Lizard from '../src/models/lizard.js';


beforeAll(startDB);
afterAll(stopDB);

beforeEach((done) => {
  Lizard.deleteMany({}).then(results => done());
});

describe('Lizard Model', () => {
  
  it('should create', () => {
    let liz = new Lizard({
      name: 'Liz'
    });
    expect(liz.name).toBe('Liz');
  });

  it('should save', (done) => {

    let liz = new Lizard({
      name: 'Liz'
    });
  
    liz.save().then(result => {
      expect(result._id).toEqual(liz._id);
      done();
    });

  });

  it('should create via create', async () => {

    const lex = await Lizard.create({name:'Lex'})

    expect(lex.name).toBe('Lex');

  });

  it('should find', async () => {

    const larry = await Lizard.create({name:'Larry'})

    const allLizards = await Lizard.find({});

    expect(allLizards.length).toBe(1);

  });

  it('should update', async () => {

    const firstLouise = await Lizard.create({name:'Louiseeee'});

    const newLouise = await Lizard.findByIdAndUpdate(firstLouise._id, {name : 'Louise'});

    expect(firstLouise.name).toBe('Louiseeee');

    expect(firstLouise._id).toEqual(newLouise._id);

    // expect(newLouise.name).toBe('Louise');

    const lastLouise = await Lizard.findById(newLouise._id);

    expect(lastLouise.name).toBe('Louise');


  });

});