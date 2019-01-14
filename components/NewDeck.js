import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'
import { createStackNavigator, createAppContainer } from 'react-navigation'

class NewDeck extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>This is to Add a new Deck</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('AddDeck')}>
          <Text style={styles.btnText}>Add a New Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewDeck
