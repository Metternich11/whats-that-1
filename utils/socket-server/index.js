const Koa = require('koa');
const cors = require('@koa/cors');
const socket = require('./socket');

const app = new Koa();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 3100;

app.use(cors());

socket(io);

http.listen(PORT, error => {
  if (error) console.error('𐄂 - Unable to connect to the server: ', error);
  console.log(`✓ - Server listening on ${PORT}.`);
});
