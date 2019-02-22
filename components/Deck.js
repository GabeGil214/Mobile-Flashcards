import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/stylesheet.js';
import { connect } from 'react-redux'
import CardPreview from './CardPreview'

class Deck extends Component {

  getCardIds(deckID){
    const { decks } = this.props

    return decks[deckID].cards

  }
  render(){
    const deckID = this.props.navigation.getParam('deckID')

    const cardIds = this.getCardIds(deckID)

     return (
      <View style={styles.container}>
        <FlatList
          data={cardIds}
          renderItem={(cardID) => (
            <TouchableOpacity
              key={cardID}
              style={styles.deckContainer}
              onPress={() => this.props.navigation.navigate('Card', {
                cardID: cardID
              })}>
              <CardPreview cardID={cardID.item}/>
            </TouchableOpacity>
          )}/>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('NewCard')}>
          <Text style={styles.btnText}>Add Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={() => this.props.navigation.navigate('Quiz')}>
          <Text style={styles.btnText}>Take Quiz</Text>
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

export default connect(mapStateToProps)(Deck)
