import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import Dashboard from './components/Dashboard'

const AppContainer = createAppContainer(Dashboard)

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}
