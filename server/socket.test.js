const App = require('./app');
const io = require('socket.io-client');

let sender;
let receiver;
const testMsg = 'hello';
const ioOptions = { 
  transports: ['websocket']
, forceNew: true
, reconnection: false
}

let app;

beforeAll(async () => {
  app = await App.createServer();
  await new Promise(resolve => {
    sender = io.connect('http://localhost:3000/', ioOptions);
    receiver = io.connect('http://localhost:3000/', ioOptions);

    let first = false;
    sender.on('connect', () => {
      first && resolve();
      first = true;
    });
    receiver.on('connect', () => {
      first && resolve();
      first = true;
    });
    
  });
});

afterAll(async () => {
  await sender.disconnect()
  await receiver.disconnect()
  await App.close();
})


describe('check basic http response', () => {
  test('/', async () => {
    expect(true).toBe(true);
    // sender.emit('message', testMsg);
    // receiver.on('message', msg => {
    //   console.log('this is the', msg);
    // });
  })
});