import { receiveDecks } from './deck'
import { getInitialData } from '../utils/api'


export function handleInitialData () {
  return (dispatch) => {
    getInitialData()
    .then(({decks}) => {
      dispatch(receiveDecks(decks))
    })
  }
}
