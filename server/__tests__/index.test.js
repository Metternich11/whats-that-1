const App = require('../app');
let app;
const request = require('supertest');
const io = require('socket.io-client');
const mock = require('../mocks/mocks.js');

let sender;
let receiver;
const testMsg = 'hello';
const ioOptions = { 
  transports: ['websocket']
, forceNew: true
, reconnection: false
}

describe('check basic http response', () => {

  beforeAll(async () => {
    app = await App.createServer();
  });
  
  afterAll(async () => {
   app = await App.close();
  })

  test('/', async () => {
    await request(app)
      .get('/')
      .expect(200);
  })
  test('/lobby', async () => {
    await request(app)
      .get('/lobby')
      .expect(200);
  })
  test('/create', async () => {
    await request(app)
      .get('/create')
      .expect(200);
  })
  test('/join', async () => {
    await request(app)
      .get('/join')
      .expect(200);
  })
})

describe('check basic socket' , () => {
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

  test('/', async () => {
    expect(true).toBe(true);
  })
})

