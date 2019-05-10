const outputRouter = require('../socketRouter/outputRouter')
const gameModel = require('../models/gameModel');

const gameController = {
  createGame: (socket, message) => {
    if(gameModel.addGame(message.payload.key, socket.id)) {
      gameModel.addPlayer(message.payload, socket.id);
      outputRouter.join(socket, message.payload.key);
      outputRouter.sendMessageRoom(socket, message);
    }
  }
}

// const gameModel = require('../models/gameModel')

// class GameController {
//   constructor(game, socketController) {
//     this.game = game;
//     this.socket = socketController;

//     this.endRound = this.endRound.bind(this);
//   }

//   startGame () {
//     //setup game
//     try{
//       startRound();
//     } catch (e) {
//       if(typeof e === GameNotEnoughPlayersError) {
//         socket.sendNotEnoughPlayers();
//       }
//     }
//   };

//   adminJoin () {};
//   playerJoin () {};


//   startRound () {
//     this.game.startNewRound(); // tells the game to increase currentRound (figures out the new word)
//     socket.sendStart(this.game.currentRound); // sends the info for this round
//     this.timer = setTimeout(this.endRound, 26000);
//   };

//   endRound() {
//     socket.sendEndRound();
//     if (this.game.isLastRound()) {
//       this.endGame();
//     } else {
//       this.startRound();
//     }
//   };

//   endGame () {
//     socket.sendEndGame(this.game);
//   };

//   receiveDrawing(drawing) {
//     this.game.addDrawing();
//     if(this.game.isCurrentRoundComplete()) {
//       clearTimeout(this.timer);
//       this.endRound();
//     }
//   };
// }

module.exports = gameController;