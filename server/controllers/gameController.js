/* eslint-disable no-console */
const {
  initialize, //change to initializeSocketIO
  sendMessageRoomFromServer,
  sendMessageToClient,
  join, //change to joinRoom
  sendMessageRoom
} = require('../socketRouter/outputRouter');
const {
  startRound,
  setRoundStatus,
  getImagesFromGame,
  gameExists,
  getCurrentGameKey,
  getCurrentWord,
  getImagesFromRound,
  getCurrentRoundNumber,
  deleteGame,
  addGame,
  addPlayer,
  getCurrentRound,
  addPlayerToGame,
  getPlayersFromGame,
  saveDrawingForRound,
  removePlayer,
  setPlayerRoundWins
} = require('../models/gameModel');
const getWords = require('../helpers/requestWords');
const requestGuess = require('../helpers/requestGuess');

const TOTALROUNDS = 3;
const MillisecondsPerRound = 5000;
const maxNumPlayers = 6;

const GameController = () => {
  const endRound = async gameKey => {
    //SHANSHAN
    setRoundStatus(gameKey);
    sendMessageRoomFromServer(
      handleMessage('endRound', {
        roundNum: getCurrentRoundNumber(gameKey)
      }),
      gameKey
    );
    const currentRound = getCurrentRoundNumber(gameKey);
    console.log('round# to end: ', currentRound);
    if (currentRound === TOTALROUNDS) {
      gameOver(gameKey);
    } else {
      const allDrawingsForRound = await getImagesFromRound(
        gameKey,
        currentRound
      );

      sendMessageRoomFromServer(
        handleMessage('roundDrawings', {
          drawings: allDrawingsForRound
        }),
        gameKey
      );
    }
  };

  const gameOver = gameKey => {
    // SHANSHAN
    const allDrawingsForGame = getImagesFromGame(gameKey);
    sendMessageRoomFromServer(
      handleMessage('gameDrawings', { drawings: allDrawingsForGame }),
      gameKey
    );
    deleteGame(gameKey);
  };

  const timer = gameKey => {
    return setTimeout(() => endRound(gameKey), MillisecondsPerRound);
  };

  const startCurrentRound = async gameKey => {
    if (gameExists(gameKey)) {
      console.log('round in progress');
      const roundWord = getWords(1)[0];
      await startRound(gameKey, roundWord);
      timer(gameKey);
      sendMessageRoomFromServer(
        handleMessage('startRound', {
          timer: MillisecondsPerRound,
          word: roundWord
        }),
        gameKey
      );
    }
  };

  const handleMessage = (type, payload) => {
    return {
      type,
      payload
      // payload: {
      //   payload
      // }
    };
  };

  return {
    initialize: io => {
      initialize(io);
    },

    getCurrentWord: currentRound => {
      return this.game.words[currentRound];
    },
    getCurrentRound: () => {
      this.game.currentRound = getCurrentRound();
    },

    // for inputRouter and outputRouter
    createGame: async (socket, message) => {
      try {
        const pendingAddPlayerAndGame = [];
        const gameKey = message.payload.gameKey;

        if (await gameExists(gameKey))
          return sendMessageToClient(
            socket,
            handleMessage('failure', '{error: gameExist}')
          );
        pendingAddPlayerAndGame.push(await addGame(gameKey, TOTALROUNDS));
        pendingAddPlayerAndGame.push(
          await addPlayer(message.payload.player, socket.id)
        );
        await Promise.all(pendingAddPlayerAndGame);
        await addPlayerToGame(socket.id, gameKey, true);
        join(socket, gameKey);
        sendMessageToClient(socket, handleMessage('gameCreated', { gameKey }));
      } catch (error) {
        console.error(error);
        // TODO: Notify client
        sendMessageToClient(socket);
      }
    },

    joinGame: async (socket, message) => {
      try {
        const gameKey = message.payload.gameKey;
        if (await !gameExists(gameKey))
          return sendMessageToClient(
            socket,
            handleMessage('failure', { error: 'Game does not exist' })
          );
        const numOfPlayersOnGame = await getPlayersFromGame(gameKey);

        if (numOfPlayersOnGame.length < maxNumPlayers) {
          await addPlayer(message.payload.player, socket.id);
          await addPlayerToGame(socket.id, gameKey, true);
          sendMessageRoomFromServer(
            handleMessage('playerJoin', {
              players: getPlayersFromGame(gameKey)
            }),
            gameKey
          );
        }
      } catch (err) {
        console.error(err);
      }
    },

    startGame: socket => {
      const gameKey = getCurrentGameKey(socket.id);
      console.log(socket.id);
      if (gameExists(gameKey)) {
        sendMessageRoomFromServer(handleMessage('startGame', gameKey));
        startCurrentRound(gameKey);
      } else {
        sendMessageToClient(
          socket,
          handleMessage('failure', { startGameFailure: 'startGameFailure' })
        );
      }
    },

    passDrawing: (socket, message) => {
      //// OLE
      const gameKey = getCurrentGameKey(socket.id);
      const currentWord = getCurrentWord(gameKey);
      const guess = requestGuess(message.payload.drawing); // need to add info before sending to google
      // pass frontend payload: guess, guessWord
      sendMessageToClient(socket, handleMessage('guess', { word: guess }));
      // if match, broadcast victory to the room. payload with playerId
      if (guess === currentWord) {
        setPlayerRoundWins(socket.id);
        sendMessageRoomFromServer(
          handleMessage('victory', { playerId: socket.id }),
          gameKey
        );
      }
    },
    leaveRoom: (socket, message) => {
      removePlayer(socket.id);
      sendMessageRoom(socket, message);
    },
    passFinalDrawing: (socket, message) => {
      const lastDrawing = message.payload.drawingSVG;
      saveDrawingForRound(lastDrawing, socket.id, message.payload.gameKey);
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
