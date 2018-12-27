import { startDB, stopDB } from '../../../src/supergoose';
import Player from '../../../src/models/players';
import Team from '../../../src/models/teams';

beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  await Player.deleteMany({});
  await Team.deleteMany({});
});

describe('Player on Team', () => {
  it('should associate team and player', async () => {

    const teamData = {name: 'Seattle'};

    const team = await Team.create(teamData);

    const playerData = {name:'Russel Wilson', position:'Quarterback', team: team._id};

    const { _id } = await Player.create(playerData);

    const player = await Player.findOne({_id});

    expect(player.name).toBe(playerData.name);

    expect(player.team.name).toBe('Seattle');

    const players = await Player.find({team : team._id});

    expect(players.length).toBe(1);

  });

  it('should handle player update', async () => {

    const teamData = {name: 'Seattle'};

    const team = await Team.create(teamData);

    const playerData = {name:'Russel Wilson', position:'Quarterback', team: team._id};

    const { _id } = await Player.create(playerData);

    let player = await Player.findOne({_id});

    player.throws = 'L';

    await player.save();

    player = await Player.findOne({_id});

    expect(player.throws).toBe('L');


  });

});
