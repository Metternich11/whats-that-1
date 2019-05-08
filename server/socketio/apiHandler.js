const fetch = require('node-fetch');

function requestQuickDraw (socket, message) {
  const url = 'https://inputtools.google.com/request?ime=handwriting&app=quickdraw&dbg=1&cs=1&oe=UTF-8';
  const data = JSON.stringify(message.draw);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: data
  }

  return fetch(url, options).then(res => {
      if (res.status !== 200) {
        throw new Error('error');
      }
      return res.json();
    })
    .then(data => {
      return data[1][0][1][0];
    })
    .catch(err => console.error(err)); // eslint-disable-line
}

module.exports = requestQuickDraw;
