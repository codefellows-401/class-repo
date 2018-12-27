/* Stretch goal: Pass these tests */

import {app as server} from '../src/app.js';

import supergoose, { startDB, stopDB } from './supergoose.js';
import User from '../src/auth/model.js';

const mockRequest = supergoose(server);

beforeAll(startDB);
afterAll(stopDB);

beforeEach(async () => {
  await User.deleteMany({});
});

xdescribe('protected routes', () => {

  it('should get root IF allowed', async () => {

    const userObj = {
      username: 'foo',
      password: 'foobar',
      email: 'foo@bar.com',
      role: 'user',
    };

    const token = await mockRequest.post('/signup').send(userObj);

    // const response = await mockRequest.get('/').auth(token, { type: 'bearer'});
    const response = await mockRequest.get('/').auth('foo', 'foobar');

    expect(response.text).toBe('hi from /');
    // expect(response.status).toBe(401);
  });

});
