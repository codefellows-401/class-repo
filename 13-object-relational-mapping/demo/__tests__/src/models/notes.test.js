import {startDB, stopDB} from '../../../src/supergoose.js';
import Notes from '../../../src/models/notes';

// Jest Hooks
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // clear collection for pristine testing conditions
  await Notes.deleteMany({});
});

describe('Notes Model', () => {
  it('should create a note', (done) => {
    const noteInfo = {title:'Get Milk'};
    const note = new Notes(noteInfo);
    expect(note.title).toBe(noteInfo.title);
    done();
  });

  it('should create and save a note', (done) => {

    const noteInfo = {title:'Get Milk'};
    const note = new Notes(noteInfo);
    note.save().then(newNote => {
      expect(newNote.id).toBeDefined();
      done();
    });
  });

  describe('Get All Notes', () => {

    it('should get zero notes when collection empty', (done) => {
      Notes.find({}).then(notes => {
        expect(notes.length).toBe(0);
        done();
      });
    });

    it('should get 3 notes when collection full', async () => {

      try {
        await Notes.create({title:'a'});
        await Notes.create({title:'b'});
        await Notes.create({title:'c'});

        const notes = await Notes.find({});

        expect(notes.length).toBe(3);

      } catch (error) {

        expect(error).toBeFalsy();
      }

    });
      

  });
});