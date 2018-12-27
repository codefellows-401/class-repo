import supergoose, {startDB, stopDB} from '../../src/supergoose.js';
import Notes from '../../src/models/notes';

const {server} = require('../../src/app.js');
const mockRequest = supergoose(server);

const url = '/api/v1/notes';
const newNote = {title:'test',text:'foo'};

// Jest Hooks
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // clear collection
  await Notes.deleteMany({});
});

describe('api server', () => {

  it('should respond with a 500 on an invalid model', async () => {

    const response = 
      await mockRequest.get('/booboo');
    
    expect(response.status).toBe(404);
    
  });

  it('should respond with a 404 on an invalid method', async () => {

    const response = 
      await mockRequest.post('/api/v1/foo/12')
        
    expect(response.status).toBe(404);
  
  });

  it('should respond properly on a get request to a valid model', async () => {

    const response = await mockRequest.get(url);

    expect(response.status).toBe(200);

  });

  it('should be able to post to /api/v1/notes', async () => {

    const response =  
      await mockRequest
        .post('/api/v1/notes')
        .send(newNote);

      expect(response.status).toBe(200);
      expect(response.body.title).toEqual(newNote.title);

  });


  it('following a post, should find a single record', async () => {

    const postResponse  = await mockRequest.post(url).send(newNote);
    
    const noteId = postResponse.body._id;

    const getResponse = await mockRequest.get(`/api/v1/notes/${noteId}`)
     
    const note = getResponse.body[0];

    expect(note.title).toEqual(newNote.title);

  });

  it('following multiple posts, should return the correct count', async () => {

    const obj = {title:'test',text:'foo'};

    await mockRequest.post('/api/v1/notes').send(obj);

    await mockRequest.post('/api/v1/notes').send(obj);

    const { body } = await mockRequest.get('/api/v1/notes');

    expect(body.count).toBe(2);

  });

  it('a get should find zero records still', async () => {

    const { body } = await mockRequest.get('/api/v1/notes');

    expect(body.count).toBe(0);

  });

});
