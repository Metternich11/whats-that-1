 /* eslint-disable no-console */
const outputRouter = require('../socketRouter/outputRouter')
const gameModel = require('../models/gameModel');
const requestWords = require('../helpers/requestWords');
const requestGuess = require('../helpers/requestGuess');

const RoundsPerGame = 3;
const MillisecondsPerRound = 23000;

const GameController = () => {
  return {
    game: {
      currentRound: 0,
      words: [],
      isCurrentRoundComplete: false
    },
    timer: () => {
      return setTimeout(() => 
        this.endRound()
      , MillisecondsPerRound)
    },
    startRound: () => {
      this.game.isCurrentRoundComplete = false;
      this.timer = this.roundTimer();
    },
    endRound: () => {
      this.game.isCurrentRoundComplete = true;
      this.game.currentRound += 1;
    },
    getWords: () => {
      this.game.words = requestWords(RoundsPerGame);
    },
    getCurrentWord: (currentRound) => {
      return this.game.words[currentRound];
    },
    getCurrentRound: () => {
      this.game.currentRound = gameModel.getCurrentRound();
    },

    // for inputRouter and outputRouter
    createGame: (socket, message) => {
      try {
        gameModel.addGame(message.payload.key, socket.id, RoundsPerGame);
        gameModel.addPlayerToGame(message.payload.key, socket.id, true);
        gameModel.addPlayer(message.payload, socket.id);
        outputRouter.join(socket, message.payload.key);
        outputRouter.sendMessageRoom(socket, message);
      } catch(err) {
        console.error(err); 
      }
    },
    joinRoom: (socket, message) => {
      try {
        gameModel.addPlayer(socket.id);
        outputRouter.sendMessageRoom(socket, message);
      } catch (err) {
        console.error(err);
      }
    },
    startGame: (socket, message) => {
      if (gameModel.gameExists) {
        gameModel.startGame(socket.id.key); // double-check if that's the right way to get the key
      } else {
        outputRouter.gameDoesNotExist(); // need to have this func in outputRouter
      }
    },
    receiveDraw: (socket, message) => {
      const currentWord = gameModel.getCurrentWord();
      const guess = requestGuess(message.payload);
      outputRouter.sendMessagePlayer(socket, {guess});
      if (guess === currentWord) {
        gameModel.setPlayerRoundWins(socket.id);
      }
      // check if the round is active. if not, add the drawing to player's draws
      if(this.game.isCurrentRoundComplete()) {
        this.game.addDrawing();
              clearTimeout(this.timer);
              this.endRound();
            }
    },
    leaveRoom: (socket, message) => {
      gameModel.removePlayer(socket.id);
      outputRouter.sendMessageRoom(socket, message);
    },
  }
};

// update inputRouter how to call it
//const gameController = GameController();
module.exports = GameController;