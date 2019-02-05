import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from '../actions/deck'

export default function decks (state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        [action.deckID]: action.deck
      }
    case REMOVE_DECK :
      return {
        ...state,
        //remove deck logic
      }
    default:
      return state
  }
}
