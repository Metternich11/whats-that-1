const App = require('./app');
let app;
const request = require('supertest');

beforeAll(async () => {
  app = await App(2001);
});

afterAll(async () => {
  await app.teardown();
});

describe('check basic http response', () => {
  test('/', async () => {
    await request(app.server)
      .get('/')
      .expect(200);
  });
  test('/getGameKey', async () => {
    await request(app.server)
      .get('/getGameKey')
      .expect(200);
  });
});