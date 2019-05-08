const { createRedux } = require('./store');
const Actions = require('./actions/');
const mockRedux = require('./mock');

const store = createRedux();

describe('Testing Create Game', () => {
  test('Should create a Game', async () => {
    await store.dispatch(Actions.createGame('test-game'));
    expect(store.getState()).toEqual(mockRedux.createGame);
    await store.dispatch(Actions.createGame('test-game2'));
    expect(store.getState()).toEqual(mockRedux.createSecondGame);
  });
});

describe('Testing adding Players to existing Game', () => {
  test('Should add Player to existing Game', async () => {
    await store.dispatch(Actions.addPlayer(mockRedux.demoPlayer));
    expect(store.getState()).toEqual(mockRedux.addPlayer);
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
    await store.dispatch(Actions.playerWinRound(mockRedux.playerWinARound));
    const state = await store.getState();
    expect(state.players.fm4cNa0eWqYrX3kCAAAH.roundWins).toEqual(2);
  });
});
