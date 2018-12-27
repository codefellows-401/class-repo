const { app } = require('../../../src/app.js');
import supergoose, { startDB, stopDB } from '../../../src/supergoose';

beforeAll(startDB);
afterAll(stopDB);

const mockRequest = supergoose(app);
const playersUrl = '/api/v1/players';
const teamsUrl = '/api/v1/teams';

describe('API', () => {

  it('gets a 200 response on a good model', () => {
    return mockRequest.get(playersUrl)
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('gets a 200 response on a good model', () => {
    return mockRequest.get(teamsUrl)
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('gets a 500 response on an invalid model', async () => {
   
    const response = await mockRequest.get('/api/v1/burgers');
    expect(response.status).toBe(500);
  
  });

});
