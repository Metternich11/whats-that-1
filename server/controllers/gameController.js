/* eslint-disable no-console */
const outputRouter = require('../socketRouter/outputRouter')
const gameModel = require('../models/gameModel');
const requestWords = require('../helpers/requestWords');
const requestGuess = require('../helpers/requestGuess');

const TOTALROUNDS = 3;
const MillisecondsPerRound = 23000;
const maxNumPlayers = 6;

const GameController = () => {

  return {
    game: {
      currentRound: 0,
      words: [],
      isCurrentRoundComplete: false,
      maxNumPlayers: 6
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
      this.game.words = requestWords(TOTALROUNDS);
    },
    getCurrentWord: (currentRound) => {
      return this.game.words[currentRound];
    },
    getCurrentRound: () => {
      this.game.currentRound = gameModel.getCurrentRound();
    },

    // for inputRouter and outputRouter
    createGame: (socket, message) => {
      console.log(message)
      try {
        if (gameModel.addGame(message.payload.gameKey, TOTALROUNDS)) {
          if (gameModel.addPlayer(message.payload.player, socket.id)) {
            if (gameModel.addPlayerToGame(socket.id, message.payload.gameKey, true)) {
              const outputMsg = {
                type: 'gameCreated',
                payload: {
                  gameKey: message.payload.gameKey
                }
              }
              outputRouter.sendMessageToClient(socket, outputMsg);
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    },

    joinGame: (socket, message) => {
      console.log('here')
      try {
        const gameKey = message.payload.gameKey;
        if (gameModel.gameExists(gameKey)) {
          const numOfPlayersOnGame = gameModel.getPlayersFromGame(gameKey);
          if (numOfPlayersOnGame.length < maxNumPlayers) {
            if (gameModel.addPlayer(message.payload.player, socket.id)) {
              if (gameModel.addPlayerToGame(socket.id, gameKey, true)) {
                const outputMsg = {
                  type: 'playerJoin',
                  payload: {
                    players: gameModel.getPlayersFromGame(gameKey)
                  }
                }
                outputRouter.sendMessageRoomFromServer(outputMsg, gameKey);
              }
            }
          } else {
            outputRouter.sendMessageToClient({
              type: 'maxNumOfPlayersReached'
            })
          }
        } else {
          outputRouter.sendMessageToClient({
            type: 'gameDoesNotExist'
          })
        }
      } catch (err) {
        console.error(err);
      }
    },

    startGame: (socket, message) => {
      message
      if (gameModel.gameExists) {
        gameModel.startGame(socket.id.gameKey); // double-check if that's the right way to get the key
        // also start the 1st round
        // pass frontend gameKey, number of rounds
        // start round
        // pass the word of the round and timer
      } else {
        outputRouter.gameDoesNotExist(); // need to have this func in outputRouter
      }
    },
    passDrawing: (socket, message) => {
      const currentWord = gameModel.getCurrentWord();
      const guess = requestGuess(message.payload.drawing); // need to add info before sending to google
      outputRouter.sendMessagePlayer(socket, {guess});
      if (guess === currentWord) {
        gameModel.setPlayerRoundWins(socket.id);
      }
      // pass frontend payload: guess, guessWord
      // if match, broadcast victory to the room. payload with playerId
      // check if the round is active. if not, add the drawing to player's draws
      if (this.game.isCurrentRoundComplete()) {
        this.game.addDrawing();
        clearTimeout(this.timer);
        this.endRound();
      }
    },
    leaveRoom: (socket, message) => {
      gameModel.removePlayer(socket.id);
      outputRouter.sendMessageRoom(socket, message);
    },
    roundOver: () => {
      // when the round is over
      // broadcast to the room the round is over
      // collect the last drawng

    },
    passFinalDrawing: (socket, message) => {
      const lastDrawing = message.payload.drawingSVG;
      gameModel.saveDrawingForRound(lastDrawing, socket.id, message.payload.gameKey); // double-check gameModel
      // send roundDrawings. payload: {
      //  drawings: {
      //   {playerId: , drawing: },
      //   {playerId: , drawing: },
      //   {playerId: , drawing: }
      //  }
      // }
    },
    gameOver: () => {
      // payload: {{player: , drawings: }}

    }
  }
};

// update inputRouter how to call it
//const gameController = GameController();
module.exports = GameController;
