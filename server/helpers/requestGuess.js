const fetch = require('node-fetch');

function requestQuickDraw (drawing) {
  console.log('REQUEEST')
  const url = 'https://inputtools.google.com/request?ime=handwriting&app=quickdraw&dbg=1&cs=1&oe=UTF-8';
  const data = JSON.stringify({
    options: 'enable_pre_space',
    requests: [
      {
        writing_guide: {
          writing_area_width: 375,
          writing_area_height: 375
        },
        ink: drawing,
        language: 'quickdraw'
      }
    ]
  });
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
