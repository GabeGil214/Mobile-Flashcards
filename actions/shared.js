import { receiveDecks } from './deck'
import { receiveCards } from './card'
import { getInitialData } from '../utils/api'


export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({decks, cards}) => {
        dispatch(receiveDecks(decks))
        dispatch(receiveCards(cards))
      })
  }
}
