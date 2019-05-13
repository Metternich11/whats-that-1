const gameController = require('./GameController');

const mockSocket = {id: 'codeworks1823923789282keroro'};
const mockMessae = {
  payload: {
    player: {
      playerName: 'ping'
    }
  }

}

describe('test game controller', () => {
  it('should return gameKey if a game is created', () => {
    expect(gameController.createGame()).toBe(true);
    mockMessae;
    mockSocket
  })
})


