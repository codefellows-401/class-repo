import { startDB, stopDB } from '../../../src/supergoose';
import Team from '../../../src/models/teams';

beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => await Team.deleteMany({}));

describe('Team model', () => {
  it('should create with good data', async () => {

    const teamData = {name:'Seattle'};

    const team = await Team.create(teamData);

    expect(team.name).toBe(teamData.name);

  });
});