import {
  _getCards,
  _getDecks
} from './_DATA.js'


export function getInitialData() {
  return Promise.all([
    _getDecks(),
    _getCards(),
  ]).then(([decks, cards]) => ({
    decks,
    cards,
  }))
}
