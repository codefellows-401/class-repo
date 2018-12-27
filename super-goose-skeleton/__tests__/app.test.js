import supergoose, { startDB, stopDB } from './supergoose.js';
import { app } from '../src/app.js';

const mockRequest = supergoose(app);

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  // clean up as needed
});

describe('app', () => {
  it('should ping pong', async () => {
    const response = await mockRequest.get('/ping');
    expect(response.text).toBe('pong');
  });
});

