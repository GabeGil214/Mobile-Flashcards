import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import middleware from './middleware';
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'

const store = createStore(reducer, middleware)


const Dashboard = createBottomTabNavigator({
  Decks: {
    screen: DeckList
  },
  Add: {
    screen: NewDeck
  }
})

const AppStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Deck: {
    screen: Deck,
  },
  NewCard: {
    screen: NewCard,
  },
  Quiz: {
    screen: Quiz
  }
})

const AppContainer = createAppContainer(AppStack)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}
