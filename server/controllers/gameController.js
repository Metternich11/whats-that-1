/* eslint-disable no-console */
const delay = require('delay');
const _ = require('lodash');

const {
  initializeIO,
  sendMessageRoomFromServer,
  sendMessageToClient,
  joinRoom,
  sendMessageRoom
} = require('../socketRouter/outputRouter')();
const {
  startRound,
  setRoundStatus,
  gameExists,
  getCurrentGameKey,
  getCurrentWord,
  getCurrentRoundNumber,
  reset,
  addGame,
  addPlayer,
  addPlayerToGame,
  getPlayersFromGame,
  setDrawingForRound,
  removePlayer,
  setPlayerRoundWins,
  getRoundStatus,
  deletePlayer,
  cleanPlayerForNewGame,
  getCurrentGameState
} = require('../models/gameModel');
const getWords = require('../helpers/requestWords');
const requestQuickDraw = require('../helpers/requestGuess');

const TOTALROUNDS = 2;
const MillisecondsPerRound = 10000;
const MillisecondsBetweenRounds = 3000;
const maxNumPlayers = 6;

const GameController = () => {
  const endRound = async gameKey => {
    // NEED BIG REFACTOR
    if (!(await gameExists(gameKey))) return;
    await setRoundStatus(gameKey);
    sendMessageRoomFromServer(
      handleMessage('endRound', {
        roundNum: await getCurrentRoundNumber(gameKey)
      }),
      gameKey
    );

    const currentRound = await getCurrentRoundNumber(gameKey);

    if (currentRound > TOTALROUNDS - 1) {
      await gameOver(gameKey);
      // Clean all drawings a rounds from players before starting new Game
      const players = await getPlayersFromGame(gameKey);
      _.forEach(players, (value, key) => {
        cleanPlayerForNewGame(key);
      });
      return;
    }
    await delay(1500);

    const gameState = await getCurrentGameState(gameKey);

    sendMessageRoomFromServer(
      handleMessage('roundDrawings', gameState),
      gameKey
    );
    setTimeout(() => startCurrentRound(gameKey), MillisecondsBetweenRounds);
  };

  const gameOver = async gameKey => {
    sendMessageRoomFromServer(handleMessage('gameOver'), gameKey);

    await delay(1500);
    const gameState = await getCurrentGameState(gameKey);
    //const allDrawingsForGame = await getImagesFromGame(gameKey);
    sendMessageRoomFromServer(
      handleMessage('roundDrawings', gameState),
      gameKey
    );
  };

  const timer = gameKey => {
    return setTimeout(() => endRound(gameKey), MillisecondsPerRound);
  };

  const startCurrentRound = async gameKey => {
    if (gameExists(gameKey)) {
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

  const createGame = async (socket, message) => {
    try {
      const gameKey = message.payload.gameKey;
      if (await gameExists(gameKey))
        return sendMessageToClient(
          socket,
          handleMessage('failure', '{error: gameExist}')
        );
      await addGame(gameKey, TOTALROUNDS);
      await addPlayer(message.payload.player, socket.id);
      await addPlayerToGame(socket.id, gameKey, true);

      joinRoom(socket, gameKey);
      sendMessageToClient(socket, handleMessage('gameCreated', { gameKey }));
    } catch (error) {
      console.error(error);
      // TODO: Notify client
      sendMessageToClient(socket);
    }
  };

  const restartGame = async socket => {
    const gameKey = await getCurrentGameKey(socket.id);
    // Check the game exists and the socket id to be its admin
    await reset(gameKey);
    const gameState = await getCurrentGameState(gameKey);
    sendMessageRoomFromServer(handleMessage('gameReset', gameState), gameKey);
  };

  return {
    initialize: io => {
      initializeIO(io);
    },
    createGame,
    // for inputRouter and outputRouter

    joinGame: async (socket, message) => {
      try {
        const gameKey = message.payload.gameKey;
        if ((await gameExists(gameKey)) === false) {
          sendMessageToClient(
            socket,
            handleMessage('failure', { error: 'Game does not exist' })
          );
          // socket.disconnect();
          return;
        }
        const numOfPlayersOnGame = await getPlayersFromGame(gameKey);

        if (numOfPlayersOnGame.length > maxNumPlayers - 1)
          return sendMessageToClient(
            socket,
            handleMessage('failure', { error: 'Max num of player reached' })
          );
        await addPlayer(message.payload.player, socket.id);
        await addPlayerToGame(socket.id, gameKey, false);

        joinRoom(socket, gameKey);
        sendMessageRoomFromServer(
          handleMessage('playerJoin', {
            players: await getPlayersFromGame(gameKey)
          }),
          gameKey
        );
      } catch (err) {
        console.error(err);
      }
    },

    startGame: async socket => {
      const gameKey = await getCurrentGameKey(socket.id);
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

    passDrawing: async (socket, message) => {
      //// OLE
      const gameKey = await getCurrentGameKey(socket.id);
      if ((await getRoundStatus(gameKey)) === false) return;

      const currentWord = await getCurrentWord(gameKey);
      const guess = await requestQuickDraw(message.payload.drawing);

      sendMessageToClient(socket, handleMessage('guess', { word: guess }));
      // if match, broadcast victory to the room. payload with playerId
      if (guess === currentWord) {
        await setPlayerRoundWins(socket.id);
        const gameState = await getCurrentGameState(gameKey);
        sendMessageRoomFromServer(handleMessage('victory', gameState), gameKey);
      }
    },
    leaveRoom: (socket, message) => {
      removePlayer(socket.id);
      sendMessageRoom(socket, message);
    },
    passFinalDrawing: async (socket, message) => {
      const gameKey = await getCurrentGameKey(socket.id);
      const lastDrawing = message.payload.drawing;
      await setDrawingForRound(gameKey, socket.id, lastDrawing);
    },
    playerDisconnected: async socket => {
      const gameKey = await getCurrentGameKey(socket.id);
      deletePlayer(socket.id, gameKey);
    },
    restartGame
  };
};

module.exports = GameController;
