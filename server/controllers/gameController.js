/* eslint-disable no-console */
const outputRouter = require('../socketRouter/outputRouter');
const gameModel = require('../models/gameModel');
const getWords = require('../helpers/requestWords');
const requestGuess = require('../helpers/requestGuess');

const TOTALROUNDS = 3;
const MillisecondsPerRound = 23000;
const maxNumPlayers = 6;

const GameController = () => {
  const endRound = gameKey => {
    //SHANSHAN
    gameModel.setRoundStatus(gameKey);
    outputRouter.sendMessageRoomFromServer(
      {
        type: 'endRound',
        payload: {
          roundNum: gameModel.getCurrentRoundNumber(gameKey)
        }
      },
      gameKey
    );
    const currentRound = gameModel.getCurrentRoundNumber(gameKey);
    if (currentRound === TOTALROUNDS) {
      gameOver(gameKey);
    } else {
      const allDrawingsForRound = gameModel.getImagesFromRound(
        gameKey,
        currentRound
      );

      outputRouter.sendMessageRoomFromServer(
        {
          type: 'roundDrawings',
          payload: {
            drawings: allDrawingsForRound
          }
        },
        gameKey
      );
    }
  };

  const gameOver = gameKey => {
    // SHANSHAN
    const allDrawingsForGame = gameModel.getImagesFromGame(gameKey);
    outputRouter.sendMessageRoomFromServer(
      {
        type: 'gameDrawings',
        payload: {
          drawings: allDrawingsForGame
        }
      },
      gameKey
    );
    gameModel.deleteGame(gameKey);
  };

  const timer = gameKey => {
    return setTimeout(() => endRound(gameKey), MillisecondsPerRound);
  };

  const startRound = gameKey => {
    if (gameModel.gameExists(gameKey)) {
      const roundWord = getWords(1)[0];
      gameModel.startRound(gameKey, roundWord);
      timer(gameKey);
      outputRouter.sendMessageRoomFromServer(
        {
          type: 'startRound',
          payload: {
            timer: MillisecondsPerRound,
            word: roundWord
          }
        },
        gameKey
      );
    }
  };

  return {
    game: {
      currentRound: 0,
      words: [],
      isCurrentRoundComplete: false,
      maxNumPlayers: 6
    },

    initialize: io => {
      outputRouter.initialize(io);
    },

    getCurrentWord: currentRound => {
      return this.game.words[currentRound];
    },
    getCurrentRound: () => {
      this.game.currentRound = gameModel.getCurrentRound();
    },

    // for inputRouter and outputRouter
    createGame: async (socket, message) => {
      try {
        const pendingAddPlayerAndGame = [];
        const gameKey = message.payload.gameKey;
        pendingAddPlayerAndGame.push(gameModel.addGame(gameKey, TOTALROUNDS));
        pendingAddPlayerAndGame.push(
          gameModel.addPlayer(message.payload.player, socket.id)
        );
        await Promise.all(pendingAddPlayerAndGame);
        await gameModel.addPlayerToGame(socket.id, gameKey, true);
        outputRouter.join(socket, gameKey);
        outputRouter.sendMessageToClient(socket, gameCreatedEvent(gameKey));
      } catch (error) {
        console.error(error);
        // TODO: Notify client
        outputRouter.sendMessageToClient(socket);
      }

      function gameCreatedEvent(gameKey) {
        return {
          type: 'gameCreated',
          payload: {
            gameKey
          }
        };
      }
    },

    joinGame: async (socket, message) => {
      try {
        const gameKey = message.payload.gameKey;
        await gameModel.gameExists(gameKey);
        const numOfPlayersOnGame = gameModel.getPlayersFromGame(gameKey);
        if (numOfPlayersOnGame.length < maxNumPlayers) {
          await gameModel.addPlayer(message.payload.player, socket.id);
          await gameModel.addPlayerToGame(socket.id, gameKey, true);
          outputRouter.sendMessageRoomFromServer(
            {
              type: 'playerJoin',
              payload: {
                players: gameModel.getPlayersFromGame(gameKey)
              }
            },
            gameKey
          );
        }
      } catch (err) {
        console.error(err);
      }
    },

    startGame: socket => {
      const gameKey = gameModel.getCurrentGameKey(socket.id);
      if (gameModel.gameExists(gameKey)) {
        outputRouter.sendMessageRoomFromServer(
          {
            type: 'startGame'
          },
          gameKey
        );

        startRound(gameKey);
      } else {
        outputRouter.sendMessageToClient(socket, {
          type: 'failure',
          payload: {
            startGameFailure: 'startGameFailure'
          }
        });
      }
    },

    passDrawing: (socket, message) => {
      //// OLE
      const gameKey = gameModel.getCurrentGameKey(socket.id);
      const currentWord = gameModel.getCurrentWord(gameKey);
      const guess = requestGuess(message.payload.drawing); // need to add info before sending to google
      // pass frontend payload: guess, guessWord
      outputRouter.sendMessageToClient(socket, {
        type: 'guess',
        payload: {
          word: guess
        }
      });
      // if match, broadcast victory to the room. payload with playerId
      if (guess === currentWord) {
        gameModel.setPlayerRoundWins(socket.id);
        outputRouter.sendMessageRoomFromServer(
          {
            type: 'victory',
            payload: {
              playerId: socket.id
            }
          },
          gameKey
        );
      }
    },
    leaveRoom: (socket, message) => {
      gameModel.removePlayer(socket.id);
      outputRouter.sendMessageRoom(socket, message);
    },
    passFinalDrawing: (socket, message) => {
      const lastDrawing = message.payload.drawingSVG;
      gameModel.saveDrawingForRound(
        lastDrawing,
        socket.id,
        message.payload.gameKey
      );
      // double-check gameModel
      // send roundDrawings. payload: {
      //  drawings: {
      //   {playerId: , drawing: },
      //   {playerId: , drawing: },
      //   {playerId: , drawing: }
      //  }
      // }
    }
  };
};

module.exports = GameController;
