const App = require('./app');

describe('App', () => {
  test('should return a promise', async () => {
    const promise = App(2000);
    expect(promise.constructor.name).toBe('Promise');
    const app = await promise;
    await app.teardown();
  });
});