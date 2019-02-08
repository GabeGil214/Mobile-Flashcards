import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../styles/stylesheet.js'
import DeckPreview from './DeckPreview'
import handleInitialData from '../actions/shared'

class DeckList extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

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

function mapStateToProps({decks}){
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
