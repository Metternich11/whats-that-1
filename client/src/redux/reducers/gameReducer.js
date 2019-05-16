import * as SocketTypes from "../actions/socketTypes";
import * as ActionTypes from "../actions/gameTypes";

const initialState = {
  word: [],
  join: {},
  inBetweenRounds: false,
  endGame: false,
  guess: "",
  winners: [],
  rounds: []
};

export default (state = initialState, action) => {
  if (action.type === ActionTypes.SOCKET_MESSAGE) {
    switch (action.payload.type) {
      case SocketTypes.GAME_CREATED:
        return {
          ...state,
          gameKey: action.payload.payload.gameKey
        };
      case SocketTypes.JOINED:
        return {
          ...state,
          players: action.payload.payload.players
        };
      case SocketTypes.START_ROUND:
        return {
          ...state,
          word: action.payload.payload.word,
          timer: action.payload.payload.timer,
          inBetweenRounds: !state.inBetweenRounds,
          round: action.payload.payload.roundNum,
          guess: undefined
        };
      case SocketTypes.END_ROUND:
        return {
          ...state,
          endRound: action.payload.payload.roundNum
        };
      case SocketTypes.GUESS:
        return {
          ...state,
          guess: action.payload.payload.word
        };
      case SocketTypes.VICTORY: {
        const data = action.payload.payload;
        return {
          ...state,
          rounds: [
            ...state.rounds,
            {
              roundNum: data.round.currentRound,
              winners: data.players
                .filter(player => {
                  const round = player.roundWins.find(
                    round => round.round === data.round.currentRound
                  );
                  return round && round.winner;
                })
                .map(player => player.id)
            }
            // {
            //     action.payroundNum,
            //     winners: [winnerId],
            //     // drawings: [{
            //     //   svg,
            //     //   author
            //     // }]
            // }
          ]

          // action.payload.payload.players.filter((player) => {
          //   return player.roundWins
        };
      }

      // {
      //   type: 'SOCKET_MESSAGE',
      //   payload: {
      //     type: 'roundDrawings',
      //     payload: {
      //       round: {
      //         currentRound: 1,
      //         word: 'helmet',
      //         roundStatus: false
      //       },
      //       playing: false,
      //       players: [
      //         {
      //           playerName: 'asdf',
      //           playerAvatar: {
      //             avatarStyle: 'Circle',
      //             topType: 'LongHairBob',
      //             accessoriesType: 'Round',
      //             hairColor: 'Blonde',
      //             facialHairType: 'Blank',
      //             facialHairColor: 'Brown',
      //             clotheType: 'GraphicShirt',
      //             clotheColor: 'Pink',
      //             graphicType: 'Pizza',
      //             eyeType: 'EyeRoll',
      //             eyebrowType: 'Default',
      //             mouthType: 'Twinkle',
      //             skinColor: 'Tanned'
      //           },
      //           roundWins: [
      //             {
      //               round: 1,
      //               winner: true
      //             }
      //           ],
      //           isCreator: true,
      //           gameKey: 'Cool-Snow',
      //           draws: [
      //             {
      //               round: 1,
      //               draw: '<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" height="375" width="375" viewBox="0 0 375 375"></svg>',
      //               word: 'helmet',
      //               winner: [
      //                 {
      //                   round: 1,
      //                   winner: true
      //                 }
      //               ]
      //             }
      //           ],
      //           id: 'b99X4dfRD6rkAf-ZAAAA'
      //         }
      //       ],
      //       totalRounds: 2,
      //       gameKey: 'Cool-Snow'
      //     }
      //   }
      // }

      case SocketTypes.ROUND_DRAWINGS: {
        const data = action.payload.payload;
        const newState = {
          ...state,
          rounds: state.rounds.filter(
            round => round.roundNum !== data.round.currentRound
          )
        };
        return {
          ...state,
          playerDrawings: action.payload.payload.players,
          rounds: [
            ...newState.rounds,
            {
              roundNum: data.round.currentRound,
              winners: data.players
                .filter(player => {
                  const round = player.roundWins.find(
                    round => round.round === data.round.currentRound
                  );
                  return round && round.winner;
                })
                .map(player => player.id),
              drawings: data.players.map(player => ({
                author: player.id,
                svg: player.draws.find(draw => {
                  return draw.round === data.round.currentRound;
                }).draw,
                word: player.draws.find(draw => {
                  return draw.round === data.round.currentRound;
                }).word,
                playerName: player.playerName,
                playerAvatar: player.playerAvatar
              }))
            }
          ]
        };
      }
      case SocketTypes.GAME_OVER:
        return {
          ...state,
          endGame: !state.endGame
        };
      case SocketTypes.GAME_RESET: {
        const game = action.payload.payload;
        return {
          ...initialState,
          gameKey: game.gameKey,
          players: game.players,
          round: game.round.currentRound,
          inBetweenRounds: game.round.roundStatus
        };
      }
      default:
        return state;
    }
  } else {
    return state;
  }
};

// {
//   type: 'SOCKET_MESSAGE',
//   payload: {
//     type: 'victory',
//     payload: {
//       round: {
//         currentRound: 1,
//         word: 'lightning',
//         roundStatus: true
//       },
//       playing: false,
//       players: [
//         {
//           playerName: 'asd',
//           playerAvatar: {
//             avatarStyle: 'Circle',
//             topType: 'ShortHairShortFlat',
//             accessoriesType: 'Blank',
//             hairColor: 'BlondeGolden',
//             facialHairType: 'Blank',
//             facialHairColor: 'BrownDark',
//             clotheType: 'BlazerShirt',
//             clotheColor: 'PastelYellow',
//             graphicType: 'Diamond',
//             eyeType: 'Wink',
//             eyebrowType: 'DefaultNatural',
//             mouthType: 'Grimace',
//             skinColor: 'Brown'
//           },
//           roundWins: [
//             {
//               round: 1,
//               winner: true
//             }
//           ],
//           isCreator: true,
//           gameKey: 'Wild-Haze',
//           draws: [],
//           playerId: '2CZ5wmgztVyfElyvAAAC'
//         }
//       ],
//       totalRounds: 2,
//       gameKey: 'Wild-Haze'
//     }
//   }
// }
