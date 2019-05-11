const App = require('./app');
const io = require('socket.io-client');
const port = 2002;

const mocks = require('./mocks/mocks.js');

let app;

let sender;
const testMsg = 'hello';
const ioOptions = {
  transports: ['websocket'],
  forceNew: true,
  reconnection: false
};

beforeAll( done => {
  App(port).then(instance => {
    app = instance;
    sender = io.connect(`http://localhost:${port}/`, ioOptions);
    sender.on('connect', () => {
      done();
    });
    sender.on('error', error => {
      console.error(error);
    });
  });
});

afterAll(async () => {
  await sender.disconnect();
  await app.teardown();
});

describe('check socket setup', () => {
  test('/', () => {
    sender.emit('message', testMsg);
    sender.on('message', () => {
    });
  });
});