import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js';
import { connect } from 'react-redux'

class CardPreview extends Component {

  state = {
    showAnswer: false
  }

  toggleAnswer = () => {
    if(this.state.showAnswer === false){
      this.setState({
        showAnswer: true
      })
    } else {
        this.setState({
          showAnswer: false
        })
      }
    }

  render(){
    const { currentCard } = this.props

    const { showAnswer } = this.state

     return (
       <TouchableOpacity
         style={styles.deckContainer}
         onPress={this.toggleAnswer()}
         >
         <View style={styles.card}>
           {!showAnswer ?
             <Text style={styles.cardQuestion}>{currentCard.question}</Text>
             :
             <Text style={styles.cardQuestion}>{currentCard.answer}</Text>
           }
         </View>
       </TouchableOpacity>
       )
     }
}

function mapStateToProps({ cards },{ cardID }){
    const currentCard = cards[cardID]
    console.log(cards)
    console.log(cardID)

    return {
      currentCard
    }
}

export default connect(mapStateToProps)(CardPreview)
