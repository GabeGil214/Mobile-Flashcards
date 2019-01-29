import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import DeckStack from './components/DeckStack'
import Dashboard from './components/Dashboard'

const Stack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  DeckStack: {
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
