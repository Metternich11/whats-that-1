import React from 'react';
import io from 'socket.io-client';

import './App.css';

const socket = io('http://localhost:2000/');

socket.on('messageServer', server => {
  switch (server.type) {
    case 'CREATE':
      const doggySocket = io('http://localhost:2000');
      doggySocket.on('con', server => {
        console.log(server);
      });
      break;
    default:
      console.log(server);
  }
});

const handleCreatorConnect = () => {
  socket.emit('message', {
    type: 'createGame',
    payload: {
      player: {
        playerName: 'Shanshan',
        playerAvatar: {ty: 'qwe'}
      },
      gameKey: 'one-word'
    }
  });
};

const handleAdditionalPlayer = () => {
  socket.emit('message', {
    type: 'joinGame',
    payload: {
      player: {
        playerName: 'Dario',
        playerAvatar: {ty: 'qwe'}
      },
      gameKey: 'one-word'
    }
  });
};

const handleStartWithNoPlayers = () => {
  socket.emit('message', {
    type: 'noPlayers'
  });
};

const handleCreatorStart = () => {
  socket.emit('message', {
    type: 'startGame'
  });
};

const handleDrawing = () => {
  socket.emit('message', {
    type: 'drawing'
  });
};

const handleOnePlayerWin = () => {
  socket.emit('message', {
    type: 'playerWin'
  });
};

const handleEndRound = () => {
  socket.emit('message', {
    type: 'endRound'
  });
};

const handleEndGame = () => {
  socket.emit('message', {
    type: 'endGame'
  });
};

const App = () => {
  return (
    <div className='App'>
      <button onClick={handleCreatorConnect}>
        Creator connect and join room
      </button>
      <button onClick={handleStartWithNoPlayers}>
        Start without the minimum expected player number
      </button>
      <button onClick={handleAdditionalPlayer}>Add more players</button>
      <button onClick={handleCreatorStart}>Creator Start</button>
      <button onClick={handleDrawing}>Send vectors</button>
      <button onClick={handleOnePlayerWin}>1 of the players wins</button>
      <button onClick={handleEndRound}>Round Ends</button>
      <button onClick={handleEndGame}>Game Finishes</button>
    </div>
  );
};

export default App;
