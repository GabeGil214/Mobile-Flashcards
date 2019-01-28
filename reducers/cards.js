import { RETRIEVE_CARDS, ADD_CARD, REMOVE_CARD } from '../actions/CARD'

export default function cards (state = {}, action) {
  switch(action.type) {
    case RETRIEVE_CARDS :
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
