import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js';
import { connect } from 'react-redux'

class Deck extends Component {
  render(){
     return (
      <View style={styles.container}>
        <FlatList
          data={CardIds}
          renderItem={(cardID) => (
            <TouchableOpacity
              key={cardID}
              style={styles.deckContainer}
              onPress={() => this.props.navigation.navigate('Card', {
                cardID: cardID
              })}>
              <CardPreview cardID={cardID}/>
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

function mapStateToProps({decks, cards},{deckID}){
  const cardIds = decks[deckID].cards

  return {
    cardIds
  }
}

export default connect(mapStateToProps)(Deck)
