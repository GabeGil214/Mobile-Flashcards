export const RETRIEVE_CARDS = 'RETRIEVE_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'


export function retrieveCards(deckID, cards){
  return {
    type: RETRIEVE_CARDS,
    deckID,
  }
}

export function addCard(card){
  return {
    type: ADD_CARD,
    cardID,
  }
}

export function removeCard(cardID){
  return {
    type: REMOVE_CARD,
    cardID
  }
}
