import { startDB, stopDB } from '../../../src/supergoose';
import Player from '../../../src/models/players';

beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => await Player.deleteMany({}));

describe('Player model', () => {
  it('should create with good data', async () => {

    const playerData = {name:'Russel Wilson', position:'Quarterback'};

    const player = await Player.create(playerData);

    expect(player.name).toBe(playerData.name);

  });
});