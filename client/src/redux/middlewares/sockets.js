import io from 'socket.io-client';

export const socket = store => {
  let socket;

  return next => action => {
    if (!action.socket) return next(action);
    const { command, payload, type } = action.socket;
    if (command) {
      switch (command) {
        case 'CONNECT':
          //socket = io(`${process.env.REACT_APP_SERVER_BASE_URL}`);
          socket = io('http://localhost:3100');
          next(action);
          break;
        default:
          break;
      }
    }

    // Inputs (on)
    socket.on('message', message => {
      console.log('AND OUR BE SAYS', message);  //eslint-disable-line
      store.dispatch({
        type: 'SOCKET_MESSAGE',     //THIS IS A TEST, THIS IS NOT CORRECT OR FINAL
        payload: message,
      });
    });

    // Outputs (emit)
    if (payload) {
      socket.emit('message', {
        type,
        payload
      });
    }
  };
};

////////////////////////////////////////////////////////////////
// ***********MY OUTPUT**************
// startGame action => send the request to start the game (type = startGame, no payload)
// receiveDrawing action => send the drawings to the BE (type = passDrawing, payload = three arrays of x, y and t)
// for that create a drawing inside payload (payload.drawing) (nest it)
// passFinalDrawing => When the word is correct (logic) or the time is up (socket message) => dispatch an action which sends the final image
// (type passFinalDrawing, payload.drawingSVG = svg string) {prior to that, it has to be converted on the frontend to svg format}
// leaveGame => not for MVP
// 

// ***********MY INPUT**************
// gameCreated => signalise that the game is created, (type = gameCreated, payload { gameKey })
// joined => signalise that the player has joined an existing room (type = playerJoin, payload { players { [ { playerName, playerAvatar, playerId } ] } })
// startGame => say that the game (not round) has started (type = startGame, payload { gameKey, numRounds })
// startRound => say that the round has started (type = startRound, payload { time, word })
// guess => guesses from the google API, (type = guess, payload { guessWord })
// victory => if the player has won the game, (type = victory, payload { playerId })
// roundOver => if time is over || all players have won, (type = roundOver) => that's where the passFinalDrawing action is triggered
// roundDrawings => send the drawings from 5 players, (type = roundDrawings, payload { playerId, svg })
// gameOver => all five rounds have finished, (type = gameOver, payload { playerId: [svgs] })
//
////////////////////////////////////////////////////////////////