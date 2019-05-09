module.exports = {
  createClient: {
    type: 'createRoom',
    payload: {
      key: 'firstGame'
    }
  },
  joinClient: {
    type: 'joinRoom',
    payload: {
      key: 'firstGame'
    }
  }
}