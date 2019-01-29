import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import NewDeck from './NewDeck'
import DeckList from './DeckList'

const Dashboard = createBottomTabNavigator({
  Decks: {
    screen: DeckList
  },
  Add: {
    screen: NewDeck
  }
})

export default createAppContainer(Dashboard)
