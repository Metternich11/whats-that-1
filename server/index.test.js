const App = require('./app');
const app = App.create();
const request = require('supertest');

afterAll(async () => {
  App.close();
});

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