const App = require('./app');
let app;
const request = require('supertest');

beforeAll(async () => {
  app = await App.createServer();
});

afterAll(async () => {
 await App.close();
})

describe('check basic http response', () => {
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
