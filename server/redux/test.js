const { createRedux } = require('./store');
const Actions = require('./actions/');
const mockRedux = require('./mock');

const store = createRedux();

// TODO: Adapt pending round object to pass all tests

describe('Testing Create Game', () => {
  test('Should create a Game', async () => {
    await store.dispatch(Actions.createGame('test-game'));
    expect(store.getState()).toEqual(mockRedux.createGame);
    // await store.dispatch(Actions.createGame('test-game2'));
    // expect(store.getState()).toEqual(mockRedux.createSecondGame);
  });
});

describe('Testing adding Players to existing Game', () => {
  test('Should add Player to existing Game', async () => {
    await store.dispatch(Actions.addPlayer(mockRedux.demoPlayer));
    expect(store.getState()).toEqual(mockRedux.addPlayer);
  });
});

describe('Start Game', () => {
  test('Should change state of game playing to true', async () => {
    await store.dispatch(Actions.startGame('test-game'));
    const state = store.getState();
    expect(state.games['test-game'].playing).toBe(true);
  });
});

describe('Start Round', () => {
  test('Should delete a Game', async () => {
    await store.dispatch(
      Actions.startRound({
        game: 'test-game',
        round: {
          currentRound: 0,
          word: 'banana',
          roundStatus: true
        }
      })
    );
  });
});

describe('Add a draw to Player', () => {
  test('should add a draw to player', async () => {
    await store.dispatch(Actions.addDrawToPlayer(mockRedux.addDrawToPlayer));
    const state = store.getState();
    expect(state.players.fm4cNa0eWqYrX3kCAAAH.draws[0]).toEqual(
      mockRedux.addDrawToPlayer.draw
    );
  });
});

describe('Player Wins a Game', () => {
  test('should add a draw to player', async () => {
    await store.dispatch(Actions.setPlayerRoundWins(mockRedux.playerWinARound));
    const state = await store.getState();
    expect(state.players.fm4cNa0eWqYrX3kCAAAH.roundWins).toEqual(2);
  });
});

describe('Delete Game', () => {
  test('Should delete a Game', async () => {
    await store.dispatch(Actions.deleteGame('test-game'));
    const state = await store.getState();
    expect(state.games).toEqual({});
  });
});
