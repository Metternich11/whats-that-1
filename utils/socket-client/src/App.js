import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import './App.css';

const socket = io('http://localhost:3100');
function App() {
  const [inRoom, setInRoom] = useState(false);

  useEffect(() => {
    if (!inRoom) {
      socket.emit('room', { msg: 'This is client only serving first time...' });
      setInRoom(true);
    }
  }, [inRoom]);
  socket.on('welcome', server => console.log(server.msg));

  return <div className='App' />;
}

export default App;
