import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import NewCard from './NewCard'
import Quiz from './Quiz'

const DeckStack = createStackNavigator({
  NewCard: {
    screen: NewCard,
  },
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: Quiz
  }
})

class Deck extends Component {
  render(){
     return (
      <View style={styles.container}>
        <Text>Here you can add cards to a deck or take a quiz!</Text>
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

export default createAppContainer(DeckStack)
