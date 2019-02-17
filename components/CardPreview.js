import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native';
import styles from '../styles/stylesheet.js';
import { connect } from 'react-redux'

class CardPreview extends Component {
  render(){
    const { currentCard } = this.props

     return (
        <View style={styles.card}>
          <Text style={styles.cardQuestion}>{currentCard.question}</Text>
        </View>
    )
  }
}

function mapStateToProps({ cards },{ cardID }){
    const currentCard = cards[cardID]

    return {
      currentCard
    }
}

export defautl connect(mapStateToProps)(CardPreview)
