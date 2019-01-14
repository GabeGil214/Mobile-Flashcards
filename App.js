import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Deck from './components/Deck'
import Dashboard from './components/Dashboard'

const Stack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Deck: {
    screen: DeckStack,
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
