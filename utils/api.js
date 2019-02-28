import {
  _getCards,
  _getDecks,
  _saveAddCard,
  _saveAddDeck
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

export function saveAddCard(newCard) {
  return _saveAddCard(newCard)
}

export function saveAddDeck(newDeck) {
  return _saveAddDeck(newDeck)
}
