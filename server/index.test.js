const App = require('./app');
let app;
const request = require('supertest');

beforeAll(async () => {
  app = await App(2000);
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
  // test('/lobby', async () => {
  //   await request(app.server)
  //     .get('/lobby')
  //     .expect(200);
  // });
  // test('/create', async () => {
  //   await request(app.server)
  //     .get('/create')
  //     .expect(200);
  // });
  // test('/join', async () => {
  //   await request(app.server)
  //     .get('/join')
  //     .expect(200);
  // });
});
