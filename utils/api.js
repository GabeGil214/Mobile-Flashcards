import {
  _getCards,
  _getDecks
} from './_DATA.js'


export function getInitialData() {
  return _getDecks().then( decks => ({decks}))
}
