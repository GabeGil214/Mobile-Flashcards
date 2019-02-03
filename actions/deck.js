export const RETRIEVE_DECKS = 'RETRIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

export function retrieveDecks(decks){
  return {
    type: RETRIEVE_DECKS,
    decks,
  }
}

export function addDeck(deck){
  return{
    type: ADD_DECK,
    deck,
  }
}

export function removeDeck(deckID){
  return {
    type: REMOVE_DECK,
    deckID
  }
}
