import React from 'react';
import io from 'socket.io-client';

import './App.css';

const socket = io('http://localhost:3100/');

socket.on('messageServer', server => {
  switch (server.type) {
    case 'CREATE':
      const doggySocket = io('http://localhost:3100/doggy');
      doggySocket.on('con', server => {
        console.log(server);
      });
      break;
    default:
      console.log(server);
  }
});

const handleCreatorConnect = () => {
  socket.emit('messageClient', {
    type: 'connect'
  });
};

const handleAdditionalPlayer = () => {
  socket.emit('messageClient', {
    type: 'additionalPlayer'
  });
};

const handleStartWithNoPlayers = () => {
  socket.emit('messageClient', {
    type: 'noPlayers'
  });
};

const handleCreatorStart = () => {
  socket.emit('messageClient', {
    type: 'startGame'
  });
};

const handleDrawing = () => {
  socket.emit('messageClient', {
    type: 'drawing'
  });
};

const handleOnePlayerWin = () => {
  socket.emit('messageClient', {
    type: 'playerWin'
  });
};

const handleEndRound = () => {
  socket.emit('messageClient', {
    type: 'endRound'
  });
};

const handleEndGame = () => {
  socket.emit('messageClient', {
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
