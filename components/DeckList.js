import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import styles from '../styles/stylesheet.js'
import DeckPreview from './DeckPreview'
import { handleInitialData } from '../actions/shared'

class DeckList extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const { deckIds } = this.props
    console.log(deckIds)

     return (
      <View style={styles.container}>
        <FlatList
          data={deckIds}
          renderItem={(deckID) => (
            <TouchableOpacity
              key={deckID}
              style={styles.deckContainer}
              onPress={() => this.props.navigation.navigate('Deck', {
                deckID: deckID
              })}>
              <DeckPreview deckID={deckID}/>
            </TouchableOpacity>
          )}/>
      </View>
    )
  }
}

function mapStateToProps({decks}){
  const deckIds = Object.keys(decks)
  return {
    deckIds
  }
}

export default connect(mapStateToProps)(DeckList)
