import React, { useState } from 'react';
import io from 'socket.io-client';

import './App.css';

let socket = io('http://localhost:3100/');

socket.on('messageServer', server => {
  switch (server.type) {
    case 'CREATE':
    socket = io('http://localhost:3100/game');
      console.log('server.payload', server);
      //server.in(server.payload.key).emit('message', ()=> console.log('Connected to doggy'));
  };
});

const App = () => {

  // const [inRoom, setInRoom] = useState(false);
  // const [roomName, setRoomName] = useState(null);

  // useEffect(() => {
  //   if (!inRoom) {
  //     socket.emit('room', { msg: 'This is client only serving first time...' });
  //     setInRoom(true);
  //   }
  // }, [inRoom]);

  // socket.on('connect', server => {})
 
  const handleCreatorConnect = () => {
    socket.emit('messageClient', {
      type: 'connect'
    })
  }

  // const handleCreatorConnect = () => {

  // }
  // const handleCreatorConnect = () => {

  // }
  // const handleCreatorConnect = () => {

  // }
  // const handleCreatorConnect = () => {

  // }
  // const handleCreatorConnect = () => {

  // }
  // const handleCreatorConnect = () => {

  // }


  return <div className='App'>
    <button onClick={handleCreatorConnect}>Creator connect and join room</button>
    {/* <button onClick={handleCreatorConnect}>Start without the minimum expected player number</button>
    <button onClick={handleCreatorConnect}>Normal player connect and join room (broadcast)</button>
    <button onClick={handleCreatorConnect}>Creator Start</button>
    <button onClick={handleCreatorConnect}>Send vectors</button>
    <button onClick={handleCreatorConnect}>Player 1 wins</button>
    <button onClick={handleCreatorConnect}>Player 2 wins (if exists)</button>
    <button onClick={handleCreatorConnect}>Game finishes (no more time)</button>
    <button onClick={handleCreatorConnect}>Server drawing send and game status</button>
    <button onClick={handleCreatorConnect}>New round</button>
    <button onClick={handleCreatorConnect}>All rounds finished</button> */}
    </div>;
}

export default App;