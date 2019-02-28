import { receiveDecks, addCardtoDeck } from './deck'
import { receiveCards, addCard } from './card'
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

export function handleAddCard(question, answer, deckID){
    return (dispatch) => {
      const { decks } = getState()

      const newCard = {
        question,
        answer,
        deckID,
      }

      return saveAddCard(newCard)
        .then(({formattedCard}) => {
        dispatch(addCard(formattedCard, deckID))
        dispatch(addCardtoDeck(decks[deckID], [formattedCard.id]))
      })
    }
}
