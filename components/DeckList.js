import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'
import DeckPreview from './DeckPreview'

class DeckList extends Component {
  render(){
     return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.deckContainer} onPress={() => this.props.navigation.navigate('Deck')}>
          <DeckPreview />
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckList
