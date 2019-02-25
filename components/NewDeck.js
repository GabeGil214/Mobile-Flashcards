import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/stylesheet.js'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import addDeck from '../actions/deck'

class NewDeck extends Component {

  handleAddDeck(deck) {
    this.props.dispatch(addDeck(deck))
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.formTitle}>Title</Text>
        <TextInput style={styles.formInput} />
        <TouchableOpacity style={styles.btn} onPress={() => this.handleAddDeck()}>
          <Text style={styles.btnText}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewDeck
