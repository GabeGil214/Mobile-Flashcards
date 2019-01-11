import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'

const Stack = createStackNavigator({
  Deck: {
    screen: Deck,
  },
  NewDeck: {
    screen: NewDeck,
  }
})

const AppContainer = createAppContainer(Stack)

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}
