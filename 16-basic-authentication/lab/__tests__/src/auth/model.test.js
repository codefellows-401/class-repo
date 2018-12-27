import { startDB, stopDB } from '../../supergoose.js';
import User from '../../../src/auth/model.js';


process.env.APP_SECRET = 'testingsecret';

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  // clean up as needed
  await User.deleteMany({});
});

function createUser(username = 'foo', email = 'foo@bar.com', password='foobar') {
  return User.create({username, email, password});
}

describe('User Model', () => {
  it('should create', async () => {
    
    const user = await createUser();

    expect(user.username).toBe('foo');

    expect(user.email).toBe('foo@bar.com');

    expect(user.password).not.toBe('foobar');

  });

  it('should find created user', async () => {
    
    const user = await createUser();

    const foundUser = await User.findById(user._id);

    expect(foundUser.username).toBe(user.username);

  });

  it('should fail with missing username', async () => {

    try {

      await createUser(null);

    } catch (err) {

      expect(err.message).toEqual(expect.stringContaining('User validation failed: username'));

    }
  });

  it('should fail with missing email', async () => {

    try {

      await createUser(undefined, null);

    } catch (err) {

      expect(err.message).toEqual(expect.stringContaining('User validation failed: email'));
      
    }
  });

  it('should fail with missing password', async () => {

    try {

      await createUser(undefined, undefined, null);

    } catch (err) {

      expect(err.message).toEqual(expect.stringContaining('User validation failed: password'));
      
    }
  });

  it('should fail with duplicate username', async () => {

    try {

      await createUser('same');

      await createUser('same', 'different');

    } catch (err) {

      expect(err.message).toEqual(expect.stringContaining('duplicate key error'));
      
    }
  });

  it('should generate token', async () => {

    const user = await createUser();

    const token = user.generateToken();

    expect(token).toBeDefined();

    // we'll talk about this more soon
    expect(token.split('.').length).toBe(3);

  });

  it('should match good password', async () => {

    const password = 'testpassword';

    const user = await createUser(undefined, undefined, password);

    const passwordsMatch = await user.comparePassword(password);

    expect(passwordsMatch).toBeTruthy();
  });

  it('should not match bad password', async () => {

    const user = await createUser();

    const passwordsMatch = await user.comparePassword('bad');

    expect(passwordsMatch).toBeFalsy();
  });

  it('should authenticate with good creds', async () => {

    await createUser();

    const user = await User.authenticate({username:'foo',password:'foobar'});

    expect(user.username).toBe('foo');
  });

  it('should not authenticate with bad creds', async () => {

    await createUser();

    const user = await User.authenticate({username:'foo',password:'bad'});

    expect(user).toBeNull();
  });
});