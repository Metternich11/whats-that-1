/* eslint-disable no-console */
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
  getImagesFromGame,
  gameExists,
  getCurrentGameKey,
  getCurrentWord,
  getImagesFromRound,
  getCurrentRoundNumber,
  deleteGame,
  addGame,
  addPlayer,
  addPlayerToGame,
  getPlayersFromGame,
  setDrawingForRound,
  removePlayer,
  setPlayerRoundWins,
  getRoundStatus
} = require('../models/gameModel');
const getWords = require('../helpers/requestWords');
const requestQuickDraw = require('../helpers/requestGuess');

const TOTALROUNDS = 2;
const MillisecondsPerRound = 20000;
const MillisecondsBetweenRounds = 10000;
const maxNumPlayers = 6;

const GameController = () => {
  const endRound = async gameKey => {
    //SHANSHAN
    await setRoundStatus(gameKey);
    sendMessageRoomFromServer(
      handleMessage('endRound', {
        roundNum: await getCurrentRoundNumber(gameKey)
      }),
      gameKey
    );
    const currentRound = await getCurrentRoundNumber(gameKey);
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
      setTimeout(() => startCurrentRound(gameKey), MillisecondsBetweenRounds);
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
      initializeIO(io);
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
        joinRoom(socket, gameKey);
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
<<<<<<< HEAD
        if ((await gameExists(gameKey)) === false) {
          console.log();
=======
        if (await gameExists(gameKey) === false) {
>>>>>>> eacbccb0656dd05fcb6508afea24e9e834a0114e
          sendMessageToClient(
            socket,
            handleMessage('failure', { error: 'Game does not exist' })
          );
          socket.disconnect();
          return;
        }
        const numOfPlayersOnGame = await getPlayersFromGame(gameKey);

        if (numOfPlayersOnGame.length > maxNumPlayers - 1)
          return sendMessageToClient(
            socket,
            handleMessage('failure', { error: 'Max num of player reached' })
          );
        await addPlayer(message.payload.player, socket.id);
        await addPlayerToGame(socket.id, gameKey, true);
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

    passDrawing: async (socket, message) => {
      //// OLE
      const gameKey = await getCurrentGameKey(socket.id);
      // if ((await getRoundStatus(gameKey)) === false) {
      //   console.log('HERE')
      //   console.log('THIIIIIIS', await getRoundStatus(gameKey))

      //   return
      // }
      console.log('REEEEEQ222')

      const currentWord = await getCurrentWord(gameKey);
      const guess = await requestQuickDraw(message.payload.drawing);

      sendMessageToClient(socket, handleMessage('guess', { word: guess }));
      // if match, broadcast victory to the room. payload with playerId
      if (guess === currentWord) {
        await setPlayerRoundWins(socket.id);
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
    passFinalDrawing: async (socket, message) => {
      const gameKey = await getCurrentGameKey(socket.id);
      const lastDrawing = message.payload.image;
      await setDrawingForRound(gameKey, socket.id, lastDrawing);
    }
  };
};

module.exports = GameController;
