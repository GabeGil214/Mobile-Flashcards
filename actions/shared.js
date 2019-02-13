import { receiveDecks } from './deck'
import { getInitialData } from '../utils/api'


export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({decks}) => {
        dispatch(receiveDecks(decks))
      })
  }
}
