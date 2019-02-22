import { RECEIVE_CARDS, ADD_CARD, REMOVE_CARD } from '../actions/card'

export default function cards (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CARDS :
      return {
        ...state,
        ...action.cards
      }
    case ADD_CARD :
      return {
        ...state,
        [action.cardID]: action.card
      }
    case REMOVE_CARD :
      return {
        ...state,
        //remove CARD logic
      }
    default:
      return state
  }
}
