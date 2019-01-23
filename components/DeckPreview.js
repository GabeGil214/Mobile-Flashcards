import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

class DeckPreview extends Component {
  render(){
     return (
        <TouchableOpacity style={styles.deck} onPress={() => this.props.navigation.navigate('Deck')}>
          <Text style={styles.deckTitle}>DECK</Text>
          <Text style={styles.deckSubtitle}>0 cards in deck</Text>
        </TouchableOpacity>
    )
  }
}

export default DeckPreview
