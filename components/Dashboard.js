import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import NewDeck from './NewDeck'
import DeckPreview from './DeckPreview'

class DeckList extends Component {
  render(){
     return (
      <View style={styles.container}>
        <View style={styles.deckContainer}>
          <DeckPreview />
        </View>
      </View>
    )
  }
}

const Dashboard = createBottomTabNavigator({
  Decks: DeckList,
  Add: NewDeck
})

export default createAppContainer(Dashboard)
